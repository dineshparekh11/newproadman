import React from 'react';
import arraw from "../../assets/img/arrows.png";

const Textcenter = () => {
  return (
    <div class="hug hug-info text-center">
        <img class="arrow" src={arraw} alt="Arrows"/>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h2>We Are Powered by</h2>
                    <h3>MERN Full Stack Development</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Textcenter;