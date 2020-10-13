import React, { useState } from "react";
import styles from '../styles.css';


const Table = (data) => {
    const [activePage, setActivePage] = useState(1)
    const [search, setSearch] = useState("")


    const trackPage = (e) => {
        setActivePage(e.target.value)
        console.log("activepage", activePage)
        console.log("search", search)
    }

    console.log("data!", data)
    console.log("search", search)
    return (
        <div>
            <table class="gridtable" >
                <input onChange={(e) => setSearch(e.target.value)}/>
                <tr>
                    <th className="nameFilter"><i class="fas fa-filter"></i></th>
                    <th className="cityFilter"><i class="fas fa-filter"></i></th>
                    <th className="State Filter"><i class="fas fa-filter"></i></th>
                    <th className="phoneFilter"><i class="fas fa-filter"></i></th>
                    <th className="genreFilter"><i class="fas fa-filter"></i></th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Phone</th>
                    <th>Genre</th>
                </tr>

                {data.data.map((restuarant, idx) => (
                    <tr idx={idx}>
                        <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.state}</th><th>{restuarant.telephone}</th><th>{restuarant.genre}</th>
                    </tr>
                ))}

            </table >

            <div class="pagination" onClick={(e) => trackPage(e)} >
                <a href="#">&laquo;</a>
                <a href="#" value={1} >1</a>
                <a class="active" value={2} href="#">2</a>
                <a href="#" value={3}>3</a>
                <a href="#" value={4}>4</a>
                <a href="#" value={5}>5</a>
                <a href="#" value={6}>6</a>
                <a href="#" >&raquo;</a>
            </div>

        </div>
    )
};


export default Table;