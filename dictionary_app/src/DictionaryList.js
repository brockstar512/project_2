import React, {useContext, useState} from 'react';
import {Submit} from "./App"
// import ReactDOM from 'react-dom';

function DictionaryList (){
const submit =useContext(Submit)
console.log("here the ocntext var is on list ",submit)
const [wordQ, setSearchReset] = useState("");

const handleChange = e => {
    const searching = e.target.value;
    setSearchReset(searching);
  };



const handleSubmit = e => {
    e.preventDefault();
    submit(wordQ)
    setSearchReset("")
}
    return <><h1>Here is dictionary List</h1>
    <form onSubmit = {handleSubmit}>
    <label> Search for you word here</label>
    <input
    id="wordQ"
    type="text"
    value={wordQ}
    onChange={handleChange}
    placeholder="Search for word"
    />
    <input type ="submit" value ="Define"/>
    </form>
    </>
}
export default DictionaryList