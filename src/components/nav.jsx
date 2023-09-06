
import React from "react";
import { Link } from "react-router-dom";
 

function nav(){
    
    return(
        
        <nav>
            <Link to='/sobre' > sobre </Link>
            <Link to='/ajuda' > ajuda </Link>
            <Link to='/duvidas' > duvidas </Link>
            <Link to='/entrar' > entrar </Link>
            <Link to='/rm' > rm </Link>
        </nav>

    )
}
export default nav