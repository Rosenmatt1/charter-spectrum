import React, { useState, useEffect } from "react";
import Table from './components/Table';
import styles from './styles.css';


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
        <div id="root" className="center">
            <Table data={fetchedData} />
        </div>
    )
};


export default App;
