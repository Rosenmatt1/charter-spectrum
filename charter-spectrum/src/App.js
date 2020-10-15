import React, { useState, useEffect } from "react";

import Loading from './Loading';
import Error from './Error';
import Table from './components/Table';


const App = () => {
    const [fetchedData, setfetchedData] = useState([])

    useEffect(() => {
        fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants/', {
            //   method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Api-Key q3MNxtfep8Gt'
            },
        })
            .then(response => response.json())
            .then(data => {
                // console.log('Success:', data);
                setfetchedData(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);


    return (
        <div id="root">

            <Table data={fetchedData} />

        </div>
    )
};


export default App;
