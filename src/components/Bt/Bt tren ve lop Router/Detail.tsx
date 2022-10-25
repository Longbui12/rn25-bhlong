import React, { useState, useEffect } from 'react';

function Detail() {
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };
        fetch('https://63529107a9f3f34c3741b515.mockapi.io/API/v1/users', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">POST Request with React Hooks</h5>
            <div className="card-body">
                Returned Id: {postId}
            </div>
        </div>
    );
}

export default Detail;

