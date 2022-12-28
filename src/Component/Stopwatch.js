import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [miliSecond, setMiliSecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const[timer,setTimer]=useState("");

  useEffect(()=>{
     let timer=null;
     if(start&!stop){
        timer=setInterval(()=>{
            setSecond(second=>second+1)
        },1000)
     }else if(stop){
        clearInterval(timer)
     }
     return()=>(
clearInterval(timer)
     )
  },[start,stop])


  useEffect(()=>{
    const date=new Date(0);
    date.setSeconds(second);
    setTimer(date.toISOString().slice(11,19))
  },[second])


  const handleStart=()=>{
    setStart(true);
    setStop(false);
  }
  const handleStop=()=>{
    setStart(start=>!start);
    setStop(stop=>!stop);
  }
  const handleReset=()=>{
    setSecond(0);
    setStart(false);
    setStop(false);
  }

  return (
    <div className="container">
      <h1>StopWatch</h1>
      {/* <p>{second}</p> */}
      <p>{timer}</p>
      <button onClick={handleStart} className="start">Start  </button>
      <button onClick={handleStop} className="stop">Stop </button>
      <button onClick={handleReset} className="reset">Reset</button>
    </div>
  );
};

export default Stopwatch;
