/**
 * Created by asafam on 01/15/2019.
 */

'use strict';

import BaseApi from './BaseApi';


class ModelsApi extends BaseApi {

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

    fetchOne(id, organizationId) {
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
}

export default ModelsApi;
