import Axios from 'axios';

export default {
    get (url, params) {
        return new Promise((resolve, reject) => {
            Axios.get(url, { params: params })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
        });
    },
    post (url, params) {
        return new Promise((resolve, reject) => {
            Axios.post(url, params)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
        });
    }
};
