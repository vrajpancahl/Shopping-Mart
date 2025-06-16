
import './Footer_CSS.css';
import { shopping_mart_logo } from '../image_st_file';
import { Link } from 'react-router-dom';


function footer_compo() {
    return (
        <div className="footer">
            <div className="footer-logo-container">
                    <img src={shopping_mart_logo} alt="" />
            </div>
            <div className="footer-info-container">
                <div>
                    <div ><Link className="page-links contact-cursorpointer" to="/about_page">About Us</Link></div>
                    <div ><Link className="page-links contact-cursorpointer" to="/contact_page">Contact Us</Link></div>
                </div>

            </div>
        </div>
    )
}

export default footer_compo;