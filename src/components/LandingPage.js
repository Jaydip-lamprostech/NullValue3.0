import React from "react";
import "../styles/landingpage.scss";
import AnimOne from "./animation/AnimOne";

function LandingPage() {
  return (
    <>
      <section className="nv-main-container">
        <div className="nv-inside-main">
          <section className="nv-first-section">
            <div className="nv-first-left">
              <h1>Join the world's biggest Q & A network!</h1>
              <span>
                Connect to our social questions & Answers Engine to ask
                questions answer people's qustions & connect with other people.
              </span>
              <button>
                <span class="text">Connect Wallet</span>
              </button>
            </div>
            <div className="nv-first-right">
              <div className="nv-first-right-box">
                <AnimOne />
              </div>
            </div>
          </section>
          <section className="nv-second-section">
            <h1>Operating instructions</h1>
            <div className="nv-second-left">second left</div>
            <div className="nv-second-right">second right</div>
          </section>
          <section className="nv-third-section">
            <div className="nv-third-left">third left</div>
            <div className="nv-third-right">third right</div>
          </section>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
