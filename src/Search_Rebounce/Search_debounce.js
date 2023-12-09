import React, { useCallback, useState } from 'react'

const Search_debounce = () => {

    const [Search, setSearch] = useState("")

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 2000);
        }
    }

    async function handlechange (event) {
        const { value } = event.target;
        let result = await fetch(`https://62983daaf2decf5bb73ddb37.mockapi.io/SearchData?search=` + value);
        result = await result.json();
        console.log("search===", result);
        setSearch(result)
    }

    const optimisedVersion = useCallback(debounce(handlechange), [])

    return (
        <div><h3>Debounce Search </h3>
            <input type="text" name='search' placeholder='Enter Sopmthing....'
                onChange={optimisedVersion} />
            {
                Search?.length > 0 && 
                <div>
                    {
                        Search?.map((el, i) => 
                            
                            <h1>{el.name}</h1>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Search_debounce