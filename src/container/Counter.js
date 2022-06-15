import React, {useState} from 'react';

function Counter(props) {
    const [counter, setCounter] = useState(0);

    const incr = () =>{
        setCounter(count => count < 10 ? count + 1 : count)
    }
    const decr = () =>{
        setCounter(count => count > 0 ? count - 1 : count)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={incr}>+</button>
            <button onClick={decr}>-</button>
        </div>
    );
}

export default Counter;