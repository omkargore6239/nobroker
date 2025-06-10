import React from 'react'
import { Link } from 'react-router-dom'

import NavLight from '../../components/navbar/nav-light'
import FormTwo from '../../components/form-two'
import Achievement from '../../components/achievement'
import PropertySlider from '../../components/property-slider'
import SellPropertyOne from '../../components/sell-property-one'
import TeamOne from '../../components/team-one'
import ClientOne from '../../components/client-one'
import PricingOne from '../../components/pricing-one'
import FooterTop from '../../components/footer-top'
import Footer from '../../components/footer'

import bg from '../../assets/img/banners.mp4'

export default function Video() {
  return (
    <>
        <NavLight/>

        <div className="hero-banner vedio-banner">
            <div className="overlay"></div>	

            <video playsInline={true} autoPlay={true} loop={true}>
                <source src={bg} type="video/mp4"/>
            </video>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-11 col-sm-12">
                        <div className="inner-banner-text text-center">
                            <p className="lead-i text-light">Find Best Places in Pune</p>
                            <h2 className="text-light"><span className="font-normal">Find Your</span> Perfect Place.</h2>
                        </div>
                       <FormTwo/>
                    </div>
                </div>
            </div>
        </div>

       <section>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center mb-4">
                    <h2>Our Achievements</h2>
                    <p>We take pride in the milestones we've achieved through dedication, innovation, and client satisfaction. Here are some of our key accomplishments that define our journey.</p>
                </div>
            </div>
        </div>
        <Achievement />
    </div>
</section>
<div className="clearfix"></div>

<section className="pt-0">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center">
                    <h2>Latest Rental Listings</h2>
                    <p>Explore our most recent property listings available for rent, carefully curated to meet a variety of needs and lifestyles. Find your next home with us today.</p>
                </div>
            </div>
        </div>
        <PropertySlider />
    </div>
</section>


        <section className="bg-light">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center">
                    <h2>Featured Properties for Sale</h2>
                    <p>Discover our handpicked selection of premium properties currently available for sale. Each listing is chosen for its exceptional value, location, and investment potential.</p>
                </div>
            </div>
        </div>
        <SellPropertyOne border={false} />
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-4">
                <Link to="/listings-list-with-sidebar" className="btn btn-primary px-lg-5 rounded">
                    Browse More Properties
                </Link>
            </div>
        </div>
    </div>		
</section>


        {/* <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Explore Featured Agents</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <TeamOne/>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <Link to="/listings-list-with-sidebar" className="btn btn-primary px-lg-5 rounded">Explore More Agents</Link>
                    </div>
                </div>
            </div>
        </section> */}

        <div className="clearfix"></div>

       <section className="gray-bg">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center">
                    <h2>What Our Customers Say</h2>
                    <p>We’re proud to have earned the trust and appreciation of our clients. Read what our satisfied customers have to say about their experiences with our services.</p>
                </div>
            </div>
        </div>
        <ClientOne />
    </div>
</section>

<section>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
                <div className="sec-heading center">
                    <h2>Explore Our Pricing Packages</h2>
                    <p>Choose from our flexible pricing plans designed to suit different needs and budgets. Whether you're looking for a short-term deal or long-term value, we’ve got you covered.</p>
                </div>
            </div>
        </div>
        <PricingOne />
    </div>	
</section>


        <FooterTop bg="theme-bg"/>
        <Footer/>
    </>
  )
}
