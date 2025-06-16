import { useState } from "react";

function ToDoList()
{
    const [product_arr, set_product_arr] = useState([]);
    const [product_var, set_product_var] = useState('');

    function update_var(event)
    {
        set_product_var(event.target.value);
    }

    function update_arr()
    {
            set_product_arr([...product_arr, product_var]);
       
    }

    function remove_item ( product )  {
       set_product_arr(
        product_arr.filter( (e) =>{
            if(e == product)
            {
                return false;
            }
            else{
                return true;
            }
        })
       )
    }

    return(
        <div>
            <input type="text"  onChange={update_var}/>
            <button type="button" onClick={update_arr}>Add</button>
            {
                product_arr.map((e)=> {
                    return (
                        
                        <div>
                            <p>lenght is {product_arr.length} value '{e}'</p>
                           <button type="button" onClick={() => remove_item(e)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ToDoList;