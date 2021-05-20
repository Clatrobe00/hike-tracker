import axios from 'axios';

export default {
    getHikes: function() {
        return axios.get('/api/hikes');
    },

    addHike: function (data) {
        console.log('adding hike in axios: ', data);
        return axios.post('/api/hikes', {
            trail: data.trail,
            distance: data.distance
        })
        .then(function (res) {
            console.log('Hike Logged!')
        })
        .catch((err) => {
            console.log(err);
        })
    }
}