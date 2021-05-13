import React from 'react'
import { FaHome, FaSearchLocation, FaHistory } from "react-icons/fa";

const Data = [{
    name: 'Home',
    path: '/',
    icon: <FaHome />,
    class: 'nav-item'
},
{
    name: 'Find Hike',
    path: '/FindHikes',
    icon: <FaSearchLocation />,
    class: 'nav-item'
},
{
    name: 'Past Hikes',
    path: '/PastHikes',
    icon: <FaHistory />,
    class: 'nav-item'
}
]

export default Data;