import React, { Component } from 'react';
import employer from '../employer.jpg';
import corporate from '../corporate.jpg';
import employee from '../employee.jpg';

class PaymentBreakDown extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment> <div style={{marginLeft:160,marginRight:100,marginTop:40,width:660}}>
          


            
        </div>
<div > <a href="/" style={{float:"left",marginTop:40,color:"black"}}> <u>Back to previous page</u>  </a></div>

            <div style={{marginTop:120}}>
              <h1 className="text-center mt-5 pt-5" style={{color:"#720056",fontSize:30,}} >Choose Your Plan</h1>
               </div>
               <div className="row" style={{marginTop:30, marginLeft:10,marginRight:10}}>
                   <div className="col-md-2"  >
                       <div style={{margin:5, borderRadius:"20px", height:130, maxHeight:130, backgroundColor:"#720056"}}>
                    <b>  <p className="text-center" style={{color:"#eeeeee", margin:"auto",paddingTop:10, fontSize:20}}>Aggressive</p></b> 
                    <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>1</p>
                      <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                   </div>
                   </div>
                   <div className="col-md-2"  >
                       <div style={{margin:5, borderRadius:"20px", height:130, maxHeight:130, backgroundColor:"#720056"}}>
                    <b>  <p className="text-center" style={{backgroundColor:"#FF51F3",color:"#eeeeee", borderRadius:"20px 20px 0px 0px", margin:"auto",paddingTop:10, fontSize:20}}>Stretching</p></b> 
                    <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>2</p>
                      <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                   </div>
                   </div>
                   <div className="col-md-2"  >
                       <div style={{margin:5, borderRadius:"20px", height:130, maxHeight:130, backgroundColor:"#720056"}}>
                    <b>  <p className="text-center" style={{backgroundColor:"blue",color:"#eeeeee", borderRadius:"20px 20px 0px 0px", margin:"auto",paddingTop:10, fontSize:20}}>Stretching</p></b> 
                    <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>3</p>
                      <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                   </div>
                   </div>
                   <div className="col-md-2"  >
                       <div style={{margin:5, borderRadius:"20px", height:130, maxHeight:130, backgroundColor:"#720056"}}>
                    <b>  <p className="text-center" style={{backgroundColor:"#51FFED",color:"#eeeeee", borderRadius:"20px 20px 0px 0px", margin:"auto",paddingTop:10, fontSize:20}}>Stretching</p></b> 
                    <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>4</p>
                      <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                   </div>
                   </div>
                   <div className="col-md-2"  >
                       <div style={{margin:5, borderRadius:"20px", height:130, maxHeight:130, backgroundColor:"#720056"}}>
                    <b>  <p className="text-center" style={{backgroundColor:"#FFAE51",color:"#eeeeee", borderRadius:"20px 20px 0px 0px", margin:"auto",paddingTop:10, fontSize:20}}>Stretching</p></b> 
                    <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>5</p>
                      <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                   </div>
                   </div>
                   <div className="col-md-2"  >
                       <div style={{margin:5, borderRadius:"20px", height:130, maxHeight:130, backgroundColor:"#720056"}}>
                    <b>  <p className="text-center" style={{backgroundColor:"green",color:"#eeeeee", borderRadius:"20px 20px 0px 0px", margin:"auto",paddingTop:10, fontSize:20}}>Stretching</p></b> 
                       <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", paddingTop:5, fontSize:40,}}>6</p>
                      <b> <p className="text-center" style={{backgroundColor:"#eeeeee",color:"#720056", fontSize:15,}}>Month</p></b>
                   </div>
                   </div>

                                     


                   <div className="card   mb-3" style={{maxWidth:"100%",marginTop:150}}>
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
                           <b>   <p className="card-title pt-5 pl-5" style={{color:"#720056"}}>&#8358;{this.state.shopping_credit}</p></b> 
                                   <b>    <p className="card-text pt-3 pl-5"  style={{color:"#720056"}}>&#8358;{this.state.shopping_credit}</p></b>
                                   <b>    <p className="card-text pt-3 pl-5"  style={{color:"#720056"}}>&#8358;{this.state.shopping_credit}</p></b>
                                   <b>     <p className="card-text pt-3 pl-5 pb-5"  style={{color:"#720056"}}>&#8358;{this.state.shopping_credit}</p></b> 
                           </div>
                           <div className="col-md-4">
                               <div className="card text-white  mb-3" style={{maxWidth: "18rem", height:"80%",backgroundColor:"#720056"}}>

                               <div className="card-body">
                               <b>   <p className="card-title text-center pt-5">Customize Down Payment</p></b> 
                               <form action="">
                               <div className="input-group mb-3 mt-4">
                         <div className="input-group-prepend">
                             <span className="input-group-text"style={{backgroundColor:"#eeeeee",color:"#720056"}} >&#8358;</span>
                         </div>
                         <input type="text" name="monthly_payment" className="form-control"/>
                     </div>

<button type="submit" class="btn btn-outline-surprise " style={{borderColor:"#eeeeee",color:"#eeeeee", marginTop:70,marginLeft:15,marginBottom:50, borderRadius:20,width:200,}}> <b> Update Breakdown </b> </button>


                               </form>
                               </div>
                               </div>
                               
                           </div>


                       </div>


                                   </div>
                               </div>
<button type="submit" class="btn btn-outline-surprise" style={{borderColor:"#FF005E",color:"#FF005E", marginTop:60,marginLeft:400,marginBottom:30, borderRadius:20,width:200,}}> <b> Continue </b> </button>





                   <div>
                      
                   </div>

                

                   
               </div>
     

</React.Fragment>
         );
    }
}
 
export default PaymentBreakDown;