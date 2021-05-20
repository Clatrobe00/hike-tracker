import React, { useEffect, useState } from 'react';
import API from '../utils/HikeAPI';
import './PastHikes.css';

const PastHikes = () => {

    const [hikeList, setHikeList] = useState([])

    const RenderSavedList = hikeList.map((hike, index) => {
        return (
            <div key={index} className='hike-card'>
                <div className='trail-info'>
                    <h3>Trail: {hike.trail}</h3>
                    <p>Distance: {hike.distance} Miles</p>
                </div>
                <div className='trail-footer'>
                    <p>Date: {hike.date}</p>
                </div>
            </div>
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
            <h2 className='hike-header'>Past Hikes</h2>
            <div className='past-hike-container'>
                {hikeList[0] ? RenderSavedList : <li>No hikes yet!</li>}
            </div>
        </div>
    )
}

export default PastHikes;