import React, { useCallback, useEffect, useState } from 'react'
import { debounce } from "lodash";

const Lodash_Debounce = () => {

    const [userQuery, setUserQuery] = useState("")
    const sendQuery = query => console.log(`Enter Text.. ${query}`);

async function updateQuery () {
    // const { value } = event.target;
    sendQuery(userQuery)
};

const delayedQuery = useCallback(debounce(updateQuery, 2000), [userQuery]);

const onChange = e => {
   setUserQuery(e.target.value);
};

useEffect(() => {
   delayedQuery();
   return delayedQuery.cancel;
}, [userQuery, delayedQuery]);

  return (
    <div><h3>lodash to Debounce With Function Component</h3>
        <input onChange={onChange} value={userQuery} />
        </div>
  )
}

export default Lodash_Debounce