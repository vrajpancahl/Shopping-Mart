// import imag_importer from "./imag_importer";
import {p1,p2,p3} from "./image_st_file.js";
import { useState } from "react";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom';

function Home()
{
    let pic_arr = [p1, p2, p3];
    const [img_ind, setImgIndex] = useState(0);

    function changImgNext()
    {
        if(img_ind === 2)
        {
            setImgIndex(0);
        }
        else{
            setImgIndex(img_ind + 1);
        }
    }
    function changImgPrevious()
    {
        if(img_ind === 0)
        {
            setImgIndex(2);
        }
        else{
            setImgIndex(img_ind - 1);
        }
    }
   
    return  (
        <div>

        <div className="main_div">
            <div className="left_div"> 
                <img src={pic_arr[img_ind]}  />
                <div className="button-container-homepage">
                    <button type="button" onClick={changImgPrevious} className="img-button-homepage"><GrCaretPrevious /></button>
                    <button type="button" onClick={changImgNext} className="img-button-homepage"><GrCaretNext /></button>
                </div>
            </div>
            <div className="right-div">
                <Link className="button-div-1" to="/services_page">
                <div className="tab">
                    Our Services
                </div>
                </Link>
                <Link className="button-div-2" to="/eventImagesTab">
                <div className="tab">
                    Our Previous Event
                </div>
                </Link>
            </div>
        </div>

        <div className="footer">
            <div className="footer-logo-container">
                Logo
            </div>
            <div className="footer-info-container">
                Contact <br />
                9999 888<br />
                8888 999<br />
            </div>
        </div>

        </div>
    )
}

export default Home;