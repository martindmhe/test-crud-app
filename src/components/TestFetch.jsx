import { useState, useEffect } from "react";
import '../index.css'

const TestFetch = () => {

    const [ fetchedData, setFetchedData ] = useState();
    const [ postBody, setPostBody] = useState("");

    return ( 
        <div>
            <div className="rest-container">
                <div className="get">
                    <button onClick={ async () => {
                    await fetch('http://localhost:3000/')}
                    }>
                    GET REQUEST
                    </button>
                </div>
                <div className="post">
                    <button onClick={ async () => {
                    await fetch('http://localhost:3000/post', {
                        method : 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                        body: JSON.stringify({
                            "text" : postBody
                        })
                    })
                    }}>POST</button>
                    <input type="text" onChange={e => {
                        setPostBody(e.target.value)
                    }} />
                </div>
            </div>
            
            
            
        </div>
     );
}
 
export default TestFetch;