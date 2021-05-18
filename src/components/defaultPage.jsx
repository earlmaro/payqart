import React, { Component } from 'react';
import logo from '../shopping.jpg';
import payqartlogo from '../payqartlogo.jpg';
import moreshirt from '../moreshirt.jpg';
import Product from './product.jsx';
import Details from './paidEmployment';
import paymentBreakDown from './paymentBreakDown';
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';
import { Redirect } from 'react-router';
import Popup from 'react-popup';


import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

class Default extends Component {

    
    
    state = { 
        total_cost: 80500,
        occupation:"Employed",
        salary:"",
        loan:"",
        salary_day:"",
        firstStep:"",
        shopping_credit:"",
        down_payment:"",
        monthly_instalment:"",
        tenure:1

     }
     handleSubmit = e =>{
         e.preventDefault()
        this.setState({firstStep:true})

        let fee = this.state.total_cost
        let credit = 30/100 * fee
        this.setState({shopping_credit:credit})
     }
     handleClickone = e =>{
        this.setState({tenure:1})
        let shopping = this.state.shopping_credit
        let down = this.state.down_payment
        console.log(e.target.value)
        let tenure = 1
        let interest = tenure * 4000
        let payment = shopping - down
        let actualPayment = payment + interest
        let monthlyPayment = actualPayment/tenure
        this.setState({monthly_instalment:monthlyPayment})
    }
    handleClicktwo = e =>{
        this.setState({tenure:2})
        let shopping = this.state.shopping_credit
        let down = this.state.down_payment
        let tenure = 2
        let interest = tenure * 4000
        let payment = shopping - down
        let actualPayment = payment + interest
        let monthlyPayment = actualPayment/tenure
        this.setState({monthly_instalment:monthlyPayment})
    }
    handleClickthree = e =>{
        this.setState({tenure:3})
        let shopping = this.state.shopping_credit
        let down = this.state.down_payment
        let tenure = 3
        let interest = tenure * 4000
        let payment = shopping - down
        let actualPayment = payment + interest
        let monthlyPayment = actualPayment/tenure
        this.setState({monthly_instalment:monthlyPayment})
    }
    handleClickfour = e =>{
        this.setState({tenure:4})
        let shopping = this.state.shopping_credit
        let down = this.state.down_payment
        let tenure = 4
        let interest = tenure * 4000
        let payment = shopping - down
        let actualPayment = payment + interest
        let monthlyPayment = actualPayment/tenure
        this.setState({monthly_instalment:monthlyPayment})
    }
    handleClickfive = e =>{
        this.setState({tenure:5})
        let shopping = this.state.shopping_credit
        let down = this.state.down_payment
        let tenure = 5
        let interest = tenure * 4000
        let payment = shopping - down
        let actualPayment = payment + interest
        let monthlyPayment = actualPayment/tenure
        this.setState({monthly_instalment:monthlyPayment})
    }
    handleClicksix = e =>{
        this.setState({tenure:6})
        let shopping = this.state.shopping_credit
        let down = this.state.down_payment
        let tenure = 6
        let interest = tenure * 4000
        let payment = shopping - down
        let actualPayment = payment + interest
        let monthlyPayment = actualPayment/tenure
        this.setState({monthly_instalment:monthlyPayment})
    }

     handleFinalSubmitt= e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:5000/user' ,this.state)
        .then(res =>{
            console.log(res)
            alert('Application sucessful!!');

            
        })
        .catch(err =>{
            console.log(err)
        })
        
    }
    changeDetails = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    
    checkMonthly = e => {
        this.setState({[e.target.name]:e.target.value})
        let shopping = this.state.shopping_credit
        let down = e.target.value
        let tenure = this.state.tenure
        let interest = tenure * 4000
        let payment = shopping - down
        let actualPayment = payment + interest
        let monthlyPayment = actualPayment/tenure
        this.setState({monthly_instalment:monthlyPayment})
    }
    

    
     styles = {
            backgroundImage: `url(${logo})` ,
            height: 1000,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.5,
            margin:0,
            padding:0
            // backgroundColor: "blue"
     }
     overlayTopLeft = {
        position: "absolute",
        top: 29,
        left: 30,
        color:"black",
     }
     overlayBottom = {
        position: "absolute",
        bottom: 50,
        left: 60,
        color:"black",
     }
     overlayLogo = {
        position: "absolute",
        top: 500,
        left: 85,
        transform: "translate(-50, -50)"
     }
     card = {
        margin: 20,
        marginTop: 40,
        float: "none",
        width: 400,
        height:350,
        backgroundColor:"white",
        borderRadius:10,
     }
     total = {
        margin: 20,
        width: 400,
        height:60,
        backgroundColor:"#eeeeee",
        borderRadius:10,
     }
    render() { 
        const {total,
            occupation,
            salary,
            oustandingLoan,
            payDay} = this.state
        return (
<React.Fragment>
<Router>
<Popup />,
    document.getElementById('popupContainer')
    

            <div className="row container-fluid m-0 p-0">

                <div className="col-md-3 m-0 p-0" >
                    <div style={this.styles}></div>
               
<div > <a href="#" style={this.overlayTopLeft}> Back to store </a></div>
<ul  style={this.overlayBottom}>
<b>  <li>Get pre-approved instantly.</li>
  <li>Spread payment for up to six months.</li>
  <li>Provide some basic information to get started.</li></b>
</ul>
<img src={payqartlogo} style={this.overlayLogo}  alt="shopping picture"/>
                </div>


                <div className="col-md-3" style={{backgroundColor:"#eeeeee"}}>
                    
                  <b> <p className=" mt-5 " style={{paddingLeft:20, }}>ORDER SUMMARY</p></b> 
                    <div className="card mt-5 "  style={this.card} >
  <Product/>
  <Product/>

                    </div>
                    <div className="card mt-3"  style={this.total} >
                    <div className="row ">
    <div class="col-md-6 text-center">
        <p  style={{ marginTop:15, marginRight:20,paddingLeft:2, paddingRight:20}}>Total Cart Value:</p>
    </div>
    <div class="col-md-6" >
      <p  style={{ marginTop:9,textAlign:"right",paddingRight:10,paddingTop:7}}> &#8358;{this.state.total_cost}</p>
    </div>
    
  </div>
                    </div>
      </div>
                <div className="col-md-6">
             <div >
                    <Details continue={this.handleSubmit} onete={this.handleClickone}
                    onSubmit={this.handleFinalSubmitt} 
                    twote={this.handleClicktwo}
                    threete={this.handleClickthree}
                    fourte={this.handleClickfour}
                    fivte={this.handleClickfive}
                    sixte={this.handleClicksix}
                    handleMonthlly={this.checkMonthly}
                     post={this.state} handleChange={this.changeDetails}/>

             </div>
          
                </div>

            </div>
            </Router>
            
</React.Fragment>

        );
    }
}
 
export default Default;