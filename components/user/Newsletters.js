/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import style from '../../styles/Newsletter.module.css';

import Image from 'next/image';
import Pic1 from '../../public/img/Newsletter1.png';

const Newsletter = () => {
    return (
        <>
            <div className="update-background">
                <div className="update-bg-image">
                    <div className="container container-fluid">
                        <div className="row wrapper shadow-lg">
                            <form className="row shadow-lg">
                                <h1 className="mb-2">Newsletters</h1>
                                <p>This page is containing news concerning the game activities.</p>
                                <div
                                    className={`card ${style['card-container']}`}
                                    style={{ width: '200px', marginTop: '20px', marginLeft: '50px' }}
                                >
                                    <Image className="card-img-top mt-3" src={Pic1}></Image>
                                    <div className="card-body">
                                        <a href="#" className="card-title">1st Edition</a>
                                        <p className="card-text">Game on! join our competition now</p>

                                    </div>
                                </div>
                                <div
                                    className={`card ${style['card-container']}`}
                                    style={{ width: '200px', marginTop: '20px', marginLeft: '50px' }}
                                >
                                    <Image className="card-img-top mt-3" src={Pic1}></Image>
                                    <div className="card-body">
                                        <a href="#" className="card-title">2nd Edition</a>
                                        <p className="card-text">Let's subscribe! join  competition</p>

                                    </div>
                                </div>
                                <div
                                    className={`card ${style['card-container']}`}
                                    style={{ width: '200px', marginTop: '20px', marginLeft: '50px' }}
                                >
                                    <Image className="card-img-top mt-3" src={Pic1}></Image>
                                    <div className="card-body">
                                        <a href="#" className="card-title">3rd Edition</a>
                                        <p className="card-text">Let's subscribe! join  competition</p>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Newsletter;
