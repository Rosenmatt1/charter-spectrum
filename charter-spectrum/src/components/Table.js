import React from "react";
import styles from '../styles.css';


const Table = (data) => {
    console.log("data!", data)
    return (
        <div>
            <table class="gridtable" >
                {data.data.map((restuarant, index) => (
                    <tr>
                        <th>{restuarant.name}</th><th>{restuarant.city}</th><th>{restuarant.name}</th>
                    </tr>
                ))}
            </table >
        </div>
    )
};


export default Table;