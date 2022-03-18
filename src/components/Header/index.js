import React from "react";

import Logo from  '../../assets/img/logo.png';

const Header = () => {
  return (
    <header>
    
    <div align="center"/>
    <div class="hug hug-header">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <a href="../../assets/img/logo.png" class="pull-left"><img src={Logo}alt="logo"/></a> 
                    
                    <a href="../../../views/login/login.html" class="btn btn-primary btn-line pull-right login">Login</a> &nbsp;&nbsp;&nbsp;
                    <a href="../../../views/signup/signup.html" class="btn btn-primary btn-line pull-right register">Register</a> &nbsp;&nbsp;&nbsp;
                    <a href=" https://dineshparekh11.github.io/myportfolio/" class="btn btn-primary btn-line pull-right register" target="_blank">Personal Website</a> &nbsp;&nbsp;&nbsp;
                    <a href=" https://github.com/dineshparekh11/newproadman" class="btn btn-primary btn-line pull-right register" target="_blank">Github Repo</a>&nbsp;&nbsp;&nbsp;
                    
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
    
    
</header>
  )
}

export default Header;