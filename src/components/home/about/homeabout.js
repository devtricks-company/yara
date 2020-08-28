import React from "react"
import alef from "../../../images/alef-web.png"
import lineyara from "../../../images/lineyara.jpeg"
import {BsThreeDots} from 'react-icons/bs';
const Homeabout = () => {
  return (
    <section class="home-about">
      <div className="row w-100">
        <div className="col-12 col-lg-6 img-container">
          <img src={alef} alt="alef" class="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 about-container">
          <img src={lineyara} alt="lineyara" />
          <h4>About Us</h4>
          <h2>KEY POINTS ABOUT COMPANY</h2>
          <div class="acoording-container">
            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <BsThreeDots />
                     <span className="pl-3">Who We Are</span>
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                  Yara is a group of passionate and experts who seeks to create real value for businesses. We bring international practices and local awareness to reach the highest standards in consulting services.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                       <BsThreeDots />
                     <span className="pl-3">What We Do</span>
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                  YARA was formed to create and assist creative people; helping them with business consulting, investment decisions, improving the way companies operate, building relationships and cohesion, and ultimately helping them to grow faster, reach stability and create value.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                       <BsThreeDots />
                     <span className="pl-3">Why We Do It</span>
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                  The only reason the YARA family came together was the strive to raise the level of business management, financial management knowledge, and quality of businesses. Bring A-level practices to Iranian market and increase international awareness about it for better decision making.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homeabout
