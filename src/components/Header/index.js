import React from "react";

import Logo from  '../../assets/img/logo.png';

const Head = () => {
  return (
    <head>
    <title>
        Home Page
    </title>
    
    <div align="center">
    <div class="hug hug-header">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <img src={Logo} alt="logo"/>
                    <a href="../../views/login/login.html" class="btn btn-primary btn-line pull-right login">Login</a> &nbsp;&nbsp;&nbsp;
                    <a href="./src/views/signup/signup.html" class="btn btn-primary btn-line pull-right register">Register</a> &nbsp;&nbsp;&nbsp;
                    <a href=" https://dineshparekh11.github.io/myportfolio/" class="btn btn-primary btn-line pull-right register" target="_blank">Personal Website</a> &nbsp;&nbsp;&nbsp;
                    <a href=" https://dineshparekh11.github.io/proadman1/" class="btn btn-primary btn-line pull-right register" target="_blank">Github Repo</a>&nbsp;&nbsp;&nbsp;
                    
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
    </div>

    

</head>
  )
}

export default Head;