import React from 'react';
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div className="footer-container py-2 ">
            <div className="container py-1">
                <Row>
                <Col className="footer-2nd-col" lg={4} md={6} sm={6}>
                        <section className="mt-1">
                         
                            <div className="fw-light footer-padding-comp py-3 font-size text-white d-flex flex-column">
                                <span className="heading fw-bold my-3">Legal</span>
                                <span className="hList my-2">Terms and Conditions</span>
                                <span className="hList my-2">Privacy Policy</span>
                                <span className="hList my-2">GDPR Policy</span>
                                
                            </div>
                        </section>
                    </Col>
                    <Col className="footer-2nd-col" lg={4} md={6} sm={6}>
                        <section className="mt-1">
                          
                            <div className="fw-light footer-padding-comp py-3 font-size text-white d-flex flex-column">
                                <span className="heading my-3 fw-bold">Useful Links</span>
                                <span className="hList my-2">Home</span>
                                <span className="hList my-2">Blog</span>
                                <span className="hList my-2">Contact Us</span>
                              
                            </div>
                        </section>
                    </Col>
               
                    <Col className="footer-2nd-col" lg={4} md={6} sm={6}>
                        <section className="mt-1">
                          
                            <div className="fw-light footer-padding-comp py-3 font-size text-white d-flex flex-column">
                            <span className="my-3 heading fw-bold">Contact Us</span>
                                <span className=" my-2 Hlist" style={{ color:'#FA7C26', fontSize:'22px'}}>martin@artofgrowthmarketing.com</span>
                            </div>
                        </section>
                    </Col>
                </Row>

                <span style={{display:'flex', alignContent:'center', justifyContent:'center', textAlign:'center', fontSize:'22px', color:'#898989', fontFamily:'roboto', paddingBottom:'5px'}}>Copyright© 2022 Art of Growth Marketing™ all rights reserved.</span>

            </div>
        </div>
    )
}

export default Footer;