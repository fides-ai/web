/**
 * Created by asafam on 01/03/2019.
 */

'use strict';

import axios from 'axios';
import {loadKey, saveKey} from '../services/local-storage';


class BaseApi {

    constructor() {
        this.api = axios.create({
            baseURL: __SERVER__ + '/api/',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const user = loadKey('user');
        this.decoreateAuthorization(user);

        // Add a request interceptor
        axios.interceptors.request.use((config) => {
            // Do something before request is sent
            return config;
        }, (error) => {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        axios.interceptors.response.use((response) => {
            // Do something with response data
            return response;
        }, (error) => {
            // Do something with response error
            return Promise.reject(error);
        });
    }

    decoreateAuthorization(credentials) {
        // if (!credentials) {
        //     return;
        // }
        // const {token_type, access_token} = credentials;
        // const token = `${token_type} ${access_token}`;
        // this.api.defaults.headers.common['Authorization'] = token;
    }

    request(params) {
        return this.api(params);
    }
}

export default BaseApi;
