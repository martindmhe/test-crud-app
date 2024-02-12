import { useState, useEffect } from "react";

const TestFetch = () => {

    const [ fetchedData, setFetchedData ] = useState();

    return ( 
        <div>
            <button onClick={ async () => {
                await fetch('http://localhost:3000/')}
             }>
                GET REQUEST
            </button>
            
        </div>
     );
}
 
export default TestFetch;