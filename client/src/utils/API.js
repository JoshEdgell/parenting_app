import axios from 'axios';

export default {
    login: function() {
        console.log("hitting login route in utils")
        return axios.post('api/users/login');
    }
}