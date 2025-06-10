import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import NavLight from '../../components/navbar/nav-light'
import AdminSidebar from '../../components/admin-sidebar'
import FooterTop from '../../components/footer-top'
import Footer from '../../components/footer'

export default function MyProfile() {
    let [show, setShow] = useState<boolean>(false)
  return (
    <>
        <NavLight/>
        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title">Welcome!</h2>
                        <span className="ipn-subtitle">Welcome To Your Account</span>
                    </div>
                </div>
            </div>
        </div>
        <section className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="filter_search_opt">
                            <Link to="#" className="btn btn-dark full-width mb-4" onClick={()=>setShow(!show)}>Dashboard Navigation<i className="fa-solid fa-bars ms-2"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <AdminSidebar show={show} setShow={setShow}/>
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div className="dashboard-wraper">
                            <div className="form-submit">	
                                <h4>My Account</h4>
                                <div className="submit-section">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>Your Name</label>
                                            <input type="text" className="form-control" value="Calvin Carlo"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>Email</label>
                                            <input type="email" className="form-control" value="Carlo77@gmail.com"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>Your Title</label>
                                            <input type="text" className="form-control" value="Web Designer"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>Phone</label>
                                            <input type="text" className="form-control" value="123 456 5847"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>Address</label>
                                            <input type="text" className="form-control" value="522, Arizona, Canada"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>City</label>
                                            <input type="text" className="form-control" value="Montquebe"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>State</label>
                                            <input type="text" className="form-control" value="Canada"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>Zip</label>
                                            <input type="text" className="form-control" value="160052"/>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label className='mb-2'>About</label>
                                            <textarea className="form-control">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-submit">	
                                <h4>Social Accounts</h4>
                                <div className="submit-section">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>Facebook</label>
                                            <input type="text" className="form-control" value="https://facebook.com/"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>Twitter</label>
                                            <input type="email" className="form-control" value="https://twitter.com/"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>Google Plus</label>
                                            <input type="text" className="form-control" value="https://googleplus.com"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className='mb-2'>LinkedIn</label>
                                            <input type="text" className="form-control" value="https://linkedin.com/"/>
                                        </div>
                                        
                                        <div className="form-group col-lg-12 col-md-12">
                                            <button className="btn btn-primary px-5 rounded" type="submit">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterTop bg="theme-bg"/>
        <Footer/>
    </>
  )
}
