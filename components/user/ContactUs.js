/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';


const ContactUs = () => {
    return (
        <>
            <div className="update-background">
                <div className="update-bg-image">
                    <div className="container container-fluid">
                        <div className="row wrapper">
                            <div className="col-10 col-lg-5">
                                <form className="shadow-lg">
                                    <h1 className="mb-5">Contact Us</h1>
                                    <div className="form-group">
                                        <p>If you have any questions, please feel free to contact us at <a href="mailto:teambinar@gmail.com">teambinar@gmail.com</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
