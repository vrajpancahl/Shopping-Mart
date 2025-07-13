import './Landing_page_CSS.css';
import './media_queries.css';
import Footer from '../Components/Footer';
import Navbar_Component from '../Components/Navbar'
import Sidebar_Component from '../Components/Sidebar';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { ad_image_1, ad_image_2, ad_image_3, ad_image_4, ad_image_5, ad_image_6 } from '../image_st_file';
import { useEffect, useState, useRef } from 'react';


function Landing_page(props) {
    const navigate = useNavigate();
    const [Ad_image_index, set_Ad_image_index] = useState(0);
    const Ad_images_arr = [ad_image_1, ad_image_2, ad_image_3, ad_image_4, ad_image_5, ad_image_6];
    const [autoPlay, set_autoPlay] = useState(true);
    let intervalRef = useRef(null);

    useEffect(() => {
        intervalRef = autoPlay && setTimeout(() => {
            next_image();
        }, 2500);
        return () => clearTimeout(autoPlay);
    });
    const landingpage_catagory = [
        {
            title: "Mobile",
            image_path: "mobile_card.jpg",
            search_text: "mobile"
        },
        {
            title: "Computer CPU",
            image_path: "processor_card.jpg",
            search_text: "cpu"
        },
        {
            title: "Computer Cabinate",
            image_path: "ComputerCabinateCard.jpg",
            search_text: "cabinate"
        },
        {
            title: "Computer Motherbord",
            image_path: "motherbord_card.jpg",
            search_text: "motherbord"
        },
        {
            title: "Computer Storage",
            image_path: "computer_storage.jpg",
            search_text: "ssd"
        },
    ]

    function gotoSearchPage(t) {
        props.set_search_text_fun(t);
        navigate('/search_result_page', { replace: true })
    }

    function next_image() {
        if ((Ad_images_arr.length - 1) == Ad_image_index) {
            set_Ad_image_index(0);
        }
        else {
            set_Ad_image_index(Ad_image_index + 1);
        }
    }

    function previous_image() {
        if (Ad_image_index == 0) {
            set_Ad_image_index(Ad_images_arr.length - 1);
        }
        else {
            set_Ad_image_index(Ad_image_index - 1);
        }
    }

    return (

        <div className='page-main-container'>
            <Navbar_Component sidebar_show_fun2={props.sidebar_show_fun} sidebar_show_var2={props.sidebar_show_var} search_text_fun2={props.search_text_fun} />
            <nav >
                <Sidebar_Component sidebar_show2={props.sidebar_show} />
            </nav>
            {/* <div className='advertise-container' > */}
            {/* Left button */}
            {/* image container */}
            <div className='advertise-image-container'
                onMouseEnter={() => {
                    set_autoPlay(false);
                    clearTimeout(intervalRef );
                }}
                onMouseLeave={() => {
                    set_autoPlay(true);
                }}
                onTouchStart={() => {
                    set_autoPlay(false);
                    clearTimeout(intervalRef );
                }}

                onTouchEnd={() => {
                    set_autoPlay(true);
                }}
            >
                <button type='button' onClick={() => { previous_image() }} className='advertise-img-changing-button advertise-img-changing-previous-button'><GrPrevious /></button>
                <img className='advertise-image' src={Ad_images_arr[Ad_image_index]} alt='' />
                {/* /* paging dots */}
                <div className='container-paging'>
                    {
                        Ad_images_arr.map((_, index) => {
                            return (<div
                                key={index}
                                className={
                                    index == Ad_image_index ? "paging_dot paging_dot_active" : "paging_dot"
                                }
                                onClick={() => { set_Ad_image_index(index) }}
                            ></div>)
                        })
                    }
                </div>
                <button type='button' onClick={() => { next_image() }} className='advertise-img-changing-button advertise-img-changing-next-button'><GrNext /></button>
            </div>
            {/* Right button */}

            <div className="Card-main-container">
                {
                    landingpage_catagory.map((e) => {
                        return (<div onClick={() => { gotoSearchPage(e.search_text) }} className='landingpage-Card'>
                            <h2 className='landingpage-card-heading'>{e.title}</h2>
                            <div className='landingpage-card-img-container'>
                                <img className='landingpage-card-image' src={require(`../images/${e.image_path}`)} alt='Nathi' />
                            </div>
                        </div>
                        )
                    })
                }
            </div>

            <Footer />
        </div>
    )
}

export default Landing_page;
