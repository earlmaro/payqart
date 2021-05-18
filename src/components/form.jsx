import React, { Component } from 'react';
import employer from '../employer.jpg';
import corporate from '../corporate.jpg';
import employee from '../employee.jpg';
import paymentBreakDown from './paymentBreakDown';
import PaidEmployment from './paidEmployment';
import {Link} from "react-router-dom";

import {BrowserRouter as Router, Route,Switch} from "react-router-dom";




class Form extends Component {
    state = {  }
    render() { 
        return (
            
            
            
            <React.Fragment>
                <Router>
                <div style={{marginTop:120}}>
                  <h1 className="text-center mt-5m pt-5" style={{color:"#720056",fontSize:25,}} >What Do You Do?</h1>
                   </div>
             <div className="row" style={{width:850}}>
             <div className="col-md-5"> 
                 <Link to="/paid">
              <img src={employee} style={{height:140,maxHeight:140, borderRadius:"20px", paddingTop:10,marginTop:20,marginLeft:150,paddingBottom:10,paddingLeft:10,}} alt=""/>
            <b>    <p style={{marginLeft:180,padding:10,color:"#720056", fontWeight:"bold"}}> Paid Employment</p></b>
                </Link>
                </div>
              
                 <div className="col-md-3">
                 <Link to="/break">
                       <img src={employer} style={{height:140,maxHeight:140, borderRadius:"20px", paddingTop:10,marginTop:20,paddingBottom:10,paddingLeft:10,}} alt=""/>
                <p style={{padding:10,color:"#720056", fontWeight:"bold"}}>Self Employed/Freelance</p>
                </Link>

                </div>
                <div className="col-md-4">  <img src={corporate} style={{height:140,maxHeight:140, borderRadius:"20px", paddingTop:10,marginTop:20,paddingBottom:10,paddingLeft:10,}} alt=""/>
                <p style={{padding:10,color:"#720056", fontWeight:"bold"}}>Corporate Organisation</p></div>
             </div>
             <Switch>
             <Route path="/break" exact component={paymentBreakDown}></Route>
             <Route path="/paid"  component={PaidEmployment}></Route>
             </Switch>

             </Router>
             
         


</React.Fragment>

             );
    }
}
 
export default Form;