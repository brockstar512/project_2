import React, {useContext} from 'react';
import './App.css';
// import {DataRequest} from "./App"
import ReactDOM from 'react-dom';

function Definition (props){
   
  
    if(!props.wordData[0]){
        // console.log("props.wordData[0].shortdef =",props.wordData[0].shortdef[0]) 
        return <></>
    }//THIS CHUNK OF CODE IS REALLY IMPORTANT.
    //IF THIS IS UNDEFINED LOAD NOTHING ELSE LOAD WHAT I WANT
    const wordDefinition = props.wordData[0].shortdef.map( (word,index) => {
        // console.log("this is word", word)
        if(index<=2){
        return <ul key ={index}>
            
            <li>{`Definition ${index+1}: ${word}`}</li>
            </ul>
        }
        else{
            return <></>
        }
    })
    // console.log("here is what we are defining in definition", props.wordData)
    // console.log("props.wordData[0] =",props.wordData[0] )
    // // console.log("dfgkdfj", wordDefinition)
    // console.log("props.wordData[0].shortdef =",props.wordData[0].shortdef[0])
    return <>
    <div>
        <h1>Definition of {props.wordData[0].hwi.hw}</h1>
        <div className ="def">{wordDefinition}</div>
    </div>

   
    </>
}
export default Definition