import React, { useState, useEffect } from "react";
import styles from '../styles.css';
import StatesSelect from './StatesSelect';
import NoResultsDisplay from './NoResultsDisplay';
import jsonData from './jsonData';
import { connect } from 'react-redux';
import GenreSelect from "./GenreSelect";
import Pagination from "./Pagination";


const Table = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    // const [loading, setLoading] = useState(false);
    const [postsPerPage] = useState(10);
    const [search, setSearch] = useState(null);
    // const data = props.data;
    const data = jsonData;    //importing from file in case lose accesss to API
    let receivedData = data.sort((a, b) => a.name.localeCompare(b.name)) || null;


    const logic = receivedData.filter(restuarant => {
        let searchActivated = true
        let genreActivated = true
        let stateActivated = true

        if (search) {
            searchActivated = (restuarant.name.toLowerCase().includes(search.toLowerCase()) || restuarant.city.toLowerCase().includes(search.toLowerCase()) || restuarant.genre.toLowerCase().split(',').includes(search.toLowerCase()))
        }

        if (props.chosenGenre.length > 0) {
            genreActivated = restuarant.genre.includes(props.chosenGenre)
        }

        if (props.chosenState.length > 0) {
            stateActivated = restuarant.state === props.chosenState
        }

        if (searchActivated && stateActivated && genreActivated) return restuarant
    })


    // const filteredState = receivedData.filter(restuarant => {
    //     if (restuarant.state === props.chosenState) {
    //         return restuarant
    //     }
    // })


    let genresFiltered = []

    const filteredGenre = receivedData.map(restaurant => {
        let genresSplit = []
        genresSplit = restaurant.genre.split(',')

        genresSplit.map(genre => {
            if (!genresFiltered.includes(genre)) {
                genresFiltered.push(genre)
            }
        })
    })


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = logic.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)} placeholder="search by city, state, or genre" />
            {/* <button onClick={() => searchSubmit()}>Button</button> */}

            <table className="gridtable" >
                <tbody>
                    <tr className="tableHead">
                        <th className="nameFilter"> Name </th>
                        <th className="cityFilter"> City </th>
                        <th className="stateFilter"> <StatesSelect /></th>
                        <th className="phoneFilter"> Phone </th>
                        <th className="genreFilter"> <GenreSelect data={genresFiltered} /> </th>
                    </tr>

                    {currentPosts.map((restuarant, idx) => (
                        <tr key={idx}>
                            <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                        </tr>
                    ))}

                </tbody>
            </table >

            {(props.chosenState.length > 0 && logic.length === 0) && <NoResultsDisplay />}

            <Pagination postsPerPage={postsPerPage} currentPage={currentPage} logic={logic} totalPosts={receivedData.length} paginate={paginate} />
        </div >
    )
};


const mapStateToProps = (state) => {
    console.log("STATE!!!", state)
    return {
        ...state,
    }
}


export default connect(mapStateToProps)(Table);