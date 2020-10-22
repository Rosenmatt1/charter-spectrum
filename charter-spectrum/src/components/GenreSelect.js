import React, { useState } from "react";
import { connect } from 'react-redux';
import { chosenState } from '../redux/actions';


const GenreSelect = (props) => {

const captureGenreSelected = (e) => {
    props.chosenState(e.target.value)
}

    return (
        <div>
            <select name="state" id="state" onChange={(e) => captureGenreSelected(e)} >
                <option value="" selected="selected">Select a State</option>
                <option  eventKey="AL" value="AL"></option>
                <option value="AK">American</option>
                <option value="AZ">Seafood</option>
                <option value="AR">International</option>
                <option value="CA">Asian</option>
                
                
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