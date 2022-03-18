import React from 'react'
import Projectpage from "../../assets/img/project_screenshot.png";

const Uicenter = () => {
  return (
    <div class="hug hug-ui text-center">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="text-bucket">
                        <h2>Did we mention it looks good too?</h2>
                        <h3>Less fuzz while still having all the info you need at a glance.</h3>
                    </div>
                    <img src={Projectpage} alt="Project Page"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Uicenter;