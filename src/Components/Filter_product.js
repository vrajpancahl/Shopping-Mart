import '../Components/Filter_product_CSS.css';
import data from '../data.json'
import { useEffect, useState } from 'react';

function Filter_product(props) {
    console.log("Filter called", props.MaxMinBrand_value_var);

    const [filter_mode, set_filter_mode] = useState([]);
    const [selected_low_price, set_selected_low_price] = useState(0);
    const [selected_high_price, set_selected_high_price] = useState(0);
    const [brand_arr, set_brand_arr] = useState([]);

    function get_searchBar_text_parameters(price_defrence = 5000) {
        let all_price_arr = [];
        console.log('get method called')
        let all_brand_arr = [];
        data.forEach((e) => {
            if ((e.name).includes(props.searchBar_text_var) || (e.category).includes(props.searchBar_text_var)) {
                let coma_index = (e.price).indexOf(',');
                let sub_str1 = (e.price).substring(0, coma_index);
                let sub_str2 = (e.price).substring(coma_index + 1, (e.price).length);
                let value = parseInt(sub_str1.concat(sub_str2));
                console.log("Inner looping")
                all_brand_arr.push(e.brand);
            }
        })

        console.log("Array value : ", all_brand_arr);
        let min_price = Math.min.apply(null, all_price_arr);
        let max_price = Math.max.apply(null, all_price_arr);
        props.set_MaxMinBrand_value_fun([min_price, max_price, [''],['']]);
        let temp_unique_arr = [];
        all_brand_arr.forEach((e) => {
            if (!(temp_unique_arr.includes(e))) {
                temp_unique_arr.push(e);
            }
        })
        console.log("THE BRAND ARR: ", brand_arr);
        set_brand_arr(temp_unique_arr);

    }

    function remover_brand(value) {
        console.log("remove function called")
        let temp_brand_arr = [];
        (props.MaxMinBrand_value_var[2]).forEach((e) => {
            if (e !== value) {
                temp_brand_arr.push(e);
            }
        })
        props.set_MaxMinBrand_value_fun([selected_low_price, selected_high_price, temp_brand_arr,props.MaxMinBrand_value_var[3]])
        console.log(props.MaxMinBrand_value_var);
    }

    function add_brand(value) {
        if ((props.MaxMinBrand_value_var[2]).length > 0) {
            props.set_MaxMinBrand_value_fun([selected_low_price, selected_high_price, [...props.MaxMinBrand_value_var[2], value],props.MaxMinBrand_value_var[3]]);
        }
        else {
            props.set_MaxMinBrand_value_fun([selected_low_price, selected_high_price, [value],props.MaxMinBrand_value_var[3]]);
        }
        console.log(props.MaxMinBrand_value_var);
        
    }
    
    function add_filterMode(value){
        if ((props.MaxMinBrand_value_var[3]).length > 0) {
            props.set_MaxMinBrand_value_fun([selected_low_price, selected_high_price,props.MaxMinBrand_value_var[2] ,[...props.MaxMinBrand_value_var[3], value]]);
        }
        else {
            props.set_MaxMinBrand_value_fun([selected_low_price, selected_high_price,props.MaxMinBrand_value_var[2], [value]]);
        }
        console.log(props.MaxMinBrand_value_var);

    }

     function remover_filterMode(value) {
        console.log("remove function called")
        let temp_brand_arr = [];
        (props.MaxMinBrand_value_var[3]).forEach((e) => {
            if (e !== value) {
                temp_brand_arr.push(e);
            }
        })
        props.set_MaxMinBrand_value_fun([selected_low_price, selected_high_price, props.MaxMinBrand_value_var[2],temp_brand_arr])
        console.log(props.MaxMinBrand_value_var);
    }

    useEffect(() => {
        get_searchBar_text_parameters();
    }, []);

    return (
        <div className="filter-container">
            <h4>Filter Category</h4>
            <div className='fileter-Select-field'>
                <input type="checkbox"
                value={"price"}
                    onClick={
                        (event) => {
                            (event.target.checked) ? add_filterMode(event.target.value) : remover_filterMode(event.target.value);
                        }
                    } />    
                    <label>Price</label>
                <input type="checkbox"
                value={"brand"}
                    onClick={
                        (event) => {
                            (event.target.checked) ? add_filterMode(event.target.value) : remover_filterMode(event.target.value);
                        }
                    } />
                    <label>Brand</label>
            </div>

            <h4>Select Price Range</h4>
            <div >
                <input className="fileter-field-margin" onChange={(event) => {
                    set_selected_low_price(event.target.value);
                    props.set_MaxMinBrand_value_fun([event.target.value, props.MaxMinBrand_value_var[1], props.MaxMinBrand_value_var[2],props.MaxMinBrand_value_var[3]]);
                }} type='number' placeholder="Low" /><br />
                <input className="fileter-field-margin" onChange={(event) => {
                    set_selected_high_price(event.target.value)
                    props.set_MaxMinBrand_value_fun([props.MaxMinBrand_value_var[0], event.target.value, props.MaxMinBrand_value_var[2],props.MaxMinBrand_value_var[3]]);
                }} type='number' placeholder="High" />
            </div>
            <h4>Brand</h4>
            {
                brand_arr.map((item) => {
                    console.log("Selected map callled")
                    return (
                        <div key={item}
                        className='fileter-Select-field'
                        >
                            <input
                                type="checkbox"
                                defaultValue={item}
                                onClick={
                                    (event) => {
                                        (event.target.checked) ? add_brand(event.target.value) : remover_brand(event.target.value);
                                    }
                                }
                            />
                            <label>{item}</label>
                        </div>)
                })
            }

            <button className='filter-enable-button' onClick={() => { props.Apply_filter_fun(!(props.Apply_filter_var)) }}>{(props.Apply_filter_var == true) ? "Show All" : "Apply Filter"}</button>
        </div>
    )
}

export default Filter_product;