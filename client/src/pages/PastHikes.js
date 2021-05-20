import React, { useEffect, useState } from 'react';
import API from '../utils/HikeAPI';

const PastHikes = () => {

    const [hikeList, setHikeList] = useState([])

    const RenderSavedList = hikeList.map((hike, index) => {
        return (
            <li key={index}>
                Trail: {hike.trail}
                Distance: {hike.distance}
                Date: {hike.date}
            </li>
        );
    })  

    useEffect(() => {
        API.getHikes().then((data) => {
            const hikes = data.data.map((hike) => {
                return {trail: hike.trail, distance: hike.distance, date: hike.date}
            })
            setHikeList(hikes);
        })
    }, [])

    console.log(hikeList);

    return (
        <div className='container'>
            <h3>Past Hikes</h3>
            <div className='past-hike-container'>
                <ul className='past-hike-list'>
                    {hikeList[0] ? RenderSavedList : <li>No hikes yet!</li>}
                </ul>
            </div>
        </div>
    )
}

export default PastHikes;