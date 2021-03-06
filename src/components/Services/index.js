import React from 'react';
import mascot_left from "../../assets/img/mascot_left.png";
import Logo from  '../../assets/img/logo.png';

const Sevices = () => {
  return (
    <div>
    
    <div class="hug hug-hero">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="left-side">
                        
                        <h1>Introducing <br></br>
                            <a href="../../assets/img/logo.png" class="pull-left"><img src={Logo}alt="logo"/></a>roadMan</h1>
                        <h2>An open source project management system.</h2>
                        <a href="../../../views/signup/signup.html" class="btn btn-special">GET STARTED</a>
                    </div>
                    <div class="right-side">
                        <img class="mascot" src={mascot_left} alt=""/>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default Sevices;