import React, { useState, useEffect } from "react";
import styles from '../styles.css';
import StatesSelect from './StatesSelect';
import NoStateDisplay from './NoStateDisplay';
import { connect } from 'react-redux';
import GenreSelect from "./GenreSelect";


const Table = (props) => {
    console.log(props)
    const [activePage, setActivePage] = useState(1)
    const [search, setSearch] = useState("")
    const data = props.data
    let receivedData = data.sort((a, b) => a.name.localeCompare(b.name)) || null


    const filteredSearch = receivedData.filter(restuarant => {
        if (restuarant.name.includes(search) || restuarant.city.includes(search) || restuarant.genre.split(',').includes(search)) {
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


    const genreMatch = receivedData.filter(restaurant => {
        if (restaurant.genre.includes(props.chosenGenre)) {
            return restaurant
        }
    })


    const trackPage = (e, val) => {
        e.preventDefault()
        setActivePage(val)
        console.log("activepage", activePage)
    }

    console.log("logic", logic)

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
                        receivedData.map((restuarant, idx) => (
                            <tr key={idx}>
                                <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                            </tr>
                        ))
                    }


                    {/* {filteredSearch.length > 0
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
                    } */}


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

                </tbody>
            </table >

            <div className="pagination"  >
                <a href="#">&laquo;</a>
                <a href="#" onClick={(e) => trackPage(e, 1)} value={1} >1</a>
                <a className="active" onClick={(e) => trackPage(e, 2)} value={2} href="#">2</a>
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