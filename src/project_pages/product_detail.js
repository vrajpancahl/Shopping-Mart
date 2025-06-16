
import './product_detail_CSS.css'
import './media_queries.css';
import Navbar_Component from '../Components/Navbar';
import Sidebar_Component from '../Components/Sidebar';
import data from '../data.json';
import { useNavigate } from 'react-router-dom';
import BackToPreviousPage from '../Components/BackToPreviousPage';
import 'firebase/firestore';
import { collection, getFirestore, arrayUnion, updateDoc, getDoc } from 'firebase/firestore';
import { addDoc, doc, setDoc } from 'firebase/firestore';
import { app } from '../firebase';
import Loading from '../Components/Loading';
import { useEffect, useState } from 'react'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


function Product_detail(props) {
    console.log("Product Detail page")

    const db = getFirestore(app);
    const navigate = useNavigate();
    const [loading, set_loading] = useState(false);
    const [pic_arr, set_pic_arr] = useState(0);
    const [img_ind, setImgIndex] = useState(0);

    function assign_pic_arr() {
        setImgIndex(0);
        data.forEach(e => {
            if (e.id == props.product_detail_info_var[0]) {
                set_pic_arr(e.image_name)
            }
        })
    }

    useEffect(() => {
        assign_pic_arr();
    }, [])

    useEffect(() => {
        assign_pic_arr();
    }, [props.product_detail_info_var])

    function gotoProductDetail(_id, _cate) {
        props.set_product_detail_info_fun([_id, _cate]);
        navigate('/product_detail')
    }

    const addToCart = async () => {

        console.log("Add to cart called");
        const corrent_user = localStorage.getItem("email");
        try {
            const docRef = doc(db, 'shoping_store', corrent_user)
            set_loading(true);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log('Update called');
                await updateDoc(docRef, {
                    product_id_array: arrayUnion(props.product_detail_info_var[0])
                })
            }
            else {
                console.log("New Created");
                setDoc(docRef, {
                    product_id_array: [`${props.product_detail_info_var[0]}`]
                });
            }
            set_loading(false);
        }
        catch (error) {
            console.log("Add to card fuction ERROR: ", error);
            alert("Erro in ADD TO CART")
        }
    }

    function changImgNext() {
        if (img_ind === pic_arr.length - 1) {
            setImgIndex(0);
        }
        else {
            setImgIndex(img_ind + 1);
        }
    }
    function changImgPrevious() {
        if (img_ind === 0) {
            setImgIndex(pic_arr.length - 1);
        }
        else {
            setImgIndex(img_ind - 1);
        }
    }

    return (
        <div>
            <Navbar_Component sidebar_show_fun2={props.sidebar_show_fun} sidebar_show_var2={props.sidebar_show_var} search_text_fun2={props.search_text_fun} />
            <nav >
                <Sidebar_Component sidebar_show2={props.sidebar_show} />
            </nav>
            {(loading == true) ? <Loading /> : ""}
            {console.log("pro_Det =>", props.product_detail_info_var)}
            <div className='search-result-page-header'>
                <BackToPreviousPage path={"/search_result_page"} />
                <div></div>
            </div>
            <div className='product-container'>

                <div className="product-image-conatiner">
                    <button type="button" className='image-change-button advertise-img-changing-previous-button' onClick={changImgPrevious} ><GrPrevious /></button>
                    {
                        (pic_arr !== 0 && <div className='image-conatiner'>
                            <img className='card-img' src={require(`../images/${pic_arr[img_ind]}`)} />
                        </div>)
                    }
                     
                    <button type="button" onClick={changImgNext} className="image-change-button advertise-img-changing-next-button"><GrNext /></button>
                </div>
                <div className='product-info-conatiner'>
                    {
                        data.map((e) => {
                            if (props.product_detail_info_var[0] == e.id)
                                return (
                                    <div>
                                        <h2 className='product-detail-text'>{e.name}</h2>
                                        <h2 className='product-detail-text'>₹ {e.price}</h2>
                                        {
                                            (e.description).map((element) => {
                                                return <h4 className='product-detail-text'>{element}</h4>
                                            })
                                        }
                                    </div>
                                )
                        })
                    }
                </div>
            </div>
            <div className='addtocart-button-container '>
                <button onClick={() => { addToCart() }} className='addtocart-button contact-cursorpointer'>Add to Cart</button>
            </div>
            <h2 className='page-heading-grey-underline'>Similar products</h2>
            <div className='similar-product-container'>
                {
                    data.map((e) => {
                        let product_name = (((e.name).substring(0, 17)).concat("..."));
                        if ((e.id != props.product_detail_info_var[0]) && ((e.category).includes(props.product_detail_info_var[1]))) {
                            let product_main_image = e.image_name[0];
                            return (<div id='similar_product_card' onClick={() => gotoProductDetail(e.id, e.category)} className='Card'>
                                <div className="card-img-container">
                                    <img className='card-img' src={require(`../images/${e.image_name[0]}`)} alt="" />
                                </div>
                                <div className="card-text">
                                    ₹ {e.price}
                                </div>
                                <div className="card-text">
                                    {product_name}
                                </div>
                            </div>
                            )
                        }
                    })
                }

            </div>

        </div>

    )
}

export default Product_detail;