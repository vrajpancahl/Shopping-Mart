import React from "react";
import { useState } from "react";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

import { event_mandap1, event_mandap2, event_mandap3, event_mandap4, event_mandap5, event_mandap6, event_mandap7, event_mandap8, event_mandap9, event_mandap10, event_mandap11, event_mandap12, event_mandap13, event_mandap14, event_mandap15, event_mandap16,
} from './image_st_file';

function EventImagesTab(){

    
    const Mandap_arr = [event_mandap1, event_mandap2, event_mandap3, event_mandap4, event_mandap5, event_mandap6, event_mandap7, event_mandap8, event_mandap9, event_mandap10, event_mandap11, event_mandap12, event_mandap13, event_mandap14, event_mandap15, event_mandap16,
    ];

    let [Mandap_ind_arr , set_Mandap_ind_arr] = useState([0,1,2,3]);

    function change_ind_next(){
            let temp = Mandap_ind_arr[3];
            if(temp === 15)
            {
                set_Mandap_ind_arr([0,1,2,3]);
            }
            else{
                set_Mandap_ind_arr([temp+1,temp+2,temp+3,temp+4]);
            }
            return 0;
    }
    function change_ind_previ(){
            let temp = Mandap_ind_arr[0];
            if(temp === 0)
            {
                set_Mandap_ind_arr([12,13,14,15]);
            }
            else{
                set_Mandap_ind_arr([temp-4,temp-3,temp-2,temp-1]);
            }
            return 0;
    }

    return(
        <div>
            <h1>Previous Event </h1>
            <h2>Wedding Services</h2>

            <h2>Madap</h2>
            <div className="card-container">
                 <div className="Card-EventImgPage">
                            <div className="card-img-EventImgPage">
                                 <img src={Mandap_arr[Mandap_ind_arr[0]]} alt="" />
                            </div>
                         </div>
                        <div className="Card-EventImgPage">
                            <div className="card-img-EventImgPage">
                                 <img src={Mandap_arr[Mandap_ind_arr[1]]} alt="" />
                            </div>
                         </div>
                        <div className="Card-EventImgPage">
                            <div className="card-img-EventImgPage">
                                 <img src={Mandap_arr[Mandap_ind_arr[2]]} alt="" />
                            </div>
                         </div>
                        <div className="Card-EventImgPage">
                            <div className="card-img-EventImgPage">
                                 <img src={Mandap_arr[Mandap_ind_arr[3]]} alt="" />
                            </div>
                         </div>
                <div className="button-container-EventImgPage">
                    <button type="button" onClick={change_ind_previ}  className="img-button-EventImgPage"><GrCaretPrevious /></button>
                    <button type="button" onClick={change_ind_next} className="img-button-EventImgPage"><GrCaretNext /></button>
                </div>
            </div>

            {/* <h2>Lighting</h2>
            <div className="card-container"> 
                {
                    Mandap_ind_arr.map( (e)=> {
                        return (
                        <div className="Card-EventImgPage">
                            <div className="card-img">
                                 <img src='#' alt="Image" />
                            </div>
                         </div>
                         )
                    })
                }  
                <div className="button-container-EventImgPage">
                    <button type="button"  className="img-button-EventImgPage"><GrCaretPrevious /></button>
                    <button type="button"  className="img-button-EventImgPage"><GrCaretNext /></button>
                </div>
            </div>

            <h2>Flower Decoration</h2>
            <div className="card-container"> 
                {
                    Mandap_ind_arr.map( (e)=> {
                        return (
                        <div className="Card-EventImgPage">
                            <div className="card-img">
                                 <img src='#' alt="Image" />
                            </div>
                         </div>
                         )
                    })
                }  
                <div className="button-container-EventImgPage">
                    <button type="button"  className="img-button-EventImgPage"><GrCaretPrevious /></button>
                    <button type="button"  className="img-button-EventImgPage"><GrCaretNext /></button>
                </div>
            </div>

            <h2>BirthDay Part</h2>
            <h2>Ballon Decoration</h2>
            <div className="card-container"> 
                {
                    Mandap_ind_arr.map( (e)=> {
                        return (
                        <div className="Card-EventImgPage">
                            <div className="card-img">
                                 <img src='#' alt="Image" />
                            </div>
                         </div>
                         )
                    })
                }  
                <div className="button-container-EventImgPage">
                    <button type="button"  className="img-button-EventImgPage"><GrCaretPrevious /></button>
                    <button type="button"  className="img-button-EventImgPage"><GrCaretNext /></button>
                </div>
            </div> */}

            

        </div>
    )
}

export default EventImagesTab;