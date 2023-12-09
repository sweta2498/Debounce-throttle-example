import React from 'react'

const Debounce_Simple = () => {
    let count=0;

    function getData(E) {
        console.log("Fetching data ",count++,"..!!");
    }
    function MyDebounce(call, d) {
        let timer;
        return function () {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                call();
            }, d)
        }
    }
    const betterfunction = MyDebounce(getData, 2000);

    return (
        <div>
            <h3>DeBouncing</h3>
            <input type='text' onChange={betterfunction}  />
        </div>
    )
}

export default Debounce_Simple