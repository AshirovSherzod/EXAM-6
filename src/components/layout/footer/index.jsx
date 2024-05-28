import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LiaTelegram } from "react-icons/lia";
import { BsClockHistory } from "react-icons/bs";


import './footer.scss'
import img from "../../../assets/footer-logo.png"
import footerApp from '../../../assets/footer-app.png'
import footerCard from '../../../assets/footer-card.png'
import footerCall from '../../../assets/footer-call.png'
import footerFacebook from '../../../assets/footer-facebook.svg'
import footerTwitter from '../../../assets/footer-twitter.svg'
import footerInsta from '../../../assets/footer-insta.svg'
import footerprint from '../../../assets/footer-printres.svg'
import footerYoutube from '../../../assets/footer-youtube.svg'






const Footer = () => {
  return (
    <footer className='footer container'>
      <div className="footer__top row">
        <ul className="footer__top__uls">
          <li><img src={img} alt="" /></li>
          <p>Awesome grocery store website template</p>
          <li><a href=""> <IoLocationOutline /> Address: 5171 W Campbell Ave</a></li>
          <li><a href=""> <TfiHeadphoneAlt /> Call Us:(+91) - 540-025-124553</a></li>
          <li><a href=""> <LiaTelegram /> Call Us:(+91) - 540-025-124553</a></li>
          <li><a href=""> <BsClockHistory /> Call Us:(+91) - 540-025-124553</a></li>
        </ul>
        <ul className="footer__top__ul">
          <h4>Company</h4>
          <li><a href="">About Us</a></li>
          <li><a href="">Delivery Information </a></li>
          <li><a href="">Privacy Policy </a></li>
          <li><a href="">Terms & Conditions </a></li>
          <li><a href="">Contact Us </a></li>
          <li><a href="">Support Center </a></li>
          <li><a href="">Careers </a></li>
        </ul>
        <ul className="footer__top__ul">
          <h4>Account</h4>
          <li><a href="">Sign In</a></li>
          <li><a href="">View Cart</a></li>
          <li><a href="">My Wishlist</a></li>
          <li><a href="">Track My Order</a></li>
          <li><a href="">Help Ticket</a></li>
          <li><a href="">Shipping Details</a></li>
          <li><a href="">Compare products</a></li>
        </ul>
        <ul className="footer__top__ul">
          <h4>Corporate</h4>
          <li><a href="">Become a Vendor</a></li>
          <li><a href="">Affiliate Program</a></li>
          <li><a href="">Farm Business</a></li>
          <li><a href="">Farm Careers</a></li>
          <li><a href="">Our Suppliers</a></li>
          <li><a href="">Accessibility</a></li>
          <li><a href="">Promotions</a></li>
        </ul>
        <ul className="footer__top__ul">
          <h4>Popular</h4>
          <li><a href="">Milk & Flavoured Milk</a></li>
          <li><a href="">Butter and Margarine</a></li>
          <li><a href="">Eggs Substitutes</a></li>
          <li><a href="">Marmalades</a></li>
          <li><a href="">Sour Cream and Dips</a></li>
          <li><a href="">Tea & Kombucha</a></li>
          <li><a href="">Cheese</a></li>
        </ul>
        <div className="footer__top-apps">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <img src={footerApp} alt="" />
          <p>Secured Payment Gateways</p>
          <img src={footerCard} alt="" />
        </div>
      </div>
      <div className="footer__bottom row">
        <p>© 2022, <span>Nest</span> - HTML Ecommerce Template <br /> All rights reserved</p>
        <div className="footer__bottom__cards row">
          <div className="footer__bottom__card row">
            <img src={footerCall} alt="" />
            <div className="footer__bottom__card-desc">
              <h2>1900 - 6666</h2>
              <p>Working 8:00 - 22:00</p>
            </div>
          </div>
          <div className="footer__bottom__card row">
            <img src={footerCall} alt="" />
            <div className="footer__bottom__card-desc">
              <h2>1900 - 6666</h2>
              <p>24/7 Support Center</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom__follow">
          <div className="footer__bottom__follow-social row">
            <h3>Follow Us</h3>
            <img src={footerFacebook} alt="" />
            <img src={footerTwitter} alt="" />
            <img src={footerInsta} alt="" />
            <img src={footerprint} alt="" />
            <img src={footerYoutube} alt="" />
          </div>
          <p>Up to 15% discount on your first subscribe</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer