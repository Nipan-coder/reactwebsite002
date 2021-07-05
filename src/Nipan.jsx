import React from 'react';
import web from "../src/image/logo.png";
import { NavLink } from 'react-router-dom';
import Home from './Student';
import Lesson from './Lesson';
import Setting from './Setting';
import {Switch,Route,Redirect} from "react-router-dom";

const Com=()=>{
  return(
    <>
      <div class="container-fluid ">
        <div class="row">
          <div class="col-sm-1 text-center p-3 myDiv">
            <img src={web} class="img-fluid logo" alt="" />
          </div>
          <div class="col-sm-11">

          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-1 text-center p-0  myDiv">

            <div className="hov">
              <NavLink activeClassName="menu_active" to="/"><i className="fas fa-user icon"></i></NavLink>
              <p className="l">Students</p>
            </div>

            <div className="hov">
              <NavLink activeClassName="menu_active" to="/lesson"><i className="fas fa-book icon"></i></NavLink>
              <p className="l">Lesson Plan</p>
            </div>

            <div className="hov">
              <NavLink activeClassName="menu_active" to="/setting"><i className="fas fa-cog icon"></i></NavLink>
              <p className="l">Settings</p>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lesson" component={Lesson} />
            <Route exact path="/setting" component={Setting} />
            <Redirect to="/" />
          </Switch>

        </div>
      </div>


      

    </>
  );
}

export default Com;
