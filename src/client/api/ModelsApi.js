/**
 * Created by asafam on 19/07/2017.
 */

'use strict';

import BaseApi from './BaseApi';


class ModelsApi extends BaseApi{

    fetch(organizationId, page) {
        let params = {
            url: `/organizations/${organizationId}/models`,
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

    fetchOne(organizationId, id) {
        let params = {
            url: `/organizations/${organizationId}/models/${id}`,
            method: 'GET'
        };
        return this.request(params)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    create(organizationId, data, options) {
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

    update(data, options) {
        if (!data) {
            return null;
        }

        const {id, query, keywords} = data;
        data = {query, keywords}; // work on a copy of the data

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

    publish(options) {

    }
}

export default ConetntAnalysesApi;
