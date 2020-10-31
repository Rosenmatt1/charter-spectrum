import React, { useState } from "react";
import { connect } from 'react-redux';
import { chosenGenre } from '../redux/actions';


const GenreSelect = (props) => {


const captureGenreSelected = (e) => {
    props.chosenGenre(e.target.value)
}

    return (
        <div>
            <select name="state" id="state" onChange={(e) => captureGenreSelected(e)} >
                <option value="" defaultValue>Select a Genre</option>
                {props.data.map(genre => {
                     return <option key={genre} value={genre}>{genre}</option>
                })}
            </select>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
      ...state
    }
  }


export default connect(mapStateToProps, { chosenGenre })(GenreSelect)