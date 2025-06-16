import './Navbar_CSS.css';
import '../project_pages/media_queries.css';
import { useNavigate } from 'react-router-dom';
import { shopping_mart_logo } from '../image_st_file';
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";

function Navbar(props) {
    const navigate = useNavigate();
    function gotoSearchResultPage() {
        navigate('/search_result_page', { replace: true })
    }

    function gotoUserCart() {
        navigate('/user_cart');
    }

    function logout_go_login() {
        localStorage.removeItem("email");
        alert("You want to Loginout")
        navigate("/");
    }

    return (
        <div className='navbar'>

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
                <input className="search-box-input" onChange={(e) => { props.search_text_fun2(e.target.value) }} type="text" placeholder="Search" />
                <button id='search-button' onClick={() => { gotoSearchResultPage() }} className="search-box-input"><IoSearchSharp /></button>
            </div>

            <div className="navbar-tabs-container">
                <button id="Cart-button-style" className='navbar-tab' onClick={() => { gotoUserCart() }}><span className='button-spans'><BsCart3 /></span><span className='button-spans'>Cart</span></button>
                <button id="logout-button-style" className='navbar-tab' onClick={() => { logout_go_login() }}><span className='button-spans'><TbLogout2 /></span><span className='button-spans'>Logout</span></button>
            </div>
        </div>
    )
}

export default Navbar;