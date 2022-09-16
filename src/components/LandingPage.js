import React from "react";
import "../styles/landingpage.scss";
import handpoint from "../assets/images/handpointright.svg";
import girlimage from "../assets/images/section4.png";
import image3 from "../styles/section3.jpg";

function LandingPage() {
  return (
    <>
      <section className="nv-main-container">
        <div className="nv-inside-main">
          <section className="nv-first-section">
            <div className="nv-inside-first">
              <h1>Join the world's biggest Q & A network!</h1>
              <span>
                Connect to our social questions & Answers Engine to ask
                questions answer people's qustions & connect with other people.
              </span>
              {/* <img src={heroimg} alt="heroImage" /> */}
            </div>
            {/* <div className="nv-first-right">
              <div className="nv-first-right-box"></div>
            </div> */}
          </section>
          <section className="nv-second-section">
            <div className="nv-inside-second">
              <div className="nv-second-b1">
                <div className="nv-card1-front">front</div>
                <div className="nv-card1-back">back</div>
              </div>
              <div className="nv-second-b2">
                <div className="nv-card2-front">front</div>
                <div className="nv-card2-back">back</div>
              </div>
              <div className="nv-second-b3">
                <div className="nv-card3-front">front</div>
                <div className="nv-card3-back">back</div>
              </div>
              <div className="nv-second-b4">
                <div className="nv-card4-front">front</div>
                <div className="nv-card4-back">back</div>
              </div>
            </div>
          </section>
          <section className="nv-third-section">
            <div className="nv-third-left">
              <img src={image3} alt="hero3" />
            </div>
            <div className="nv-third-right">
              <div className="nv-third-right-first">
                <span>ASK A QUESTION</span>
              </div>
              <h1>Get Help From Professionals</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus, facilis quos rem quo quae animi eum delectus at
                eaque voluptate quasi doloribus veritatis error est debitis.
                Quisquam maxime, animi consequatur, facere labore sequi libero
                delectus ratione praesentium pariatur nemo corrupti velit
                expedita quae amet assumenda deserunt doloremque ex? Optio,
                iusto?
              </p>
              <div className="nv-third-right-button">
                <button>Ask A Question</button>
              </div>
            </div>
          </section>
          <section className="nv-fourth-section">
            <div className="nv-fourth-left">
              <div className="nv-fourth-left-first">
                <h1>ANSWER QUESTIONS</h1>
                <img src={handpoint} alt="handpoint" />
              </div>
              <div className="nv-fourth-left-second"></div>
            </div>
            <div className="nv-fourth-right"></div>
            <img className="girl_image" src={girlimage} alt="girlImage" />
          </section>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
