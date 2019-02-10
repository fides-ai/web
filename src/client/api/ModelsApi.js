/**
 * Created by asafam on 01/15/2019.
 */

'use strict';

import * as Promise from 'bluebird';
import BaseApi from './BaseApi';

const models = [
    { id: '0', name: 'Titanic', description: 'Titanic survival prediction model.' },
    { id: '1', name: 'Fraud Detection', description: 'Fraud detection model.' }
];

const dataset = {
    '0': [
        { id: '0', age: 35, description: 'Unemployed customer at the age of 35' },
        { id: '1', age: 20, description: 'Customer without a job' },
        { id: '2', age: 30, description: 'Customer with a job' },
    ],
    '1': [

    ]
};

const explanation = {
    imageUrl: '/bower_components/lime.png'
};


class ModelsApi extends BaseApi {

    fetch(organizationId, options) {
        let params = {
            url: `/organizations/${organizationId}/models`,
            method: 'GET',
            params: options
        };
        // return this.request(params)
        //     .then(response => response.data)
        //     .catch(error => {
        //         throw error;
        //     });
        return Promise.resolve()
            .then(() => models);
    }

    fetchOne(id, organizationId, options) {
        let params = {
            url: `/organizations/${organizationId}/models/${id}`,
            method: 'GET',
            params: options
        };
        // return this.request(params)
        //     .then(response => response.data)
        //     .catch(error => {
        //         throw error;
        //     });
        return Promise.resolve()
            .then(() => models[id]);
    }

    fetchModelDataset(id, organizationId) {
        let params = {
            url: `/organizations/${organizationId}/models/${id}/dataset`,
            method: 'GET'
        };
        // return this.request(params)
        //     .then(response => response.data)
        //     .catch(error => {
        //         throw error;
        //     });
        return Promise.resolve()
            .then(() => dataset[id]);
    }

    create(data, organizationId, options) {
        let params = {
            url: `/organizations/${organizationId}/models`,
            method: 'POST',
            params: options,
            data
        };
        return this.request(params)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    update(id, data, organizationId, options) {
        if (!data) {
            return null;
        }

        let params = {
            url: `/organizations/${organizationId}/models/${id}`,
            method: 'PUT',
            params: options,
            data
        };
        return this.request(params)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    explain(id, data, organizationId, options) {
        let params = {
            url: `/organizations/${organizationId}/models/${id}/explain`,
            method: 'POST',
            options,
            data: {
                data
            }
        };
        // return this.request(params)
        //     .then(response => response.data)
        //     .catch(error => {
        //         throw error;
        //     });

        return Promise.resolve()
            .then(() => explanation);
    }
}

export default ModelsApi;
