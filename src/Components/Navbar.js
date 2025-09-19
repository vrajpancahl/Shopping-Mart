import './Navbar_CSS.css';
import '../project_pages/media_queries.css';
import { useNavigate } from 'react-router-dom';
import { shopping_mart_logo } from '../image_st_file';
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";
import data from '../data.json';
import { useState } from 'react';

function Navbar(props) {

    const navigate = useNavigate();
    let counter = 0;
    const [current_text, set_current_text] = useState('');

    function gotoSearchResultPage() {
        props.search_text_fun2(current_text);
        navigate('/search_result_page', { replace: true })
    }

    function gotoUserCart() {
        navigate('/user_cart');
    }

    function logout_go_login() {
            localStorage.removeItem("email");  
            navigate("/");
    }

     function gotoProductDetail(_id, _cate, _name) {
        props.set_show_suggestion_fun2(_name);
        props.set_product_detail_info_fun2([_id, _cate]);
        navigate('/product_detail')
    }

    return (
        <div className='navbar' style={{position: "sticky"}}>
            <div className="left-div">

                <span className="sidebar-button">
                    <button id="hemburger-button" onClick={() => { props.sidebar_show_fun2(!props.sidebar_show_var2) }} className='sidebar-button'>{(props.sidebar_show_var2 == true) ? <RxCross1 /> : <GiHamburgerMenu />}</button>
                </span>

                <div className="logo">
                    <img onClick={() => {
                        navigate('/landing_page');
                    }} className='navbar-logo' src={shopping_mart_logo} alt="logo" />
                </div>
            </div>

            <div className="search-box-container">  
                {/* Search box */}
                    
                <input className="search-box-input" value={props.show_suggestion_var2} onChange={(e) => { set_current_text(((e.target.value).trim())); 
                    counter=0;
                    props.set_show_suggestion_fun2(e.target.value);
                    }} type="text" placeholder="Search" />
                {/* Search Button */}
                <button id='search-button' onClick={() => { gotoSearchResultPage() }} ><IoSearchSharp /></button>
        
                {/* {(current_text.length !== 0) && <div className="SearchSuggetion_main_container">
                 { 
                 data.map((e) => {
                   let fnl_str = "";
                   let current_lowercase_name = (e.name).toLowerCase();
                   let search_String = current_text;
                   let chr_ind = current_lowercase_name.indexOf((search_String).toLowerCase());

                   if (chr_ind !== -1 && counter < 5 && search_String !== "") 
                    {
                        if ((e.name)[chr_ind - 1] == " " || chr_ind == 0) 
                            {
                            console.log("Seconde condition true");
                            if (current_lowercase_name.substring(chr_ind).length < 20) 
                            {
                                fnl_str = current_lowercase_name.substring(chr_ind).concat("...");
                            }
                            else 
                            {
                                fnl_str = current_lowercase_name.substring(chr_ind, chr_ind + 20).concat("...");
                             }
                       counter++;
                       console.log("value", counter);
                       return( <div className="suggestion-field"
                         onClick={() => gotoProductDetail(e.id, e.category, e.name)}>
                            {fnl_str}
                            </div>)
                      }
                   }
                 })
                 }
               </div>} */}
            </div>
    

            <div className="navbar-tabs-container">
                <button id="Cart-button-style" className='navbar-tab' onClick={() => { gotoUserCart() }}><span className='button-spans'><BsCart3 /></span><span className='button-spans'>Cart</span></button>
                <button id="logout-button-style" className='navbar-tab' onClick={() => { 
                    if(window.confirm("Do you wish to log out from your account?")){
                        logout_go_login();
                    }
                     }}><span className='button-spans'><TbLogout2 /></span><span className='button-spans'>Logout</span></button>
            </div>
        </div>
    )

}
export default Navbar;