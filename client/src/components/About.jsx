import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">

            <section className="page-section bg-info" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">We've got what you need!</h2>
                            <hr className="divider divider-light" />
                            <p className="text-white-75 mb-4">
                                Fitness starts with what you eat.
                                Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to hit your goals.
                            </p>
                            <button className="btn btn-primary btn-xl glow-on-hover">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <Link className="nav-link" to="/register">
                                Sign up!
                                </Link>
                        </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section" id="services">
                <div className="container px-4 px-lg-5">
                    <h2 className="text-center mt-0">At Your Service</h2>
                    <hr className="divider" />
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Set Goals</h3>
                                <p className="text-muted mb-0">You can set your ideal calorie intake that keeps you on track.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Search Foods</h3>
                                <p className="text-muted mb-0">You can save food items and their macros for easier tracking.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Stay Motivated</h3>
                                <p className="text-muted mb-0">Track your progress and find out exactly what works for you.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Made with Love</h3>
                                <p className="text-muted mb-0">Enjoy the foods you eat and have fun.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
}

export default About;