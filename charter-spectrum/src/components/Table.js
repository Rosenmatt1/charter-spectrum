import React, { useState } from "react";
import styles from '../styles.css';


const Table = (data) => {
    const [activePage, setActivePage] = useState(1)

    const trackPage = (e) => {
        setActivePage(e.target.value)
        console.log(activePage)
    }

    console.log("data!", data)
    return (
        <div>
            <table class="gridtable" >
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                {data.data.map((restuarant, index) => (
                    <tr>
                        <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.name}</th>
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