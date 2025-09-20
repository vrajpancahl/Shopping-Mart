
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
    const db = getFirestore(app);
    const navigate = useNavigate();
    const [loading, set_loading] = useState(false);
    const [pic_arr, set_pic_arr] = useState(0);
    const [img_ind, setImgIndex] = useState(0);

    useEffect(()=>{
        // Code for Scrolling top to screen
        if((localStorage.getItem("email")) == null){
        alert("For better experience, continue with your account");
        navigate('/', { replace: true });
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    function assign_pic_arr() {
        setImgIndex(0);
        //Set product main image
        data.forEach(e => {
            if (e.id == props.product_detail_info_var[0]) {
                set_pic_arr(e.image_name)
            }
        })
    }

    //function run only in first render
    useEffect(() => {
        assign_pic_arr();
    }, [])
    
    
    //function run only in first render, and if any changes in listed variable 
    useEffect(() => {
        assign_pic_arr();
    }, [props.product_detail_info_var])

    //Recall current page, with new selected product
    function gotoProductDetail(_id, _cate) {
        props.set_product_detail_info_fun([_id, _cate]);
        navigate('/product_detail')
    }

    //Perfroming add to cart process
    const addToCart = async () => {
        const corrent_user = localStorage.getItem("email"); // getting email from localhost
        try {
            const docRef = doc(db, 'shoping_store', corrent_user)
            set_loading(true);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                await updateDoc(docRef, {
                    product_id_array: arrayUnion(props.product_detail_info_var[0])
                })
            }
            else {
                setDoc(docRef, {
                    product_id_array: [`${props.product_detail_info_var[0]}`]
                });
            }
            set_loading(false);
            alert("Done! Added to cart");
        }
        catch (error) {
            console.log("Add to cart fuction ERROR: ", error);
            alert("Something went wrong!!")
        }
    }

    // Use for iterate product images to next
    function changImgNext() {
        if (img_ind === pic_arr.length - 1) {
            setImgIndex(0);
        }
        else {
            setImgIndex(img_ind + 1);
        }
    }
    
    // Use for iterate product images to previous
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
            <Navbar_Component sidebar_show_fun2={props.sidebar_show_fun} sidebar_show_var2={props.sidebar_show_var} search_text_fun2={props.search_text_fun} search_text_var2={props.search_text_var} 
            set_product_detail_info_fun2={props.set_product_detail_info_fun}
            show_suggestion_var2={props.show_suggestion_var} set_show_suggestion_fun2={props.set_show_suggestion_fun}/>
            <nav >
                <Sidebar_Component sidebar_show2={props.sidebar_show} sidebar_show_fun2={props.sidebar_show_fun}/>
            </nav>
            {(loading == true) ? <Loading /> : ""}

            {/* Page header includes (previous page button)*/}
            <div className='search-result-page-header'>
                <BackToPreviousPage path={"/search_result_page"} />
                <div></div>
            </div>
            {/* Page header END */}

            {/* Searched product detail container */}
            <div className='product-container'>
                {/* Proudct image container */}
                <div className="product-image-conatiner">
                    {/* Button for next image */}
                    <button type="button" className='image-change-button advertise-img-changing-previous-button' onClick={changImgPrevious} ><GrPrevious /></button>
                    {
                        (pic_arr !== 0 && <div className='image-conatiner'>
                            <img className='card-img' src={require(`../images/${pic_arr[img_ind]}`)} />
                        </div>)
                    }
                    {/* Button for previous image */}
                    <button type="button" onClick={changImgNext} className="image-change-button advertise-img-changing-next-button"><GrNext /></button>
                </div>
                {/* Product image container END */}
                
                {/* Product information container */}
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
                {/* Product information container END*/}
            </div>
            {/* Searched product detail container END*/}
            
            {/* Add to cart button */}
            <div className='addtocart-button-container '>
                <button onClick={() => { addToCart() }} className='addtocart-button contact-cursorpointer'>Add to Cart</button>
            </div>
            {/* Add to cart button END*/}

            {/* Heading for Similar product */}
            <h2 className='page-heading-grey-underline'>Similar products</h2>
            {/* Heading for Similar product END*/}

            {/* Conatiner show Similar category products */}
            <div className='similar-product-container'>
                {
                    // Mapping data for similar catagory products
                    data.map((e) => {
                        let product_name = (((e.name).substring(0, 17)).concat("...")); 
                        if ((e.id != props.product_detail_info_var[0]) && ((e.category).includes(props.product_detail_info_var[1]))) {
                            return (
                            // Card for show product 
                            <div id='similar_product_card' onClick={() => gotoProductDetail(e.id, e.category)} className='Card'>
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
                            // Card for show product END
                            )
                        }
                    })
                }
            </div>
            {/* Conatiner show Similar category products */}
        </div>
        // Prduct detail page container END
    )
}

export default Product_detail;
