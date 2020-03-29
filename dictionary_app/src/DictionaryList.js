import React, {useContext} from 'react';
import {TopicList} from "./App"
// import ReactDOM from 'react-dom';

function DictionaryList (){

const topicList = useContext(TopicList)
console.log("dictionaryList grabbing from context= ", topicList)

    return <h1>Here is dictionary List</h1>
}
export default DictionaryList