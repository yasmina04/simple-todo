import React, { useState } from 'react';
import './indeks.css';
import { useHistory } from 'react-router-dom';

const Index = () => {
  let time = new Date().toLocaleTimeString();
  const [Ctime, setCtime] = useState(time);
  const history = useHistory()
  const handleClick = () => history.push('./buattodo')
  

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  
  
  setInterval(updateTime, 1000);
  return (
    <>
      <h1
       style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color:'white',
        height: '40vh'
      }}
      ><span className='time'>{time}</span></h1>

      <h2
       style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
        color:'white'
      }}
      ><button className='tombol' onClick={handleClick}  >Make Your To Do</button></h2>
    </>
  );
};

export default Index;
