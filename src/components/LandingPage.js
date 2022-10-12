import React from "react";
import "../styles/landingpage.scss";
import handpoint from "../assets/images/handpointright.svg";
import girlimage from "../assets/images/section4.png";
import image3 from "../styles/section3.jpg";
import avatar1 from "../assets/images/avatar2.jpg";
import avatar2 from "../assets/images/avatar3.jpg";
import avatar3 from "../assets/images/avatar5.jpg";
import avatar4 from "../assets/images/avatar10.jpg";
import eye from "../assets/images/eye.svg";
import folder from "../assets/images/folder.svg";
import { WorldIDWidget } from "@worldcoin/id";

import skale from "../assets/images/skale_logo.svg";
import xmtp from "../assets/images/xmtp logo.svg";
import polygon from "../assets/images/polygon.svg";
import worldcoin from "../assets/images/worldcoin_logo.svg";
import unstdomain from "../assets/images/unstoppabledomains.png";

function LandingPage() {
  return (
    <>
      <section className="nv-main-container">
        <div className="nv-inside-main">
          <section className="nv-first-section">
            <div className="nv-inside-first">
              <h1>Join the world's biggest Q & A network!</h1>
              <span className="landing-page-span">
                Connect to our social questions & Answers Engine to ask
                questions answer people's qustions & connect with other people.
              </span>
              <div className="world-id">
                <WorldIDWidget
                  actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
                  signal="my_signal"
                  enableTelemetry
                  onSuccess={(verificationResponse) =>
                    console.log(verificationResponse)
                  } // pass the proof to the API or your smart contract
                  onError={(error) => console.error(error)}
                  debug={true} // to aid with debugging, remove in production
                />
              </div>
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
                <div className="nv-card-back">
                  <h1>Get Help From Professionals</h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, cumque.
                  </span>
                  <div>
                    <button>Ask A Question</button>{" "}
                  </div>
                </div>
              </div>
              <div className="nv-second-b2">
                <div className="nv-card2-front">front</div>
                <div className="nv-card-back">
                  <h1>Give Up/Down Vote To Answers</h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, cumque.
                  </span>
                  <div>
                    <button>View Questions</button>{" "}
                  </div>
                </div>
              </div>
              <div className="nv-second-b3">
                <div className="nv-card3-front">front</div>
                <div className="nv-card-back">
                  <h1>Share Your Knowledge</h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, cumque.
                  </span>
                  <div>
                    <button>View Questions</button>{" "}
                  </div>
                </div>
              </div>
              <div className="nv-second-b4">
                <div className="nv-card4-front">front</div>
                <div className="nv-card-back">
                  <h1>Earn Reputation Points</h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, cumque.
                  </span>
                  <div>
                    <button>Learn More</button>{" "}
                  </div>
                </div>
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
            <div className="nv-fifth-bg"></div>
            <div className="nv-fourth-left">
              <div className="nv-fourth-left-first">
                <h1>ANSWER QUESTIONS</h1>
                <img src={handpoint} alt="handpoint" />
              </div>
              <div className="nv-fourth-left-second">
                <div className="nv-fourth-ques">
                  <div className="nv-fq-main">
                    <div className="nv-pic-quest">
                      <div className="nv-fq-pic">
                        <img src={avatar3} alt="avatar" />
                      </div>
                      <div className="nv-fq-quest">
                        <div className="nv-quest-one">
                          <h2>What is Web3?</h2>
                        </div>
                        <div className="nv-quest-two">
                          <span>
                            <img src={eye} alt="eye" />
                          </span>
                          <span>90 views</span>
                        </div>
                      </div>
                    </div>
                    <div className="nv-fq-voting">
                      <div className="nv-fq-voting-one">
                        <h2>0</h2>
                        <p>votes</p>
                      </div>
                      <div className="nv-fq-voting-two">
                        <h2>0</h2>
                        <p>ans</p>
                      </div>
                    </div>
                  </div>
                  <div className="nv-fq-main">
                    <div className="nv-pic-quest">
                      <div className="nv-fq-pic">
                        <img src={avatar2} alt="avatar" />
                      </div>
                      <div className="nv-fq-quest">
                        <div className="nv-quest-one">
                          <h2>
                            What is the difference between metaverse and web3?
                          </h2>
                        </div>
                        <div className="nv-quest-two">
                          <span>
                            <img src={eye} alt="eye" />
                          </span>
                          <span>90 views</span>
                        </div>
                      </div>
                    </div>
                    <div className="nv-fq-voting">
                      <div className="nv-fq-voting-one">
                        <h2>0</h2>
                        <p>votes</p>
                      </div>
                      <div className="nv-fq-voting-two">
                        <h2>0</h2>
                        <p>ans</p>
                      </div>
                    </div>
                  </div>
                  <div className="nv-fq-main">
                    <div className="nv-pic-quest">
                      <div className="nv-fq-pic">
                        <img src={avatar1} alt="avatar" />
                      </div>
                      <div className="nv-fq-quest">
                        <div className="nv-quest-one">
                          <h2>Can Web3 introduce complete decentralization?</h2>
                        </div>
                        <div className="nv-quest-two">
                          <span>
                            <img src={eye} alt="eye" />
                          </span>
                          <span>90 views</span>
                        </div>
                      </div>
                    </div>
                    <div className="nv-fq-voting">
                      <div className="nv-fq-voting-one">
                        <h2>0</h2>
                        <p>votes</p>
                      </div>
                      <div className="nv-fq-voting-two">
                        <h2>0</h2>
                        <p>ans</p>
                      </div>
                    </div>
                  </div>
                  <div className="nv-fq-main">
                    <div className="nv-pic-quest">
                      <div className="nv-fq-pic">
                        <img src={avatar4} alt="avatar" />
                      </div>
                      <div className="nv-fq-quest">
                        <div className="nv-quest-one">
                          <h2>What are the use cases of Web3?</h2>
                        </div>
                        <div className="nv-quest-two">
                          <span>
                            <img src={eye} alt="eye" />
                          </span>
                          <span>90 views</span>
                        </div>
                      </div>
                    </div>
                    <div className="nv-fq-voting">
                      <div className="nv-fq-voting-one">
                        <h2>0</h2>
                        <p>votes</p>
                      </div>
                      <div className="nv-fq-voting-two">
                        <h2>0</h2>
                        <p>ans</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nv-fourth-button">
                  <button> View All Questions</button>
                </div>
              </div>
            </div>

            <img className="girl_image" src={girlimage} alt="girlImage" />
          </section>
          <section className="nv-fifth-section">
            <div className="nv-fifth-bg"></div>
            <div className="nv-inside-fifth">
              <div className="nv-fifth-left">
                <div className="nv-third-right-first">
                  <span>get reputation</span>
                </div>
                <h1>How Do You Gain Reputation Points?</h1>
              </div>
              <div className="nv-fifth-right">
                <div className="nv-fifth-grid">
                  <div className="nv-fg-item">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 973.1 973.1"
                    >
                      <g>
                        <path
                          d="M502.29,788.199h-47c-33.1,0-60,26.9-60,60v64.9c0,33.1,26.9,60,60,60h47c33.101,0,60-26.9,60-60v-64.9
		C562.29,815,535.391,788.199,502.29,788.199z"
                        />
                        <path
                          d="M170.89,285.8l86.7,10.8c27.5,3.4,53.6-12.4,63.5-38.3c12.5-32.7,29.9-58.5,52.2-77.3c31.601-26.6,70.9-40,117.9-40
		c48.7,0,87.5,12.8,116.3,38.3c28.8,25.6,43.1,56.2,43.1,92.1c0,25.8-8.1,49.4-24.3,70.8c-10.5,13.6-42.8,42.2-96.7,85.9
		c-54,43.7-89.899,83.099-107.899,118.099c-18.4,35.801-24.8,75.5-26.4,115.301c-1.399,34.1,25.8,62.5,60,62.5h49
		c31.2,0,57-23.9,59.8-54.9c2-22.299,5.7-39.199,11.301-50.699c9.399-19.701,33.699-45.701,72.699-78.1
		C723.59,477.8,772.79,428.4,795.891,392c23-36.3,34.6-74.8,34.6-115.5c0-73.5-31.3-138-94-193.4c-62.6-55.4-147-83.1-253-83.1
		c-100.8,0-182.1,27.3-244.1,82c-52.8,46.6-84.9,101.8-96.2,165.5C139.69,266.1,152.39,283.5,170.89,285.8z"
                        />
                      </g>
                    </svg>
                    <div className="nv-grid-item-div">
                      <h2>Ask A Question</h2>
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </div>
                  <div className="nv-fg-item">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path
                          d="M296.422,384h-80.844C197.906,384,192,398.328,192,416v19.203c0,10.773,1.461,19.836,9.625,25.637
		c1.855,28.457,25.18,51.16,56.48,51.16s51.467-22.703,53.322-51.16c8.164-5.801,8.572-14.863,8.572-25.637V416
		C320,398.328,314.094,384,296.422,384z"
                        />
                        <path
                          d="M256,0C167.781,0,96,70.141,96,156.359c0,46.516,20.813,90.031,57.219,119.844c1.234,1.172,2.578,2.25,4.031,3.219
		c16.484,11.141,26.328,26.313,26.328,40.578c0,17.672,14.328,32,32,32h80.844c17.672,0,32-14.328,32-32
		c0-14.266,9.844-29.438,26.328-40.578c1.406-0.938,2.703-1.984,3.922-3.125C395.141,246.484,416,202.922,416,156.359
		C416,70.141,344.219,0,256,0z M256,80c-44.109,0-80,35.891-80,80c0,8.844-7.156,16-16,16c-8.844,0-16-7.156-16-16
		c0-61.75,50.25-112,112-112c8.844,0,16,7.156,16,16C272,72.844,264.844,80,256,80z"
                        />
                      </g>
                    </svg>
                    <div className="nv-grid-item-div">
                      <h2>Answer Question</h2>
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </div>
                  <div className="nv-fg-item">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z" />
                    </svg>
                    <div className="nv-grid-item-div">
                      <h2>Receive/Give Vote</h2>
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </div>
                  <div className="nv-fg-item">
                    <svg
                      viewBox="-64 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z" />
                    </svg>
                    <div className="nv-grid-item-div">
                      <h2>Give The Best Answer</h2>
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <footer className="nv-footer">
        <div className="footer-h1">
          <h1>Powered By</h1>
        </div>
        <div className="sponsers">
          <div className="sponser-grid">
            <div className="sponser-grid-item">
              <img src={skale} alt="skale" />
            </div>
            <div className="sponser-grid-item">
              <img src={xmtp} alt="xmtp logo" />
            </div>
            {/* <div className="sponser-grid-item">
              <img src={polygon} alt="polygon" />
            </div> */}
            <div className="sponser-grid-item">
              <img src={worldcoin} alt="worlcoin" />
            </div>
            <div className="sponser-grid-item">
              <img src={unstdomain} alt="unstoppabledomains" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
