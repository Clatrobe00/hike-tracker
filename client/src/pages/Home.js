import React, { useState } from 'react';
import './Home.css'

const Home = () => {

    const [trailInfo, setTrailInfo] = useState({
        trail: '',
        distance: ''
    });

    const handleChange = (e) => {
        console.log(e.target.value)
        setTrailInfo({ ...trailInfo, [e.target.id]: e.target.value })
    }

    const handleSubmit = () => {
        console.log(trailInfo);
    }

    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
                <form className='hike-form'>
                    <h3>Enter a new hike!</h3>
                    <div className='form-item'>
                        <label className='input-label'>Trail Name</label>
                        <input type='text' id='trail' value={trailInfo.trail} onChange={handleChange}></input>
                    </div>
                    <div className='form-item'>
                        <label className='input-label'>Distance (Miles)</label>
                        <input type="number" id="distance" min="1" max="100" value={trailInfo.distance} onChange={handleChange}></input>
                    </div>
                    <div className='form-item'>
                        <input type="button" id="submit" value='submit' onClick={handleSubmit}></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home;