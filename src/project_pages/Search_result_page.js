import data from '../data.json';
import './Landing_page_CSS.css';
import Navbar_Component from '../Components/Navbar';
import Sidebar_Component from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';
import BackToPreviousPage from '../Components/BackToPreviousPage';
import { useState } from 'react';
import Filter_product from '../Components/Filter_product';
import Footer from '../Components/Footer';
import { product_not_found } from '../image_st_file';

function Search_result_page(props) {
    console.log("Search page called", props.product_filter_MaxMinBrand_value_var);


    let flag = false;
    const navigate = useNavigate();
    const [filter_mode, set_filter_mode] = useState(false);
    const [Apply_filter, set_Apply_filter] = useState(false);

    function gotoProductDetail(_id, _cate) {
        props.set_product_detail_info_fun([_id, _cate]);
        navigate('/product_detail')
    }
    return (
        <div className="page-main-container" >
            <Navbar_Component sidebar_show_fun2={props.sidebar_show_fun} sidebar_show_var2={props.sidebar_show_var} search_text_fun2={props.search_text_fun} />
            <nav >
                <Sidebar_Component sidebar_show2={props.sidebar_show} />
            </nav>

            <div className='search-result-page-header'>
                <BackToPreviousPage path={"/landing_page"} />
                <button className='filter-toggle-buttton' onClick={() => { set_filter_mode(!(filter_mode)) }}>Filter Mode</button>
            </div>

            {(filter_mode == true && <Filter_product
                searchBar_text_var={props.search_text_var}
                MaxMinBrand_value_var={props.product_filter_MaxMinBrand_value_var}
                set_MaxMinBrand_value_fun={props.set_product_filter_MaxMinBrand_value_fun} filter_mode_var={filter_mode} Apply_filter_var={Apply_filter} Apply_filter_fun={set_Apply_filter} />)}


            <div className='Card-main-container'>
                {
                    data.map((e, i) => {

                        let product_name = (((e.name).substring(0, 17)).concat("..."));


                        // Remove comma and convert to number
                        const price = parseInt((e.price).replace(/,/g, ''), 10);



                        if (Apply_filter == true) {
                            let temp_brand = (props.product_filter_MaxMinBrand_value_var[2]).join("");
                            let temp_filterMode = (props.product_filter_MaxMinBrand_value_var[3]).join("");
                            console.log("temp brand:", temp_brand);

                            if ((temp_filterMode).includes("price") && (temp_filterMode).includes("brand")) {
                                if (((((price) > (props.product_filter_MaxMinBrand_value_var[0])) && ((price) < (props.product_filter_MaxMinBrand_value_var[1]))) && ((temp_brand).includes(e.brand)))) {

                                    console.log("1) price & brand both");
                                    return (<div onClick={() => gotoProductDetail(e.id, e.category)} className='Card'>
                                        {flag = true}
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
                            }
                            else if ((temp_filterMode).includes("price")) {
                                if (((price) > (props.product_filter_MaxMinBrand_value_var[0])) && ((price) < (props.product_filter_MaxMinBrand_value_var[1]))) {
                                    console.log("2) Only price for ", e.price);

                                    return (<div onClick={() => gotoProductDetail(e.id, e.category)} className='Card'>
                                        {flag = true}

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
                            }
                            else if ((temp_filterMode).includes("brand")) {
                                if (((temp_brand).includes(e.brand))) {
                                    console.log("3) Only brand ");

                                    return (<div onClick={() => gotoProductDetail(e.id, e.category)} className='Card'>
                                        {flag = true}
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
                            }
                            else {
                                console.log(temp_brand);
                                console.log("flag ",flag);
                                console.log("i ",i);
                                console.log("data lenght ",data.length);
                                if ((data.length) - 1 == i && flag == false) {
                                    return <img className='product-not-found-img' src={product_not_found} alt='Product Not Find' />
                                }
                            }

                        }
                        else {
                            let lower_ename = (e.name).toLowerCase();
                            let lower_ecategory = (e.category).toLowerCase();
                            let lower_searchtext = (props.search_text_var).toLowerCase();
                            if ((lower_ename).includes(lower_searchtext) || (lower_ecategory).includes(lower_searchtext)) {
                                return (<div onClick={() => gotoProductDetail(e.id, e.category)} className='Card'>
                                    {flag = true}
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
                            else {
                                console.log("flag ",flag);
                                console.log("sencond => i ",i);
                                console.log("data lenght ",data.length);
                                if ((data.length) - 1 == i && flag == false) {
                                    return <img className='product-not-found-img' src={product_not_found} alt='Product Not Find' />
                                }
                            }
                        }
                    })
                }
            </div>
            <Footer />
        </div>
    )
}


export default Search_result_page;