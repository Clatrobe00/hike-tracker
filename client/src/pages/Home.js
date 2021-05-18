import React, { useState } from 'react';
import './Home.css'

const Home = () => {

    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
                <form className='hike-form'>
                    <h3>Enter a new hike!</h3>
                    <div className='form-item'>
                        <label for='trail' className='input-label'>Trail Name</label>
                        <input type='text' id='trail'></input>
                    </div>
                    <div className='form-item'>
                        <label for='distance' className='input-label'>Distance (Miles)</label>
                        <input type="number" id="distance" min="1" max="100"></input>
                    </div>
                    <div className='form-item'>
                        <input type="button" id="submit" value='submit'></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home;