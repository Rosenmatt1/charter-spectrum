import React, { useState, useEffect } from "react";
import styles from '../styles.css';
import StatesSelect from './StatesSelect';


const Table = (data) => {
    const [activePage, setActivePage] = useState(1)
    const [search, setSearch] = useState("")
    const [genre, sortGenre] = useState(false)
    const [state, sortState] = useState(false)

    var receivedData = data.data.sort((a, b) => a.name.localeCompare(b.name)) || null


    const filteredSearch = receivedData.filter(restuarant => {
        if (restuarant.name.includes(search)) {
            return restuarant 
        }
    })

     const sortByGenre = () => {
        sortGenre(true)

        if (genre) {
            receivedData = data.data.sort((a, b) => a.genre.localeCompare(b.genre))
            console.log(receivedData)
        }
    }


    const trackPage = (e, val) => {
        e.preventDefault()
        // console.log(e)
        //target is coming through null
        setActivePage(val)
        console.log("activepage", activePage)
    }

    // useEffect(() => {

    // }, []);

    // this.setState({
    //     email: e.target.value
    //   }, () => {
    //     if (this.state.email.length > 0) {
    //       this.setState({
    //         emailActive: true
    //       })
    //     } else {
    //       this.setState({
    //         emailActive: false
    //       })
    //     }
    //   })

    console.log("search", search.length)
    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)} />
            <table className="gridtable" >
                <tr>
                    <th className="nameFilter"><i className="fas fa-filter"></i></th>
                    <th className="cityFilter"><i className="fas fa-filter"></i></th>
                    <th className="State Filter"><StatesSelect/></th>
                    <th className="phoneFilter"><i className="fas fa-filter"></i></th>
                    <th className="genreFilter" onClick={() => sortByGenre()}><i className="fas fa-filter"></i></th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Phone</th>
                    <th>Genre</th>
                </tr>

                {search.length > 0
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


                {/* {receivedData.map((restuarant, idx) => (
                  <tr key={idx}>
                        <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                    </tr>
                ))}          */}

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


export default Table;