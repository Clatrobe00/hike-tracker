import axios from 'axios';

export default {
    getHikes: function() {
        console.log('in axios call')
        return axios.get('/api/hikes')
    }
}