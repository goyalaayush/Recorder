import React, { useState } from 'react'
import {ReactMediaRecorder} from 'react-media-recorder';
import Webcam from 'react-webcam';
import { useRef } from 'react';
const Home = () => {

  const save=async(url)=>{
    
  const response=await fetch('http://localhost:4000/recording',{

    method:'POST',
    body:JSON.stringify({url}),
    headers:{'Content-Type':'application/json'},
    credentials:'include',
    })

    if(response.ok)
    alert('Recording Saved')
  else alert('Error');

    
}

    const webcamRef=useRef(null);
    
  return (
    <div>

      <Webcam height={350} width={350} ref={webcamRef}></Webcam>

      <ReactMediaRecorder

      screen

      render={({status,startRecording,stopRecording,mediaBlobUrl})=>(

        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start</button>
          <button onClick={()=>{ stopRecording();}}>Stop</button>
         <button onClick={()=>save(mediaBlobUrl)}>Save</button>
          <p>{mediaBlobUrl}</p>
          </div>
      )}

></ReactMediaRecorder>
    </div>
  )
}

export default Home
