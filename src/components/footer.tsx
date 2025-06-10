import React from 'react'
import { Link } from 'react-router-dom'
import googlePlay from '../assets/img/svg/google-play.svg'
import app from '../assets/img/svg/apple-store.svg'

export default function Footer() {
  return (
    <footer className="dark-footer skin-dark-footer">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-3 col-md-4">
                    <div className="footer-widget">
                        <Link className="nav-footer-logo d-flex align-items-center" to="/">
    <img
        src="/gharkullogo.png"
        alt="Gharkul Logo"
        width="65"
        height="65"
        className="me-2"
    />
    <h5 className="fs-2 fw-bold text-light my-0">Gharkul</h5>
</Link>

                        <div className="footer-add">
                            <p>Wakad road Hinjawadi</p>
                            <p>+91 9632748927</p>
                            <p>info@gharkul.com</p>
                        </div>
                        
                    </div>
                </div>		
                <div className="col-lg-2 col-md-4">
                    <div className="footer-widget">
                        <h4 className="widget-title">Navigations</h4>
                        <ul className="footer-menu">
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/faq">FAQs Page</Link></li>
                            <li><Link to="/checkout">Checkout</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                </div>
                        
                <div className="col-lg-2 col-md-4">
                    <div className="footer-widget">
                        <h4 className="widget-title">The Highlights</h4>
                        <ul className="footer-menu">
                            <li><Link to="#">Apartment</Link></li>
                            <li><Link to="#">My Houses</Link></li>
                            <li><Link to="#">Restaurant</Link></li>
                            <li><Link to="#">Nightlife</Link></li>
                            <li><Link to="#">Villas</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-lg-2 col-md-6">
                    <div className="footer-widget">
                        <h4 className="widget-title">My Account</h4>
                        <ul className="footer-menu">
                            <li><Link to="#">My Profile</Link></li>
                            <li><Link to="#">My account</Link></li>
                            <li><Link to="#">My Property</Link></li>
                            <li><Link to="#">Favorites</Link></li>
                            <li><Link to="#">Cart</Link></li>
                        </ul>
                    </div>
                </div>
                
                {/* <div className="col-lg-3 col-md-6">
                    <div className="footer-widget">
                        <h4 className="widget-title">Download Apps</h4>
                        <Link to="#" className="other-store-link">
                            <div className="other-store-app">
                                <div className="os-app-icon"><img src={googlePlay} alt="" /></div>
                                <div className="os-app-caps"> Google Play<span>Get It Now</span></div>
                            </div>
                        </Link>
                        <Link to="#" className="other-store-link">
                            <div className="other-store-app">
                                <div className="os-app-icon"><img src={app} alt="" /></div>
                                <div className="os-app-caps">App Store<span>Now it Available</span></div>
                            </div>
                        </Link>
                    </div>
                </div> */}
            </div>
        </div>
    
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <p className="mb-0">© {new Date().getFullYear()} Gharkul. Develop with <i className="fa-solid fa-heart ms-1 text-danger"></i>  By <Link to="https://shreethemes.in/" target="_blank">Shreethemes</Link></p>
                    </div>
                    <div className="col-lg-6 col-md-6 text-right">
                        <ul className="footer-bottom-social">
                            <li><Link to="https://www.facebook.com/shreethemes" target='_blank'><i className="fa-brands fa-facebook"></i></Link></li>
                            <li><Link to="https://x.com/shreethemes" target='_blank'><i className="fa-brands fa-twitter"></i></Link></li>
                            <li><Link to="https://www.instagram.com/shreethemes/" target='_blank'><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link to="https://www.linkedin.com/company/shreethemes" target='_blank'><i className="fa-brands fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
