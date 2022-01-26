/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { UPDATE_PROFILE_RESET } from '../../redux/constants/userConstants';
import router, { useRouter } from 'next/router';

import { toast } from 'react-toastify';
import ButtonLoader from '../layout/ButtonLoader';
import Loader from '../layout/Loader';
import {
    clearErrors,
    loadUser,
    updateUser,
} from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ContactUs = () => {
    return (
        <>
            <div className="update-background">
                <div className="update-bg-image">
                    <div className="container container-fluid">
                        <div className="row wrapper">
                            <div className="col-10 col-lg-5 update-form">
                                <form className="shadow-lg">
                                    <h1 className="mb-3">Contact Us</h1>

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
