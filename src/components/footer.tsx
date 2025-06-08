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
                        <Link className="nav-footer-logo" to="/">
                            <span className="svg-icon text-light svg-icon-2hx">
                                <svg width="65" height="65" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8797 15.375C15.9797 15.075 15.9797 14.775 15.9797 14.475C15.9797 13.775 15.7797 13.075 15.4797 12.475C14.7797 11.275 13.4797 10.475 11.9797 10.475C11.7797 10.475 11.5797 10.475 11.3797 10.575C7.37971 11.075 4.67971 14.575 2.57971 18.075L10.8797 3.675C11.3797 2.775 12.5797 2.775 13.0797 3.675C13.1797 3.875 13.2797 3.975 13.3797 4.175C15.2797 7.575 16.9797 11.675 15.8797 15.375Z" fill="currentColor"/>
                                    <path opacity="0.3" d="M20.6797 20.6749C16.7797 20.6749 12.3797 20.275 9.57972 17.575C10.2797 18.075 11.0797 18.375 11.9797 18.375C13.4797 18.375 14.7797 17.5749 15.4797 16.2749C15.6797 15.9749 15.7797 15.675 15.7797 15.375V15.2749C16.8797 11.5749 15.2797 7.47495 13.2797 4.07495L21.6797 18.6749C22.2797 19.5749 21.6797 20.6749 20.6797 20.6749ZM8.67972 18.6749C8.17972 17.8749 7.97972 16.975 7.77972 15.975C7.37972 13.575 8.67972 10.775 11.3797 10.375C7.37972 10.875 4.67972 14.375 2.57972 17.875C2.47972 18.075 2.27972 18.375 2.17972 18.575C1.67972 19.475 2.27972 20.475 3.27972 20.475H10.3797C9.67972 20.175 9.07972 19.3749 8.67972 18.6749Z" fill="currentColor"/>
                                </svg>
                            </span><h5 className="fs-2 fw-bold text-light ms-1 my-0">Resido</h5>
                        </Link>
                        <div className="footer-add">
                            <p>Collins Street West, Victoria 8007, Australia.</p>
                            <p>+1 246-345-0695</p>
                            <p>info@example.com</p>
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
                
                <div className="col-lg-3 col-md-6">
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
                </div>
            </div>
        </div>
    
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <p className="mb-0">© {new Date().getFullYear()} Resido. Develop with <i className="fa-solid fa-heart ms-1 text-danger"></i>  By <Link to="https://shreethemes.in/" target="_blank">Shreethemes</Link></p>
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
