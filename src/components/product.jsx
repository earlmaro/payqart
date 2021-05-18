import React, { Component } from 'react';
import moreshirt from '../shirt.jpg';




class Product extends Component {
    
    state = { 
     }

    render() { 
        return (
<React.Fragment>

  <div className="row ">
    <div class="col-md-4">
<img src={moreshirt} style={{height:150, paddingTop:10,marginTop:20,paddingBottom:10,paddingLeft:10,}} alt=""/>
    </div>
    <div class="col-md-8" style={{ paddingTop:30,paddingLeft:20}}>
      One of three columns
    </div>
    
  </div>


</React.Fragment>

        );
    }
}
 
export default Product;