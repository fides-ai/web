/**
 * Created by asafam on 02/04/2019.
 */

'use strict';

import BaseApi from './BaseApi';


class ModelsApi extends BaseApi {

    fetch(page) {
        let params = {
            url: `/demo/models/`,
            method: 'GET',
            params: {
                page
            }
        };
        return this.request(params)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    fetchPredictions(modelId, page) {
        let params = {
            url: `/demo/models/${modelId}/prediction`,
            method: 'GET',
            params: {
                page
            }
        };
        return this.request(params)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    explain(modelId, predictionId) {
        let params = {
            url: `/demo/models/${modelId}/prediction`,
            method: 'POST'
        };
        return this.request(params)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }
}

export default ModelsApi;
