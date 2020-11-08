import React, { useState, useEffect } from "react";
import styles from '../styles.css';
import StatesSelect from './StatesSelect';
import NoStateDisplay from './NoStateDisplay';
import { connect } from 'react-redux';
import GenreSelect from "./GenreSelect";
import Pagination from "./Pagination";


const Table = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [postsPerPage] = useState(10)
    const [search, setSearch] = useState("")
    const data = props.data
    let receivedData = data.sort((a, b) => a.name.localeCompare(b.name)) || null


    const logic = receivedData.filter(restuarant => {
        if (props.chosenState.length > 0 || props.chosenGenre.length > 0 || search.length > 0) {
            if ((restuarant.state === props.chosenState) && (restuarant.genre.includes(props.chosenGenre)) && (restuarant.name.toLowerCase().includes(search.toLowerCase()) || restuarant.city.toLowerCase().includes(search.toLowerCase()) || restuarant.genre.toLowerCase().split(',').includes(search.toLowerCase()))) {
                return restuarant
            }
        }
    })


    const filteredState = receivedData.filter(restuarant => {
        if (restuarant.state === props.chosenState) {
            return restuarant
        }
    })


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
    const currentPosts = receivedData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)} />
            {/* <button onClick={() => searchSubmit()}>Button</button> */}
            <table className="gridtable" >
                <tbody>
                    <tr>
                        <th className="nameFilter"><i className="fas fa-filter"></i></th>
                        <th className="cityFilter"><i className="fas fa-filter"></i></th>
                        <th className="State Filter"><StatesSelect /></th>
                        <th className="phoneFilter"><i className="fas fa-filter"></i></th>
                        <th className="genreFilter"><GenreSelect data={genresFiltered} /></th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Phone</th>
                        <th>Genre</th>
                    </tr>

                    {logic.length > 0
                        ?
                        logic.map((restuarant, idx) => (
                            <tr key={idx}>
                                <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                            </tr>
                        ))
                        :
                        (props.chosenState.length > 0 && filteredState.length === 0)
                            ?
                            <NoStateDisplay />
                            :
                            currentPosts.map((restuarant, idx) => (
                                <tr key={idx}>
                                    <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                                </tr>
                            ))
                    }

                    {/* {(props.chosenState.length > 0 && filteredState.length === 0) && <NoStateDisplay />} */}

                </tbody>
            </table >

           <Pagination postsPerPage={postsPerPage} totalPosts={receivedData.length} paginate={paginate}/>

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