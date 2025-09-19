import './About_CSS.css';
import './media_queries.css';
import { about_image2, shopping_mart_logo } from '../image_st_file';
import BackToPreviousPage from '../Components/BackToPreviousPage';
import { useEffect } from 'react';



function About() {
  // Scroll page to top
  useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

  return (
    <div>

      {/* Page header with previous page button */}
      <div className='search-result-page-header'>
        <BackToPreviousPage path={"/landing_page"} />
      </div>
      {/* Page header with previous page button END*/}

      {/* Page Titel */}
      <div className='About-heading-font-size'>About Us</div> {/* Heading */}
      <div className="heading-underline-thik-pluse About-heading-center About-heading-color-gradiant"></div>{/* Division line */}

      <h2 className='About-heading-center'>Welcome to Shopping Mart</h2> {/* Heading */}
      <div className="heading-underline-thik About-heading-center lightblue-purpel-gradiant"></div>{/* Division line */}
      
      {/* Information container */}
      <div className='About-imageText-container'>
        <div className='About-image-container'>
          <img src={shopping_mart_logo} alt='' />
        </div>
        <div className='About-text-container About-show-content-center '>
          At Shopping Mart, we believe in providing our customers with high-quality products and exceptional service. Our journey began in 2022, with a passion for smartphone , tech and new Gadgets. Over the years, we have grown into a beloved brand known for unique selling points, such as craftsmanship, innovative design, or customer care.
        </div>
      </div>
        {/* Information container END*/}


      <h2 className='About-heading-center'>Our Mission</h2>{/* Heading */}
      <div className="heading-underline-thik About-heading-center lightblue-purpel-gradiant"></div>{/* Division line */}

    {/* Information container */}
      <div className='About-imageText-container'> 
        <div className='About-text-container About-show-content-center'> 
          Our mission is simple: to bring you the best Electronic Gadgets and to make shopping with us a delightful experience. We carefully curate our selection to ensure that each item meets our high standards for quality and style. Whether you're looking for electronic  products, we have something for everyone.
        </div>

        <div className='About-image-container'>
          <img src={about_image2} alt='' />
        </div>
      </div>
    {/* Information container END*/}



      <h2 className='About-heading-center'> Our Values</h2>{/* Heading */}
      <div className="heading-underline-thik About-heading-center lightblue-purpel-gradiant"></div>{/* Division line */}

    {/* Information container */}
      <div className='About-imageText-container'>
        <div className='About-text-container'>
          <h3 className='About-show-text-inline yellow-red-gradiant'>Quality</h3>
          We stand by the quality of our products, ensuring that they are made with the finest materials and craftsmanship.
        </div>

        <div className='About-text-container '>
          <h3 className='About-show-text-inline yellow-red-gradiant' >Customer Satisfaction</h3>
          Your satisfaction is our top priority. We strive to provide excellent customer service and support to make your shopping experience seamless.
        </div>

        <div className='About-text-container'>
          <h3 className='About-show-text-inline yellow-red-gradiant'>Innovation</h3>
          always on the lookout for the latest trends and innovations, bringing you fresh and exciting products.
        </div>
      </div>
        {/* Information container END*/}

      <h2 className='About-heading-center'> Why Shop With Us?</h2>{/* Heading */}
      <div className="heading-underline-thik About-heading-center lightblue-purpel-gradiant"></div>{/* Division line */}

    {/* Information container */}
      <div className='About-imageText-container'>
        <div className='About-text-container'>
          <h3 className='About-show-text-inline yellow-red-gradiant'>Wide Selection</h3>
          We stand by the quality of our products, ensuring that they are made with the finest materials and craftsmanship.
        </div>

        <div className='About-text-container'>
          <h3 className='About-show-text-inline yellow-red-gradiant'>Secure Shopping</h3>
          Your privacy and security are important to us. We use the latest encryption technology to protect your personal information.
        </div>

        <div className='About-text-container'>
          <h3 className='About-show-text-inline yellow-red-gradiant'>Fast Shipping</h3>
          We offer fast and reliable shipping to get your products to you as quickly as possible.
        </div>
      </div>
    {/* Information container END*/}

    {/* Information container */}
      <div>
        <p className='About-heading-center text-width About-margin-bottom About-text-color-pink'>
          Thank you for choosing Shopping Mart. We are excited to have you as a part of our community and look forward to serving you!
        </p>
      </div>
      {/* Information container END*/}

    </div>  
    // About page END  
  )
}

export default About;