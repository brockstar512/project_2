import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import DictionaryList from "./DictionaryList"
import Definition from "./Definition"

function Main(){
    return (<div><h1>Here is Main and its components</h1>
    {/* <Switch> */}
    <DictionaryList />
    <Definition />
    {/* <Route exact path ="/" component ={DictionaryList} /> */}
    {/* <Route exact path ="/" component ={Definition} /> */}
    {/* </Switch> */}
    </div>
    )
}

export default Main