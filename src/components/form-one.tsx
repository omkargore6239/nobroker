import React from 'react'
import Select from 'react-select';

export default function FormOne() {

    const select1 = [
        { value: '1', label: 'Any Type' },
        { value: '1', label: 'Apartment' },
        { value: '1', label: 'Villas' },
        { value: '1', label: 'Commercial' },
        { value: '1', label: 'Offices' },
        { value: '1', label: 'Garage' },
    ];
    const select2 = [
        { value: '1', label: 'New York City' },
        { value: '1', label: 'Chicago, Illinois' },
        { value: '1', label: 'Las Vegas' },
        { value: '1', label: 'Commercial' },
        { value: '1', label: 'New Orleans' },
        { value: '1', label: 'Washington' },
    ];

  return (
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 b-r">
                <div className="form-group borders">
                    <div className="position-relative">
                        <input type="text" className="form-control border-0 ps-5" placeholder="Neighborhood"/>
                        <div className="position-absolute top-50 start-0 translate-middle-y ms-2">
                            <span className="svg-icon text-primary svg-icon-2hx">
                                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"/>
                                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="form-group borders border-start">
                    <div className="position-relative ps-5">
                        <Select options={select1} className="form-control border-0"/>
                        <div className="position-absolute top-50 start-0 translate-middle-y ms-2">
                            <span className="svg-icon text-primary svg-icon-2hx">
                                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor"/>
                                    <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="form-group borders border-start">
                    <div className="position-relative ps-5">
                        <Select options={select2} className="form-control border-0"/>
                        <div className="position-absolute top-50 start-0 translate-middle-y ms-2">
                            <span className="svg-icon text-primary svg-icon-2hx">
                                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor"/>
                                    <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="form-group">
                    <button type="button" className="btn btn-primary fw-medium full-width">Search</button>
                </div>
            </div>
        </div>
  )
}
