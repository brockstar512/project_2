import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import DictionaryList from "./DictionaryList"
import Definition from "./Definition"

function Main(props){
    console.log("here is what props is passing in Main", props.wordData)
    return (<div><h1>Here is Main and its components</h1>
    <Switch>
    {/* <DictionaryList />
    <Definition wordData={props.wordData}/> */}
     <Route exact path ="/" component ={DictionaryList} />
     <Route 
        path ="/definition/:name" 
        component ={Definition} 
     />
     <Route 
        path ="/definition/" 
        component ={Definition} 
     />
    </Switch>
    </div>
    )
}

export default Main

//I TRIES SENDING THE WORD DATA AS CONTEXT AND IT GOT A FUNCTION OF OBJECT
// ASK ABOUT LATRE IF
//DOES COST TOKEN