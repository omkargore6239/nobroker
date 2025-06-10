import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import NavLight from '../../components/navbar/nav-light';
import FooterTop from '../../components/footer-top';
import Footer from '../../components/footer';

export default function SubmitProperty() {
    const [files, setFiles] = useState<string[]>([]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files).slice(0, 4).map(file => URL.createObjectURL(file));
            setFiles(prevFiles => [...prevFiles, ...newFiles].slice(0, 4));
        }
    }

    const propertyType = [
        { value: 'Residential', label: 'Residential' },
        { value: 'Commercial', label: 'Commercial' },
        { value: 'Land/Plot', label: 'Land/Plot' },
    ];

    const propertyAdType = [
        { value: 'Rent', label: 'Rent' },
        { value: 'Resale', label: 'Resale' },
        { value: 'PG/Hostel', label: 'PG/Hostel' },
        { value: 'Flatmate', label: 'Flatmate' },
    ];

    const bedrooms = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
    ];

    const tenantType = [
        { value: 'Family', label: 'Family' },
        { value: 'Bachelor', label: 'Bachelor' },
        { value: 'Anyone', label: 'Anyone' },
    ];

    const age = [
        { value: '0-5', label: '0 - 5 Years' },
        { value: '5-10', label: '5 - 10 Years' },
        { value: '10-15', label: '10 - 15 Years' },
        { value: '15-20', label: '15 - 20 Years' },
        { value: '20+', label: '20+ Years' },
    ];

    const citiesInIndia = [
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Bangalore', label: 'Bangalore' },
        { value: 'Hyderabad', label: 'Hyderabad' },
        { value: 'Ahmedabad', label: 'Ahmedabad' },
        { value: 'Chennai', label: 'Chennai' },
        { value: 'Kolkata', label: 'Kolkata' },
        { value: 'Pune', label: 'Pune' },
        { value: 'Jaipur', label: 'Jaipur' },
        { value: 'Surat', label: 'Surat' },
    ];

    const yesNoOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];

    return (
        <>
            <NavLight />

            <div className="page-title" style={{ backgroundColor: '#6a0dad' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2 className="ipt-title" style={{ fontSize: '2.5rem', color: '#fff' }}>Submit Property</h2>
                            <span className="ipn-subtitle" style={{ fontSize: '1.25rem', color: '#fff' }}>Just Submit Your Property</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="gray-simple">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="submit-page">
                                <div className="form-submit">
                                    <h3 style={{ fontSize: '1.75rem' }}>Basic Information</h3>
                                    <div className="submit-section">
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Select City</label>
                                                <Select options={citiesInIndia} className="form-control" placeholder="Select City" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Property Type</label>
                                                <Select options={propertyType} className="form-control" placeholder="Select Property Type" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Select Property Ad Type</label>
                                                <Select options={propertyAdType} className="form-control" placeholder="Select Ad Type" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Bedrooms</label>
                                                <Select options={bedrooms} className="form-control" placeholder="Bedrooms" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Property Type</label>
                                                <Select options={[{ value: 'Apartment', label: 'Apartment' }, { value: 'House', label: 'House' }, { value: 'Villa', label: 'Villa' }]} className="form-control" placeholder="Property Type" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Preferred Tenant</label>
                                                <Select options={tenantType} className="form-control" placeholder="Preferred Tenant" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Possession</label>
                                                <input type="text" className="form-control" placeholder="Calendar" style={{ fontSize: '1rem' }} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Age of Building</label>
                                                <Select options={age} className="form-control" placeholder="Select Age" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-submit">
                                    <h3 style={{ fontSize: '1.75rem' }}>Details of Property</h3>
                                    <div className="submit-section">
                                        <div className="row">
                                            <div className="form-group col-md-12">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Description</label>
                                                <textarea className="form-control h-120" style={{ fontSize: '1rem' }}></textarea>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Rent</label>
                                                <input type="text" className="form-control" placeholder="Rent Amount" style={{ fontSize: '1rem' }} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Deposit</label>
                                                <input type="text" className="form-control" placeholder="Deposit Amount" style={{ fontSize: '1rem' }} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Built-up Area</label>
                                                <input type="text" className="form-control" placeholder="Built-up Area" style={{ fontSize: '1rem' }} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Carpet Area</label>
                                                <input type="text" className="form-control" placeholder="Carpet Area" style={{ fontSize: '1rem' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-submit">
                                    <h3 style={{ fontSize: '1.75rem' }}>Amenities</h3>
                                    <div className="submit-section">
                                        <div className="row">
                                            <div className="form-group col-md-4">
                                                <input type="checkbox" id="parking" name="parking" />
                                                <label htmlFor="parking" style={{ fontSize: '1.1rem', marginLeft: '0.5rem' }}>Parking Available</label>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="checkbox" id="balcony" name="balcony" />
                                                <label htmlFor="balcony" style={{ fontSize: '1.1rem', marginLeft: '0.5rem' }}>Balcony</label>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="checkbox" id="gateSecurity" name="gateSecurity" />
                                                <label htmlFor="gateSecurity" style={{ fontSize: '1.1rem', marginLeft: '0.5rem' }}>Gate Security</label>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="checkbox" id="lift" name="lift" />
                                                <label htmlFor="lift" style={{ fontSize: '1.1rem', marginLeft: '0.5rem' }}>Lift</label>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="checkbox" id="pool" name="pool" />
                                                <label htmlFor="pool" style={{ fontSize: '1.1rem', marginLeft: '0.5rem' }}>Pool</label>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <input type="checkbox" id="nonVeg" name="nonVeg" />
                                                <label htmlFor="nonVeg" style={{ fontSize: '1.1rem', marginLeft: '0.5rem' }}>Non-Veg Allowed</label>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Floor</label>
                                                <input type="text" className="form-control" placeholder="Floor" style={{ fontSize: '1rem' }} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Posted On</label>
                                                <input type="date" className="form-control" style={{ fontSize: '1rem' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-submit">
                                    <h3 style={{ fontSize: '1.75rem' }}>Contact Information</h3>
                                    <div className="submit-section">
                                        <div className="row">
                                            <div className="form-group col-md-4">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Name</label>
                                                <input type="text" className="form-control" style={{ fontSize: '1rem' }} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Email</label>
                                                <input type="text" className="form-control" style={{ fontSize: '1rem' }} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label className='mb-2' style={{ fontSize: '1.1rem' }}>Phone (optional)</label>
                                                <input type="text" className="form-control" style={{ fontSize: '1rem' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-submit">
                                    <h3 style={{ fontSize: '1.75rem' }}>Gallery</h3>
                                    <div className="submit-section">
                                        <div className="row">
                                            <div className="form-group col-md-12">
                                                <label style={{ fontSize: '1.1rem' }}>Upload Images (Max 4)</label>
                                                <form className="dropzone dz-clickable primary-dropzone">
                                                    <div className='position-relative'>
                                                        <input type="file" onChange={handleChange} multiple style={{ width: '100%', height: '100%', opacity: '0' }} />
                                                        <div className="dz-default dz-message" style={{ border: '2px dashed #6a0dad' }}>
                                                            <i className="fa-solid fa-images"></i>
                                                            <span>Drag & Drop Images Here</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        {[...Array(4)].map((_, index) => (
                                                            <div key={index} className="col-md-3 mb-3">
                                                                {files[index] ? (
                                                                    <img src={files[index]} alt={`Preview ${index}`} style={{ width: '100%', height: '150px', borderRadius: '15px', objectFit: 'cover' }} />
                                                                ) : (
                                                                    <div style={{ width: '100%', height: '150px', borderRadius: '15px', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <span>Image {index + 1}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group col-lg-12 col-md-12">
                                    <label style={{ fontSize: '1.1rem' }}>GDPR Agreement *</label>
                                    <ul className="no-ul-list">
                                        <li>
                                            <input id="aj-1" className="form-check-input me-2" name="aj-1" type="checkbox" />
                                            <label htmlFor="aj-1" className="form-check-label" style={{ fontSize: '1rem' }}>I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 d-flex justify-content-between">
                                    <button className="btn btn-primary fw-medium px-5" type="button" style={{ backgroundColor: '#6a0dad', borderColor: '#6a0dad', fontSize: '1.1rem' }}>Contact</button>
                                    <button className="btn btn-secondary fw-medium px-5" type="button" style={{ backgroundColor: '#f8f9fa', color: '#6a0dad', borderColor: '#6a0dad', fontSize: '1.1rem' }}>Schedule Visit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterTop bg="theme-bg" />

            <Footer />
        </>
    );
}
