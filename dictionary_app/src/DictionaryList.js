import React, {useContext, useState} from 'react';
import {Submit} from "./App"
// import ReactDOM from 'react-dom';

function DictionaryList (){
const submit =useContext(Submit)

const [wordQ, setSearchReset] = useState("");

const handleChange = e => {
    const searching = e.target.value;
    setSearchReset(searching);
  };

const [wordQ, setWordQ] = useState("");

const handleSubmit = e => {
    e.preventDefault();
    submit(wordQ)
    setWordQ("")
}
    return <h1>Here is dictionary List</h1>
}
export default DictionaryList