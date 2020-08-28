import React from "react"

import $ from "jquery"
import hav from "../../../images/hav.jpg"
import { useEffect } from "react"
import { useState } from "react"
const OwlCarousel =
  typeof window !== `undefined` ? require("react-owl-carousel") : null

const Tesmonial = () => {
  useEffect(() => {}, [])
  return (
    <section className="testmonial">
      <div className="container">
        <div className="testimonal-container">
          <h3>CLIENT</h3>
          <h2>TESTIMONIALS</h2>
          {OwlCarousel ? (
            <OwlCarousel items={1} className="owl-theme" loop nav margin={8}>
              <div className="testimonial-wrraper">
                <img src={hav} alt="havaeii" />
                <p>
                  Having Yara beside me has been a great opportunity in my
                  career procedure. From market researching to writting buisness
                  plan and providing pitch deck, Yara has been always an
                  accurate assistance. By supporting of Yara group, now I find
                  my business in boasting state and Canada startup visa in my
                  hand!
                </p>
                <h3>Farzan Havaie</h3>
                <h4>Rambody CEO</h4>
              </div>
            </OwlCarousel>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Tesmonial
