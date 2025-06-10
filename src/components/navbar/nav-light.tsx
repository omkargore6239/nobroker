import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiChevronDown } from "react-icons/fi";
import logoLight from '../../assets/gharkullogo.png';
import logo from '../../assets/gharkullogo.png';
import users from '../../assets/img/svg/users.svg';
import addImg from '../../assets/img/svg/add.svg';
import bar from '../../assets/img/svg/bar.svg';
import loginImg from '../../assets/img/svg/login.svg';
import loginImgDark from '../../assets/img/svg/login-dark.svg';

// Define an interface for the navProperty item
interface NavPropertyItem {
  image: string;
  title: string;
  loction: string;
  tag: 'For Sale' | 'For Rent' | 'For Buy';
  value: string;
}

interface ActiveMenuState {
  [key: string]: {
    [submenu: string]: boolean;
  };
}

export default function NavLight() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenuState>({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggle, setIsToggle] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [register, setRegister] = useState<boolean>(false);
  const [property, setProperty] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(1);
  const [scroll, setScroll] = useState<boolean>(false);
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [registrationStep, setRegistrationStep] = useState<number>(1);
  const [userType, setUserType] = useState<'user' | 'broker'>('user');
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: {
      area: '',
      state: '',
      city: '',
      pincode: ''
    },
    agencyNumber: '',
    reraNumber: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();
  const location = useLocation();
  const current = location.pathname;

  // Mock data for navProperty
  const navProperty: NavPropertyItem[] = [
    { image: 'image1.jpg', title: 'Property 1', loction: 'Location 1', tag: 'For Sale', value: '$100,000' },
    { image: 'image2.jpg', title: 'Property 2', loction: 'Location 2', tag: 'For Rent', value: '$1,000/month' },
    { image: 'image3.jpg', title: 'Property 3', loction: 'Location 3', tag: 'For Buy', value: '$200,000' },
    { image: 'image4.jpg', title: 'Property 4', loction: 'Location 4', tag: 'For Sale', value: '$150,000' },
    { image: 'image5.jpg', title: 'Property 5', loction: 'Location 5', tag: 'For Rent', value: '$1,200/month' },
    { image: 'image6.jpg', title: 'Property 6', loction: 'Location 6', tag: 'For Buy', value: '$250,000' },
    { image: 'image7.jpg', title: 'Property 7', loction: 'Location 7', tag: 'For Sale', value: '$175,000' },
    { image: 'image8.jpg', title: 'Property 8', loction: 'Location 8', tag: 'For Rent', value: '$1,100/month' },
  ];

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(prev => ({
      ...prev,
      [menu]: { main: true }
    }));
  };

  const handleMouseLeave = (menu: string) => {
    setActiveMenu(prev => ({
      ...prev,
      [menu]: { main: false }
    }));
  };

  const handleSendOtp = () => {
    console.log("OTP sent to:", mobileNumber);
    alert(`OTP sent to ${mobileNumber}`);
  };

  const handleLogin = () => {
    setLogin(true);
    setRegister(false);
  };

  const handleRegister = () => {
    setRegister(true);
    setLogin(false);
    setRegistrationStep(1);
  };

  const handleRegistrationSubmit = () => {
    if (registrationStep === 1) {
      setRegistrationStep(2);
    } else {
      navigate('/create-account');
    }
  };

  const handleRegistrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const addressField = name.split('.')[1];
      setRegistrationData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setRegistrationData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handlerScroll = () => {
      setScroll(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handlerScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handlerScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={`header header-transparent ${scroll ? 'header-fixed' : ''}`}>
        <div className="container">
          <nav id="navigation" className={windowWidth > 991 ? "navigation navigation-landscape" : "navigation navigation-portrait"}>
            <div className="nav-header" style={{ lineHeight: '0', display: 'flex', alignItems: 'center' }}>
              <Link className="nav-brand text-logo exchange" to="#" style={{ display: 'flex', alignItems: 'center' }}>
                {scroll ? (
                  <img src={logo} alt="Logo" style={{ height: '50px', width: 'auto' }} />
                ) : (
                  <>
                    <img src={logoLight} alt="Logo" className='d-none d-lg-block' style={{ height: '50px', width: 'auto' }} />
                    <img src={logo} alt="Logo" className='d-block d-lg-none' style={{ height: '50px', width: 'auto' }} />
                  </>
                )}
                <h5 className="fs-3 fw-bold ms-2 my-0">Gharkul</h5>
              </Link>
              <div className="nav-toggle" onClick={() => setIsToggle(!toggle)}></div>
              <div className="mobile_nav">
                <ul>
                  <li>
                    <Link to="#" onClick={handleLogin}>
                      <img src={users} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="submit-property" className="text-primary">
                      <img src={addImg} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-primary" onClick={() => setProperty(!property)}>
                      <img src={bar} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`nav-menus-wrapper ${toggle ? 'nav-menus-wrapper-open' : ''}`} style={{ transitionProperty: toggle ? 'none' : 'left' }}>
              <span className="nav-menus-wrapper-close-button" onClick={() => setIsToggle(!toggle)}>✕</span>
              <ul className="nav-menu">
                <li className={current === '/' || current.startsWith('/home') ? 'active' : ''}>
                  <Link to="/">Home</Link>
                </li>
                <li className={`${current === '/list-layout-two' ? 'active' : ''}`}>
                  <Link to="/list-layout-two">Listings</Link>
                </li>
                <li className={`${[
                  '/single-property-1', '/single-property-2', '/single-property-3', '/single-property-4',
                  '/agents', '/agent-page', '/add-agent', '/agencies', '/agency-page',
                  '/dashboard', '/create-account', '/my-profile', '/checkout', '/my-property',
                  '/bookmark-list', '/change-password', '/compare-property', '/submit-property'
                ].some(path => current.startsWith(path)) ? 'active' : ''} ${activeMenu['feature']?.main ? 'show' : ''}`}
                  onMouseEnter={() => handleMouseEnter('feature')}
                  onMouseLeave={() => handleMouseLeave('feature')}>
                  <Link to="#">Features<FiChevronDown className="submenu-indicator" /></Link>
                  <ul className="nav-dropdown nav-submenu" style={{
                    display: activeMenu['feature']?.main ? 'block' : 'none',
                    pointerEvents: activeMenu['feature']?.main ? 'auto' : 'none'
                  }}>
                    <li><Link to="/single-property-1">Single Property</Link></li>
                    <li><Link to="/agents">Agents List</Link></li>
                    <li><Link to="/my-profile">My Profile</Link></li>
                    <li><Link to="/compare-property">Compare Property</Link></li>
                    <li><Link to="/submit-property">Submit Property</Link></li>
                  </ul>
                </li>
                <li className={`${['/about-us', '/contact'].includes(current) ? 'active' : ''} ${activeMenu['pages']?.main ? 'show' : ''}`}
                  onMouseEnter={() => handleMouseEnter('pages')}
                  onMouseLeave={() => handleMouseLeave('pages')}>
                  <Link to="#">Pages<FiChevronDown className="submenu-indicator" /></Link>
                  <ul className="nav-dropdown nav-submenu" style={{
                    display: activeMenu['pages']?.main ? 'block' : 'none',
                    pointerEvents: activeMenu['pages']?.main ? 'auto' : 'none'
                  }}>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact">Contacts</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav-menu nav-menu-social align-to-right d-none d-lg-inline-flex">
                <li>
                  <Link to="#" className="fw-medium text-invers" onClick={handleLogin}>
                    <span className="svg-icon svg-icon-2hx me-1">
                      <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg  ">
                        <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                        <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                        <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor" />
                      </svg>
                    </span>
                    SignUp or SignIn
                  </Link>
                </li>
                <li className="add-listing light">
                  <Link to="/submit-property" className="bg-primary">
                    {scroll ? <img src={loginImg} alt="" className='me-1' /> : <img src={loginImgDark} alt="" className='me-1' />}
                    Post Property
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-invers" onClick={() => setProperty(!property)}>
                    <span className="svg-icon svg-icon-2hx">
                      <svg width="24" height="24" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg  ">
                        <rect y="6" width="16" height="3" rx="1.5" fill="currentColor" />
                        <rect opacity="0.3" y="12" width="8" height="3" rx="1.5" fill="currentColor" />
                        <rect opacity="0.3" width="12" height="3" rx="1.5" fill="currentColor" />
                      </svg>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-overlay-panel" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', display: toggle ? 'block' : 'none' }}></div>
          </nav>
        </div>
      </div>
      <div className="clearfix"></div>

      {/* Login Modal */}
      {login && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: "#0000008a" }}>
          <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="loginmodal">
              <span className="mod-close" onClick={() => setLogin(false)}>
                <span className="svg-icon text-primary svg-icon-2hx">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg  ">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                    <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor"></rect>
                    <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor"></rect>
                  </svg>
                </span>
              </span>
              <div className="modal-body">
                <h4 className="modal-header-title">Log In</h4>
                <div className="login-form">
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                      <label>Mobile Number</label>
                    </div>
                    <div className="form-group mb-3">
                      <button
                        type="button"
                        className="btn btn-lg btn-primary fw-medium full-width rounded-2"
                        onClick={handleSendOtp}
                      >
                        Send OTP
                      </button>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                      <label>OTP</label>
                    </div>
                    <div className="form-group mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="flex-shrink-0 flex-first">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="save-pass" />
                            <label className="form-check-label" htmlFor="save-pass">Save Password</label>
                          </div>
                        </div>
                        <div className="flex-shrink-0 flex-first">
                          <Link to="#" className="link fw-medium">Forgot Password?</Link>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-lg btn-primary fw-medium full-width rounded-2"
                        onClick={() => navigate('/dashboard')}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <div className="text-center mt-3">
                  <p>Don't Have An Account? <Link to="#" className="link fw-medium" onClick={handleRegister}>Create An Account</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {register && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: "#0000008a" }}>
          <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="registermodal">
              <span className="mod-close" onClick={() => setRegister(false)}>
                <span className="svg-icon text-primary svg-icon-2hx">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg  ">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                    <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor"></rect>
                    <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor"></rect>
                  </svg>
                </span>
              </span>
              <div className="modal-body">
                <h4 className="modal-header-title">Create Account</h4>
                <div className="mb-3">
                  <button
                    type="button"
                    className={`btn ${userType === 'user' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                    onClick={() => setUserType('user')}
                  >
                    User
                  </button>
                  <button
                    type="button"
                    className={`btn ${userType === 'broker' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setUserType('broker')}
                  >
                    Broker
                  </button>
                </div>
                <div className="login-form">
                  <form>
                    {registrationStep === 1 ? (
                      <>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="firstName"
                            value={registrationData.firstName}
                            onChange={handleRegistrationChange}
                          />
                          <label>First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastName"
                            value={registrationData.lastName}
                            onChange={handleRegistrationChange}
                          />
                          <label>Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            name="email"
                            value={registrationData.email}
                            onChange={handleRegistrationChange}
                          />
                          <label>Email Address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Mobile Number"
                            name="mobile"
                            value={registrationData.mobile}
                            onChange={handleRegistrationChange}
                          />
                          <label>Mobile Number</label>
                        </div>
                        <div className="form-group mb-3">
                          <button
                            type="button"
                            className="btn btn-lg btn-primary fw-medium full-width rounded-2"
                            onClick={handleSendOtp}
                          >
                            Send OTP
                          </button>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                          />
                          <label>OTP</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Area"
                            name="address.area"
                            value={registrationData.address.area}
                            onChange={handleRegistrationChange}
                          />
                          <label>Area</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="State"
                            name="address.state"
                            value={registrationData.address.state}
                            onChange={handleRegistrationChange}
                          />
                          <label>State</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            name="address.city"
                            value={registrationData.address.city}
                            onChange={handleRegistrationChange}
                          />
                          <label>City</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Pincode"
                            name="address.pincode"
                            value={registrationData.address.pincode}
                            onChange={handleRegistrationChange}
                          />
                          <label>Pincode</label>
                        </div>
                        {userType === 'broker' && (
                          <>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Agency Number"
                                name="agencyNumber"
                                value={registrationData.agencyNumber}
                                onChange={handleRegistrationChange}
                              />
                              <label>Agency Number</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="RERA Number"
                                name="reraNumber"
                                value={registrationData.reraNumber}
                                onChange={handleRegistrationChange}
                              />
                              <label>RERA Number</label>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={registrationData.password}
                            onChange={handleRegistrationChange}
                          />
                          <label>Password</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={registrationData.confirmPassword}
                            onChange={handleRegistrationChange}
                          />
                          <label>Confirm Password</label>
                        </div>
                      </>
                    )}
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-lg btn-primary fw-medium full-width rounded-2"
                        onClick={handleRegistrationSubmit}
                      >
                        {registrationStep === 1 ? 'Continue' : 'Register'}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="text-center mt-3">
                  <p>Already Have An Account? <Link to="#" className="link fw-medium" onClick={handleLogin}>Log In</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Property Comparison Panel */}
      <div className={`offcanvas offcanvas-end ${property ? 'show' : ''}`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Compare & Selected Property</h5>
          <Link to="#" onClick={() => setProperty(!property)}>
            <span className="svg-icon text-primary svg-icon-2hx">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg  ">
                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                <rect x="7" y="15.3137" width="12" height="2" rx="1" transform="rotate(-45 7 15.3137)" fill="currentColor" />
                <rect x="8.41422" y="7" width="12" height="2" rx="1" transform="rotate(45 8.41422 7)" fill="currentColor" />
              </svg>
            </span>
          </Link>
        </div>
        <div className="offcanvas-body">
          <ul className="nav nav-pills sider_tab mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>Compare Property</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>Saved Property</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
              <div className="sidebar_featured_property">
                {navProperty.slice(0, 4).map((item: NavPropertyItem, index: number) => (
                  <div className="sides_list_property p-2" key={index}>
                    <div className="sides_list_property_thumb">
                      <img src={item.image} className="img-fluid" alt="" />
                    </div>
                    <div className="sides_list_property_detail">
                      <h4><Link to="/single-property-1">{item.title}</Link></h4>
                      <span className="text-muted-2"><i className="fa-solid fa-location-dot"></i>{item.loction}</span>
                      <div className="lists_property_price">
                        <div className="lists_property_types">
                          {item.tag === 'For Sale' && <div className="property_types_vlix sale">For Sale</div>}
                          {item.tag === 'For Rent' && <div className="property_types_vlix">For Rent</div>}
                          {item.tag === 'For Buy' && <div className="property_types_vlix buy">For Buy</div>}
                        </div>
                        <div className="lists_property_price_value">
                          <h4 className="text-primary">{item.value}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="input-group">
                  <Link to="/compare-property" className="btn btn-light-primary fw-medium full-width">View & Compare</Link>
                </div>
              </div>
            </div>
            <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
              <div className="sidebar_featured_property">
                {navProperty.slice(4, 8).map((item: NavPropertyItem, index: number) => (
                  <div className="sides_list_property p-2" key={index}>
                    <div className="sides_list_property_thumb">
                      <img src={item.image} className="img-fluid" alt="" />
                    </div>
                    <div className="sides_list_property_detail">
                      <h4><Link to="/single-property-1">{item.title}</Link></h4>
                      <span className="text-muted-2"><i className="fa-solid fa-location-dot"></i>{item.loction}</span>
                      <div className="lists_property_price">
                        <div className="lists_property_types">
                          {item.tag === 'For Sale' && <div className="property_types_vlix sale">For Sale</div>}
                          {item.tag === 'For Rent' && <div className="property_types_vlix">For Rent</div>}
                          {item.tag === 'For Buy' && <div className="property_types_vlix buy">For Buy</div>}
                        </div>
                        <div className="lists_property_price_value">
                          <h4 className="text-primary">{item.value}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="input-group">
                  <Link to="#" className="btn btn-light-primary fw-medium full-width">View & Compare</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
