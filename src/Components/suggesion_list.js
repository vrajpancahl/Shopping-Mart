
// function SuggesionList(){
//     return(
//     <div className="SearchSuggetion_main_container">
//                      { 
//                      data.map((e) => {
//                        let fnl_str = "";
//                        let current_lowercase_name = (e.name).toLowerCase();
//                     //    let search_String = props.show_suggestion_var2;
//                        let chr_ind = current_lowercase_name.indexOf(search_String);
    
//                        if (chr_ind !== -1 && counter < 5 && search_String !== "") 
//                         {
//                             if ((e.name)[chr_ind - 1] == " " || chr_ind == 0) 
//                                 {
//                                 console.log("Seconde condition true");
//                                 if (current_lowercase_name.substring(chr_ind).length < 20) 
//                                 {
//                                     fnl_str = current_lowercase_name.substring(chr_ind).concat("...");
//                                 }
//                                 else 
//                                 {
//                                     fnl_str = current_lowercase_name.substring(chr_ind, chr_ind + 20).concat("...");
//                                  }
//                            counter++;
//                            console.log("value", counter);
//                            return( <div className="suggestion-field"
//                              onClick={() => gotoProductDetail(e.id, e.category, e.name)}>
//                                 {fnl_str}
//                                 </div>)
//                           }
//                        }
//                      })
//                      }
//                    </div>        
//     )
// }

// export default SuggesionList;