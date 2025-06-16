import './App.css';
import { useState } from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing_page from './project_pages/Landing_page';
import Search_result_page from './project_pages/Search_result_page';
import Product_detail_page from './project_pages/product_detail';
import User_cart from './project_pages/User_cart';
import Login from './project_pages/Login';
import Signup from './project_pages/SignUp';
import About from "./project_pages/About";
import Contact from "./project_pages/Contact";
import Logout from './project_pages/Lougout'

function App() {
  const [sidebar, set_sidebar] = useState(false);
  const [search_text, set_search_text] = useState('-');
  const [product_detail_info, set_product_detail_info] = useState(['product001', 'mobile']);
  const [product_filter_MaxMinBrand_value, set_product_filter_MaxMinBrand_value] = useState([-1, -1, [], []]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup_page' element={<Signup />}></Route>

          <Route path='/landing_page' element={<Landing_page search_text_var={search_text} set_search_text_fun={set_search_text}
            sidebar_show_fun={set_sidebar} sidebar_show_var={sidebar} search_text_fun={set_search_text} sidebar_show={sidebar}
          />}></Route>

          <Route path="/search_result_page" element={<Search_result_page search_text_var={search_text} set_product_detail_info_fun={set_product_detail_info} product_filter_MaxMinBrand_value_var={product_filter_MaxMinBrand_value} set_product_filter_MaxMinBrand_value_fun={set_product_filter_MaxMinBrand_value} sidebar_show_fun={set_sidebar} sidebar_show_var={sidebar} search_text_fun={set_search_text} sidebar_show={sidebar}
          />} ></Route>

          <Route path="/product_detail" element={<Product_detail_page product_detail_info_var={product_detail_info} set_product_detail_info_fun={set_product_detail_info}
            sidebar_show_fun={set_sidebar} sidebar_show_var={sidebar} search_text_fun={set_search_text}
            sidebar_show={sidebar} />}></Route>
          <Route path="/user_cart" element={<User_cart ForCart_set_product_detail_info_fun={set_product_detail_info} />}></Route>
          <Route path='/about_page' element={<About />} ></Route>
          <Route path='/contact_page' element={<Contact />}></Route>
          <Route path='/Logout' element={<Logout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

