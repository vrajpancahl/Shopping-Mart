// import { useState } from "react";

// function Temp()
// {
//     const arr = [0,1,2,3,4,5,6,7,8,9];
//     const [filterValue, set_fileterValue] = useState(0);

//     return(
//         <div>
//             {
//                 arr.map((e)=>{
//                     if(filterValue == e)
//                     {
//                         return(
//                             <h1>Equle to {e}</h1>
//                         )
//                     }
//                     else{
//                         return<p>else</p>
//                     }
//                 })
//             }
//             <button onClick={()=>{
//                 set_fileterValue(filterValue+1)
//             }}>Change Value</button>
//         </div>
//     )
// }

// export default Temp;

import data from '../data.json';
import './Landing_page_CSS.css';
import './media_queries.css';
import { useNavigate } from 'react-router-dom';
import BackToPreviousPage from '../Components/BackToPreviousPage';
import { useState } from 'react';
import Filter_product from '../Components/Filter_product';

function Search_result_page(props) {
    console.log("Search page called",props.product_filter_MaxMinBrand_value_var);


    let flag = false;
    const navigate = useNavigate();
    const [filter_mode, set_filter_mode] = useState(false);
    const [Apply_filter, set_Apply_filter] = useState(false);

    // const filter_mode = useState(true);
    // const [max_min_value, set_max_min_value] = useState(['Hello WOrklsaf']);
    // const [max, set_max] = useState(0);
    // const [min, set_min] = useState(0);


    function gotoProductDetail(_id, _cate) {
        // console.log(t);
        // window.open('/product_detail','__blank');
        // props.set_search_text_fun(t)
        props.set_product_detail_info_fun([_id,_cate]);
        navigate('/product_detail')
    }

    // function find_max_min(value) {
    //     console.log("max => ", max,"min =>", min)
    //     let coma_index = value.indexOf(',');
    //     let sub_str1 = value.substring(0, coma_index);
    //     let sub_str2 = value.substring(coma_index + 1, value.length);
    //     value = parseInt(sub_str1.concat(sub_str2));

    //     console.log("call");
    //     if (min == 0) {
    //        set_min(value);
    //     }
    //     else if (value < min) {
    //         set_min(value);
    //     }
        
    //     if (value > max) {
    //         set_max(value);
    //     }
    // }

    return (
        <div className="page-container" >
            <div className='page-heading'>
                <h1>Welcome to Search result page</h1>
            </div>

            <div className='search-result-page-header'>
                <BackToPreviousPage path={"/"} />
                <button className='filter-toggle-buttton' onClick={()=> {set_filter_mode(!(filter_mode)) }}>Filter Mode</button>
            </div>

          {(filter_mode == true &&  <Filter_product 
           searchBar_text_var={props.search_text_var}
           MaxMinBrand_value_var={props.product_filter_MaxMinBrand_value_var}
           set_MaxMinBrand_value_fun={props.set_product_filter_MaxMinBrand_value_fun} filter_mode_var={filter_mode} Apply_filter_var={Apply_filter} Apply_filter_fun={set_Apply_filter}/>) }

            {/* {console.log("Welcome to s_r_p")} */}
            <div className='Card-main-container'>
                {
                    data.map((e, i) => {
                        if ((e.name).includes(props.search_text_var) || (e.category).includes(props.search_text_var)) {
                           
                            return (<div onClick={() => gotoProductDetail(e.id,e.category)} className='Card'>
                                {flag = true}
                                <div className="card-img">
                                    <img src="" alt="" />
                                </div>
                                <div className="card-text">
                                    {e.name}
                                </div>
                                <div className="card-text">
                                    Rs. {e.price}
                                </div>
                            </div>
                            )
                        }
                        else {
                            if (i == 5 && flag == false) {
                                return <h1 className='produnct-not-avai-error'>Product currently not available !!</h1>
                            }
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Search_result_page;