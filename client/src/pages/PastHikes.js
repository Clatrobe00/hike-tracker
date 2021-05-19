import React, { useEffect } from 'react';
import API from '../utils/HikeAPI';

const PastHikes = () => {

    useEffect(() => {
        API.getHikes().then((data) => {
            console.log('data is ', data);
        })
    })

    return (
        <div>Hello from Past Hikes</div>
    )
}

export default PastHikes;