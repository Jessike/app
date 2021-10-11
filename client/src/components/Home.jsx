import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
      <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-50 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">Start Tracking</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">Take control of your goals. 
                        Track calories, break down ingredients, and log activities with TrackYoCals.</p>
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
        </header>
  );
}

export default Home;