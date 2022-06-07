import React, { useEffect, useState } from 'react';
function LifeCycleFunc(props) {
    const [time, setTime] = useState(new Date())

    const tick = () => {
        setTime(new Date());
    }
    useEffect (() =>{
        // componentDidMount, componentDidUpdate
         setImmediate(() => tick() ,1000);

        // componentWillUnmount
        return() => {
            clearInterval (timeI)
        }
    },[time])
    return (
        <div>
            <p>{time.toLocaleTimeString}</p>
        </div>
    );
}

export default LifeCycleFunc;