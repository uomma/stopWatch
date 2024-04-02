import React, { useState, useEffect, useRef } from "react"

function StopWatch() {


    const [isRunning, setIsRunnning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0)

    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
            console.log(intervalIdRef.current)
        }

        return()=>{
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start() {
        setIsRunnning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        console.log(startTimeRef.current)
    }

    function stop() {
        setIsRunnning(false)
    }

    function reset() {
        setElapsedTime(0);
        setIsRunnning(false);
    }

    function formatTime() {

        let hours = Math.floor(elapsedTime/ (1000*60*60))
        let min = Math.floor(elapsedTime/ (1000*60)%60)
        let seconds = Math.floor(elapsedTime/ (1000)%60)
        let milliseconds = Math.floor((elapsedTime % 1000) /10)

        hours = String(hours).padStart(2, "0")
        min = String(min).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")



        return `${hours}:${min}:${seconds}:${milliseconds}`
    }

    return (
        <>
            <div className="stop-watch">
                <div className="display">{formatTime()}</div>
                <div className="controls">
                    <button className="start-button" onClick={start}>start</button>
                    <button className="stop-button" onClick={stop}>stop</button>
                    <button className="reset-button" onClick={reset}>reset</button>
                </div>
            </div>
        </>
    );

}

export default StopWatch