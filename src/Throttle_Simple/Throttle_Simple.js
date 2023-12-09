import React, { useState } from 'react'

const Throttle_Simple = () => {

    const [disable, setDisable] = useState(false);
    let count=0;

    const mythrottle = (fn, d) => {
        return function () {
            setDisable(true)
            setTimeout(() => {
                fn();
            }, d)
        }
    }

    const newFun = mythrottle(() => {
        setDisable(false)
        console.log("User Clicked.!!",count++);
    }, 2000)

    return (
        <div>
            <h3>throttle </h3>
            <button onClick={newFun}>Click</button><br/><br/>
            <button disabled={disable} onClick={newFun}>
                Click to Disable!
            </button>
        </div>
    )
}

export default Throttle_Simple