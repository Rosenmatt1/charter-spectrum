import React, { useState } from "react";
import { connect } from 'react-redux';
import { chosenState } from '../redux/actions';


const GenreSelect = (props) => {

const captureGenreSelected = (e) => {
    props.chosenState(e.target.value)
}

console.log(props)

    return (
        <div>
            <select name="state" id="state" onChange={(e) => captureGenreSelected(e)} >
                <option value="" selected="selected">Select a Genre</option>
                {props.data.map(genre => {
                     return <option value={genre}>{genre}</option>
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


export default connect(mapStateToProps, { chosenState })(GenreSelect)