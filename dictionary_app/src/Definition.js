import React, {useContext} from 'react';
import './App.css';
import {DataRequest} from "./App"
import ReactDOM from 'react-dom';

function Definition (){
    const dataRequest = useContext(DataRequest)
    console.log(" Definition - here is what context is pulling in",dataRequest)
    /*<h1></h1> */
    return <><h1>Here is Definition</h1>
    <h1></h1>
    </>
}
export default Definition