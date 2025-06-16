import './Contact_CSS.css';
import './media_queries.css';
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaMobileScreen } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import BackToPreviousPage from '../Components/BackToPreviousPage';

function Contact() {
    return (
        <div>
            <div className='search-result-page-header'>
                <BackToPreviousPage path={"/landing_page"} />
                <div></div>
            </div>
            <div className='About-heading-font-size'>Contact Us</div>
            <div className="heading-underline-thik-pluse About-heading-center About-heading-color-gradiant"></div>

            <div className="About-imageText-container">

                <div className='contact-text-container'>
                    <div className='contact-small-length-heading-container'>
                        <h2 ><RiCustomerService2Fill /> Customer Support
                        </h2>
                        <div className="heading-underline-short About-heading-center lightblue-purpel-gradiant">
                        </div>
                    </div>
                    <div>
                        <p className='conact-text-container'>
                            <FaPhone /> Phone: +91 99887 7333
                            Available Monday to Friday, 9 AM - 6 PM <br /><br />

                            <MdEmail /> Email: support@shippingwebsite.com
                            We aim to respond within 24 hours.
                        </p>
                    </div>
                </div>

                <div className='contact-text-container'>
                    <div className='contact-small-length-heading-container'>
                        <h2 ><FaMobileScreen /> Social Media<br /> </h2>
                        <div className="heading-underline-short About-heading-center lightblue-purpel-gradiant"></div>
                    </div>
                    <div>
                         <p><FaFacebook /> Facebook: facebook.com/shippingwebsite<br /><br />
                            <FaXTwitter /> Twitter: twitter.com/shippingwebsite<br /><br />
                            <FaLinkedin /> LinkedIn: linkedin.com/company/shippingwebsite
                        </p>
                    </div>
                </div>

                <div className='contact-text-container'>
                    <div className='contact-small-length-heading-container'>
                        <h2 ><FaLocationDot /> Office Address<br />
                        </h2>
                        <div className="heading-underline-short About-heading-center lightblue-purpel-gradiant">
                        </div>
                    </div>
                    <div>
                        <p><HiMiniBuildingLibrary /> Headquarters:
                            Shipping Website Inc.
                            123 Maritime Blvd.
                            Port City, ST 380001
                            Ahmedabad, Gujrat
                        </p><br />
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58724.22096178998!2d72.45356465994796!3d23.08743669043358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85b3d404aedb%3A0xe1482739c164a653!2sReliance%20Digital!5e0!3m2!1sen!2sin!4v1722982846694!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div></div>
                </div>
            </div>

        </div>
    )
}

export default Contact;