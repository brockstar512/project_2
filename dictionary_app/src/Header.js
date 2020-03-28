import React from 'react';
import { Link } from "react-router-dom";

function Header(){
    return <>
    <h1>Here is the header</h1>
    <div><Link to ="/">Dictionary</Link></div>
    </>
}
export default Header