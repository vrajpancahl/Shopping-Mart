import './Sidebar_CSS.css';
import { useNavigate } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { default_user_img } from '../image_st_file';

function Sidebar(props) {

    const navigate = useNavigate();
    const user_email = localStorage.getItem('email');
    const [user_name, set_user_name] = useState('User Name');
    

    
    function logout(path)
    {
        localStorage.removeItem("email");
        alert("You want to Logout");
        navigate(path);
    }

    useEffect(() => {
        let temp_email = localStorage.getItem("email");
        let indeof_at_the_rate = temp_email.indexOf("@");
        let temp_user_name = temp_email.substring(0, indeof_at_the_rate);
        set_user_name(temp_user_name);
    }, [])

    return (
        <div className={(props.sidebar_show2 == true) ? 'sidebar-container' : 'sidebar-close'}>
            {console.log(props.show)}
            <div className='user-info-container'>
                <div className='user-info-imageANDname-div'>
                    <div className='user-image-cotainer'>
                        <img className="user-image" src={default_user_img} alt="User" />
                    </div>
                    <h1 className='user-name-h1'>{user_name}</h1>
                </div>
                <div className='user-email-text'>{user_email}</div>
            </div>
            <div className='sidebar-button-container'>

                    <div onClick={() => { props.sidebar_show2 == false; navigate('/user_cart') }} className="sidebar-tab-button contact-cursorpointer">
                        <p className='sidebar-button-p'><BsCart3 /></p>
                        <p className='sidebar-button-p'>Cart</p>
                    </div>
                    <div onClick={() => { props.sidebar_show2 == false; navigate('/about_page') }} className="sidebar-tab-button contact-cursorpointer">
                        <p className='sidebar-button-p'><AiOutlineInfoCircle /></p>
                        <p className='sidebar-button-p'>About Us</p>
                    </div>
                    <div onClick={() => { props.sidebar_show2 == false; navigate('/contact_page') }} className="sidebar-tab-button contact-cursorpointer">
                        <p className='sidebar-button-p'><IoMdContacts /></p>
                        <p className='sidebar-button-p'>Contact Us</p>
                    </div>
                    <div onClick={() => { props.sidebar_show2 == false; logout("/") }} className="sidebar-tab-button contact-cursorpointer">
                        <p className='sidebar-button-p'> <TbLogout2 /></p>
                        <p className='sidebar-button-p'>Logout</p>
                    </div>
                
            </div>
        </div>
    )
}

export default Sidebar;
