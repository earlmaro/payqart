import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import paymentBreakDown from './paymentBreakDown';
import employer from '../employer.jpg';
import corporate from '../corporate.jpg';
import employee from '../employee.jpg';

import {BrowserRouter as Router, Route,Switch} from "react-router-dom";




class PaidEmployment extends Component {
    state = { 
        total_cost:52100,
        occupation:"",
        salary:"",
        loan:"",
        salary_day:""

     }
    
    
     render() { 
        if(this.props.post.firstStep == ""){
            console.log(this.props.post.firstStep)


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
                <div style={{marginLeft:160,marginRight:100,marginTop:40,width:660}}>
                    
                <form >
                <input type="text" style={{color:"#720056"}} disabled onLoad={this.props.handleChange} value="Employed" name="occupation" className="form-control"/>
    
                        <label for="monthly_payment" className="pb-3" style={{color:"#720056",fontWeight:"bold"}}>How much do you get paid monthly?</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"style={{backgroundColor:"#720056",color:"white"}} >&#8358;</span>
                        </div>
                        <input type="text" onChange={this.props.handleChange} required value={this.props.post.salary} name="salary" className="form-control"/>
                    </div>
                    <div className="mt-5">
                    <label for="monthly_payment" className="pb-3" style={{color:"#720056",fontWeight:"bold"}} >When is your next salary date?</label>
    
                    <select className="form-select" style={{color:"#FF005E"}} required type="date" name = "salary_day" onChange={this.props.handleChange}   aria-label="Default select example">
    <option selected >Select pay date</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
    </select>
    </div>
    <div>
    
    <label for="monthly_payment" className=" mt-3" style={{color:"#720056",fontWeight:"bold"}} >Do you have any existing loan(s)?</label>
    
    <div className="row" style={{marginLeft:0,marginRight:100,marginTop:10,width:660,color:"#FF005E",fontWeight:"bold"}}>
       <div className="col-md-6" style={{ backgroundColor:"white", border: "1px solid white",boxShadow:"2px "}} >
           <div className="form-check form-check-inline" style={{marginLeft:190,}} >
               <input type="radio"  className="form-check-input" name = "loan"  onChange={this.props.handleChange}  value="yes"/>
               <label className="form-check-label" htmlFor="loan"> Yes</label>
           </div>
       </div>
    
       <div className="col-md-1" style={{ backgroundColor:"white", border: "1px solid white"}} >
           <div className="form-check form-check-inline" style={{borderLeft: "1px solid black",height:"50%",}} >
            
           </div>
       </div>
    
       <div className="col-md-5" style={{ backgroundColor:"white", border: "1px solid white"}}>
       <div className="form-check form-check-inline" style={{marginLeft:0,}}>
               <input type="radio" className="form-check-input" style={{color:"#FF005E"}} name = "loan" onChange={this.props.handleChange}  value="no"/>
               <label className="form-check-label" htmlFor="loan"> No</label>
           </div>
           
       </div>
    </div>
    </div>
                  <Link to="/break"> 
    
    <button type="" className="btn btn-outline-surprise" onClick={this.props.continue} style={{borderColor:"#FF005E",color:"#FF005E", marginTop:130,marginLeft:270, borderRadius:20,width:130}}>Continue</button>
    
    </Link> 
    
    
                </form>
    
    
                
            </div>
        
            </Router>
    
    </React.Fragment>
            
             );


        }else{
            return ( 
                <React.Fragment> <div style={{marginLeft:160,marginRight:100,marginTop:20,width:660}}>
              
    
    
                
            </div>
    <div > <a href="/" style={{float:"left",marginTop:10,color:"black", marginBottom:20}}> <u>Back to previous page</u>  </a></div>
    
                <div style={{marginTop:120}}>
                  <h1 className="text-center mt-5 pt-5" style={{color:"#720056",fontSize:40,}} >Choose Your Plan</h1>
                   </div>
                   <div className="row" style={{marginTop:30, marginLeft:10,marginRight:10}}>
                       <div className="col-md-2"  onClick={this.props.onete} >
                           <div style={{margin:5, borderRadius:"20px",  maxHeight:130, }}>
                               <p style={{backgroundColor:"#720056",borderRadius:"10px 10px 0px 0px",height:10}}></p>
                        <b>  <p className="text-center" style={{color:"#720056", margin:"auto",paddingTop:10, fontSize:20}}>Aggressive</p></b> 
                        <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>1</p>
                          <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                          <p style={{backgroundColor:"#720056",borderRadius:"0px 0px 10px 10px",height:10}}></p>

                       </div>
                       </div>
                       <div className="col-md-2" onClick={this.props.twote} >
                       <div style={{margin:5, borderRadius:"20px",  maxHeight:130, }}>
                               <p style={{backgroundColor:"#FF51F3",borderRadius:"10px 10px 0px 0px",height:10}}></p>
                        <b>  <p className="text-center" style={{backgroundColor:"",color:"#FF51F3", borderRadius:"", margin:"auto",paddingTop:10, fontSize:20}}>Stretching</p></b> 
                        <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>2</p>
                          <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                          <p style={{backgroundColor:"#FF51F3",borderRadius:"0px 0px 10px 10px",height:10}}></p>

                       </div>
                       </div>
                       <div className="col-md-2" onClick={this.props.threete} >
                       <div style={{margin:5, borderRadius:"20px",  maxHeight:130, }}>
                               <p style={{backgroundColor:"blue",borderRadius:"10px 10px 0px 0px",height:10}}></p>
                        <b>  <p className="text-center" style={{backgroundColor:"",color:"blue", borderRadius:"", margin:"auto",paddingTop:10, fontSize:20}}>Focused</p></b> 
                        <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>3</p>
                          <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                          <p style={{backgroundColor:"blue",borderRadius:"0px 0px 10px 10px",height:10}}></p>

                       </div>
                       </div>
                       <div className="col-md-2" onClick={this.props.fourte} >
                       <div style={{margin:5, borderRadius:"20px",  maxHeight:130, }}>
                               <p style={{backgroundColor:"#51FFED",borderRadius:"10px 10px 0px 0px",height:10}}></p>
                        <b>  <p className="text-center" style={{backgroundColor:"",color:"#51FFED", borderRadius:"", margin:"auto",paddingTop:10, fontSize:20}}>Whatever</p></b> 
                        <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>4</p>
                          <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                          <p style={{backgroundColor:"#51FFED",borderRadius:"0px 0px 10px 10px",height:10}}></p>

                       </div>
                       </div>
                       <div className="col-md-2" onClick={this.props.fivte} >

                       <div style={{margin:5, borderRadius:"20px",  maxHeight:130, }}>
                               <p style={{backgroundColor:"#FFAE51",borderRadius:"10px 10px 0px 0px",height:10}}></p>
                        <b>  <p className="text-center" style={{backgroundColor:"",color:"#FFAE51", borderRadius:"", margin:"auto",paddingTop:10, fontSize:20}}>Mild</p></b> 
                        <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>5</p>
                          <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                          <p style={{backgroundColor:"#FFAE51",borderRadius:"0px 0px 10px 10px",height:10}}></p>
                       </div>
                       </div>
                       <div className="col-md-2" onClick={this.props.sixte} >

                       <div style={{margin:5, borderRadius:"20px",  maxHeight:130, }}>
                               <p style={{backgroundColor:"green",borderRadius:"10px 10px 0px 0px",height:10}}></p>
                        <b>  <p className="text-center" style={{backgroundColor:"",color:"green", borderRadius:"", margin:"auto",paddingTop:10, fontSize:20}}>Whatever</p></b> 
                           <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>6</p>
                          <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                          <p style={{backgroundColor:"green",borderRadius:"0px 0px 10px 10px",height:10}}></p>
                       </div>
                       </div>
    
                                         
    
    
                       <div className="card   mb-3" style={{maxWidth:"100%",marginTop:150, borderRadius:"20px"}}>
                                       <div className="card-body">
    
                                       <div className="row" style={{}}>
                               <div className="col-md-4">
                             <b>   <p className="card-title pt-5 pl-5" style={{color:"#720056"}}>Shopping Credit</p></b> 
                                       <b>    <p className="card-text pt-3 pl-5"  style={{color:"#720056"}}>Down Payment</p></b>
                                       <b>    <p className="card-text pt-3 pl-5"  style={{color:"#720056"}}>Monthly Installment</p></b>
                                       <b>     <p className="card-text pt-3 pl-5 pb-5"  style={{color:"#720056"}}>Tenure</p></b> 
                               </div>
                               <div className="col-md-1">
                               <div className="form-check form-check-inline" style={{borderLeft: "1px solid black",height:"100%",}} >
                 
                 </div>
                               </div>
                               <div className="col-md-3">
                               <b>   <p className="card-title pt-5 pl-5" style={{color:"#720056"}}>&#8358; {this.props.post.shopping_credit}</p></b> 
                                       <b>    <p className="card-text pt-3 pl-5"  style={{color:"#720056"}}>&#8358;{this.props.post.down_payment}</p></b>
                                       <b>    <p className="card-text pt-3 pl-5"  style={{color:"#720056"}}>&#8358;{this.props.post.monthly_instalment}</p></b>
                                       <b>     <p className="card-text pt-3 pl-5 pb-5"  style={{color:"#720056"}}>{this.props.post.tenure} <span>Months</span></p></b> 
                               </div>
                               <div className="col-md-4">
                                   <div className="card text-white  mb-3" style={{maxWidth: "18rem", height:"80%",backgroundColor:"#720056", borderRadius:"10px"}}>
    
                                   <div className="card-body">
                                   <b>   <p className="card-title text-center pt-5">Customize Down Payment</p></b> 
                                   <form action="">
                                   <div className="input-group mb-3 mt-4">
                             <div className="input-group-prepend">
                                 <span className="input-group-text"style={{backgroundColor:"#eeeeee",color:"#720056"}} >&#8358;</span>
                             </div>
                        <input type="number" onChange={this.props.handleMonthlly} max={this.props.post.shopping_credit} required value={this.props.post.down_payment} name="down_payment" className="form-control"/>

                         </div>

                         <p style={{color:"#eeeeee",marginLeft:15,marginBottom:50, borderRadius:20,width:200}}>Amount should not be above <span style={{color:"#eeeeee"}}>&#8358;</span>{this.props.post.shopping_credit} </p>
    
    {/* <button type="" class="btn btn-outline-surprise " onClick={this.props.onSubmit}   style={{borderColor:"#eeeeee",color:"#eeeeee", marginTop:70,marginLeft:15,marginBottom:50, borderRadius:20,width:200,}}> <b> Update Breakdown </b> </button> */}
    
    
                                   </form>
                                   </div>
                                   </div>
                                   
                               </div>
    
    
                           </div>
    
    
                                       </div>
                                   </div>
    <button type="submit" class="btn btn-outline-surprise" onClick={this.props.onSubmit}  style={{borderColor:"#FF005E",color:"#FF005E", marginTop:60,marginLeft:400,marginBottom:30, borderRadius:20,width:200,}}> <b> Continue </b> </button>
    
    
    
    
    
                       <div>
                          
                       </div>
    
                    
    
                       
                   </div>
         
    
    </React.Fragment>
             );
        }
    }
}
 
export default PaidEmployment;