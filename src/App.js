import React from "react";
import {Browser as Router, Route,Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Default from "./components/defaultPage";
import "bulma/css/bulma.min.css";
// import {Link} from "react-router-dom";




const App = () => {
    return  (
        <div >
            <Default/>
     </div>

    )
}
export default App;