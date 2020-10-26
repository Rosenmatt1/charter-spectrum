import React, { useState, useEffect } from "react";
import styles from '../styles.css';
import StatesSelect from './StatesSelect';
import NoStateDisplay from './NoStateDisplay';
import { connect } from 'react-redux';
import GenreSelect from "./GenreSelect";


const Table = (props) => {
    const [activePage, setActivePage] = useState(1)
    const [search, setSearch] = useState("")
    // const [genre, sortGenre] = useState(false)
    // const [selectedState, setSelectedState] = useState("")
    const data = props.data
    let receivedData = data.sort((a, b) => a.name.localeCompare(b.name)) || null


    const filteredSearch = receivedData.filter(restuarant => {
        let genreArr = []
        let genre = []

        genreArr.push(restuarant.genre)
        genre = genreArr.join().split(',').includes(search)

        if (restuarant.name.includes(search) || restuarant.city.includes(search) || genreArr.join().split(',').includes(search)) {
            return restuarant
        }
    })

    // const searchSubmit = () => {
    //     console.log("Button Pressed")
    //     filteredSearch = receivedData.filter(restuarant => {
    //         if (restuarant.name.includes(search)) {
    //             return restuarant
    //         }
    //     })
    //     console.log("filteredSearch", filteredSearch)
    // }


    const filteredState = receivedData.filter(restuarant => {
        if (restuarant.state === props.chosenState) {
            return restuarant
        }
    })


    let genresArray = []
    let genresFiltered = []

    const filteredGenre = receivedData.map(restaurant => {
        let genresSplit = []

        genresArray.push(restaurant.genre)
        genresSplit = genresArray.join().split(',')

        genresSplit.map(genre => {
            if (!genresFiltered.includes(genre)) {
                genresFiltered.push(genre)
            }
        })
    })


    const genreMatch = receivedData.filter(restaurant => {
        let genreArr = []
        let genre = []

        genreArr.push(restaurant.genre)
        genre = genreArr.join().split(',')

        if (genre.includes(props.chosenGenre)) {
            return restaurant
        }
    })


    const trackPage = (e, val) => {
        e.preventDefault()
        setActivePage(val)
        console.log("activepage", activePage)
    }


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

                    {filteredSearch.length > 0
                        ?
                        filteredSearch.map((restuarant, idx) => (
                            <tr key={idx}>
                                <th> {restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                            </tr>))
                        :
                        receivedData.map((restuarant, idx) => (
                            <tr key={idx}>
                                <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                            </tr>))
                    }


                    {/* {genreMatch.length > 0
                        ?
                        genreMatch.map((restuarant, idx) => (
                            <tr key={idx}>
                                <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                            </tr>
                        ))
                        :
                        receivedData.map((restuarant, idx) => (
                            <tr key={idx}>
                                <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                            </tr>
                        ))
                    } */}


                    {/* {props.chosenState.length > 0
                        ?
                        filteredState.map((restuarant, idx) => {
                            return (
                                <tr key={idx}>
                                    <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                                </tr>
                            )
                        })

                        :
                        receivedData.map((restuarant, idx) => (
                            <tr key={idx}>
                                <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                            </tr>))
                    } */}

                    {(props.chosenState.length > 0 && filteredState.length === 0) && <NoStateDisplay />}


                         {/* {receivedData.map((restuarant, idx) => (
                  <tr key={idx}>
                        <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                    </tr>
                ))}          */}

                </tbody>
            </table >


            <div class="pagination"  >
                <a href="#">&laquo;</a>
                <a href="#" onClick={(e) => trackPage(e, 1)} value={1} >1</a>
                <a class="active" onClick={(e) => trackPage(e, 2)} value={2} href="#">2</a>
                <a href="#" onClick={(e) => trackPage(e, 3)} value={3}>3</a>
                <a href="#" onClick={(e) => trackPage(e, 4)} value={4}>4</a>
                <a href="#" onClick={(e) => trackPage(e, 5)} value={5}>5</a>
                <a href="#" onClick={(e) => trackPage(e, 6)} value={6}>6</a>
                <a href="#" >&raquo;</a>
            </div>

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