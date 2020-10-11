import React, { useState, useEffect } from "react";
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Loading from './Loading';
import Error from './Error';


const App = () => {
    const [searchResults, setSearchResults] = useState([])

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
                setSearchResults(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []); 

    // const checkData = (data) => {
    //     console.log(data)
    // }


    return (
        <div id="root">
            {/* <Query query={GET_RESTAURANTS}  >
                {({ data, loading, error }) => {
                    if (loading) return <Loading />
                    if (error) return <Error error={error} />
                    // const tracks = searchResults.length > 0 ? searchResults : data.tracks

                    // refetchQueries={() => [{ query: GET_TRACKS_QUERY }]} 

                    return checkData(data)
                }}
            </Query> */}

            {searchResults.map((restuarant, index) => (
               <p> {restuarant.name} </p>
            ))}

        </div>
    )
};


export const GET_RESTAURANTS = gql`
    {
        restaurants {
            id 
            name
            city
            state
            zip
        }
    }
`


export default App;
