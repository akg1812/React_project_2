import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./App.css"

import ShowID from './ShowID/ShowID';
import ShowEmail from './ShowEmail/ShowEmail';
import ShowName from './ShowName/ShowName';

const App = () => {

  const [details, setDetails] = useState(null);
  const [emailFlag, setEmailFlag] = useState(false);
  const [nameFlag, setNameFlag] = useState(false);

  const fetchURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function fetchData() {
      const result = await axios(fetchURL);
      setDetails(result.data);
    }
    fetchData();
  }, [])


  const handleNameClick = () => {
    setNameFlag(true);
    setEmailFlag(false);
  }


  const handleEmailClick = () => {
    setNameFlag(false);
    setEmailFlag(true);
  }

  return (
    <div id="app-container">
      <h1>
          ----    Welcome User    ----
      </h1>

      <div id="button-container">
          <button onClick = {handleNameClick}> Name</button>
        <button onClick = {handleEmailClick}> Email</button>
      </div>
     
      <ShowID details = {details}  />
      {nameFlag && <ShowName details = {details}/>}
      {emailFlag && <ShowEmail details = {details} />}
               
    </div>

    
  )
}

export default App;