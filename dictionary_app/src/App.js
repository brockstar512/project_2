import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"


function App() {
  //
  //
  // const key =`{023e133d-53db-4dad-94d5-5139255f9b6e}`
  // const dictionaryUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=${key}`
  //
  //
  //
  //https://developer.oxforddictionaries.com/admin/applications/1409619575533
  // const baseUrl =	`https://od-api.oxforddictionaries.com/api/v2`
  // const id =`d7c3808d`
  // const key =`21723442e8017fa22e2a58f1ac2f4c53`
  //https://od-api.oxforddictionaries.com/api/v2
  ///api/v2/entries/{source_lang}/{word_id}:

  // const [wordData, setWordData] = useState({});
  // // const [movieWord, setMovieTitle] = useState([]);
// useEffect(()=>{
//   console.log("use effect doing something- app")
//   const key =`{023e133d-53db-4dad-94d5-5139255f9b6e}`
//   const dictionaryUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=${key}`  
// const makeApiCall = async () => {
//     const res = await fetch(dictionaryUrl)
//     const json = await res.json()
//     console.log("here is the json during the fetch",json)
//     setWordData(json)
//   }
//   makeApiCall()
// },[])


  // const [skillset, setSkillset] = useState([]);

  // useEffect(() => {
  //   console.log("App - useEffect - [skillset]", skillset);
  //   const skillsetURL = "https://mhw-db.com/skills";
  //   const makeAPICall = async () => {
  //     const res = await fetch(skillsetURL);
  //     const json = await res.json();
  //     setSkillset(json);
  //   };
  //   makeAPICall();
  // }, []);




  // makeApiCall()
  // fetch(dictionaryUrl).then(function(res){
  //   return res.json()
  // }).then(function (obj) {
  //   console.log("here is what the fetch retrieved.",obj)
  // })
 


  // //WHY DOES THIS NOT WORK
  //   const key =`{023e133d-53db-4dad-94d5-5139255f9b6e}`
  //   const dictionaryUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=${key}`  
  // const makeApiCall = async () => {
  //     const res = await fetch(dictionaryUrl)
  //     const json = await res.json()
  //     console.log("here is the json during the fetch",json)
  //   }
  //   makeApiCall()
  //am i calling ^ wrong?
    //BUT THIS DOES
    const dictionaryUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=023e133d-53db-4dad-94d5-5139255f9b6e`  
    async function  makeApiCall(){
        const res = await fetch(dictionaryUrl)
        const json = await res.json()
        console.log("here is the json during the fetch",json)
      }
      makeApiCall()
  
  
 

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    
    </div>
  );
}

export default App;
