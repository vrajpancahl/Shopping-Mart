import data from '../data.json';
// import './Landing_page_CSS.css';
import './User_cart_CSS.css';
import './media_queries.css';
import { useNavigate } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { app } from '../firebase';
import { getFirestore, updateDoc, arrayRemove } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Loading from '../Components/Loading';
import { empty_cart } from "../image_st_file";
import BackToPreviousPage from '../Components/BackToPreviousPage';



function User_cart(props) {
    const db = getFirestore(app);
    let [user_data_array, set_user_data_array] = useState('');
    const [loading, set_loading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if((localStorage.getItem("email")) == undefined || (localStorage.getItem("email")) == null){
            alert("For better experience, continue with your account");
            navigate('/', { replace: true });
        }
        else{
            retrive_Data();
        }
    },[])

    // useEffect(()=>{
    //     if(localStorage.getItem('email') !== null){
    //     }
    // },[])

    function gotoProductDetail(_id, _cate) {
        props.ForCart_set_product_detail_info_fun([_id, _cate]);
        navigate('/product_detail');
    }

    function get_user_data(_data_) {
        set_user_data_array(_data_.product_id_array);
    }

    const retrive_Data = async () => {
        const docRef = doc(db, 'shoping_store', localStorage.getItem('email'));
        set_loading(true);
        await getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    get_user_data(docSnap.data());
                }
                else {
                    alert("No Data retrive");
                }
                set_loading(false)
            })
            .catch((error) => {
                console.log(error);
                alert("error in data retriving.")
            })
    }

    const delete_cart_product = async (product_id) => {
        try {
            const docRef = doc(db, 'shoping_store', localStorage.getItem('email'))
            set_loading(true)
            await updateDoc(docRef, {
                product_id_array: arrayRemove(product_id)
            });
            set_loading(false)
        }
        catch (error) {
            console.log(error);
            alert("Error in deleting product");
        }
        retrive_Data();
    }


    

    return (
        <div>
            {(loading == true) ? <Loading /> : ""}
            <div className='search-result-page-header'>
                <BackToPreviousPage path={"/landing_page "} />
                <div><h3>User : {localStorage.getItem('email')}</h3></div>
            </div>
            <div className='User-cart-page-main-container'>
                {
                    data.map((e) => {
                        let product_name = '';
                        if ((e.name).length < 90) {
                            product_name = e.name;
                        }
                        else {
                            product_name = e.name;
                            product_name = (((e.name).substring(0, 90)).concat("..."));
                        }
                        return (
                            ((user_data_array.length > 0) &&
                                user_data_array.map((item) => {
                                    console.log("user data map");
                                    if (e.id == item) {
                                        return (
                                            <div className="Cart-Card">
                                                <div  onClick={() => { gotoProductDetail(e.id, e.category) }}  className='cart-card-section1'>
                                                    <div className="cart-card-img-container">
                                                        <img className="cart-card-img" src={require(`../images/${e.image_name[0]}`)} />
                                                    </div>
                                                    <div className='cart-text-container'>
                                                        <p className='card-text product-detail-text put_line_height'>{product_name}</p>
                                                        <p className='cart-card-text-price product-detail-text'>₹ {e.price}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button onClick={() => { delete_cart_product(e.id) }} className='cart-delet-product-button'>Delete</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            )
                        )
                    })
                }
                {(user_data_array.length == 0 && <img className='product-not-found-img' src={empty_cart} alt='Product Not Find' />)}
            </div>
        </div>
    )
}


export default User_cart;
