import React from 'react';
import { Link } from "react-router-dom";

function Header(){
    return <div className="header">
    <span>Dictionary App</span>
    <Link to ="/">Go to Search</Link>
    </div>
}
export default Header