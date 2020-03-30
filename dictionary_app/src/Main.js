import React from 'react';
import './App.css';
import { Route, Switch, Redirect, link } from "react-router-dom";
import DictionaryList from "./DictionaryList"
import Definition from "./Definition"

function Main(props){
    console.log("here is what props is passing in Main", props.wordData)
    return (<div><h1>Here is Main and its components</h1>
    {/* <Switch>
    
     <Route exact path ="/" component ={DictionaryList} />
     <Route 
        path ="/definition" 
        component ={Definition} 
        render={props => <Definition wordData={props.wordData}{...props}/>}
     />
      <Redirect to="/" />
    </Switch> */}
     {/* <Route 
        path ="/definition/" 
        component ={Definition} 
     /> */}
     <DictionaryList />
    <Definition wordData={props.wordData}/>
    
    </div>
    )
}

export default Main

//I TRIES SENDING THE WORD DATA AS CONTEXT AND IT GOT A FUNCTION OF OBJECT
// ASK ABOUT LATRE IF
//DOES COST TOKEN