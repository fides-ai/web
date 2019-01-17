/**
 * Created by asafam on 18/07/2017.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import Select from 'react-select';
import * as actions from '../actions';
import * as facebookActions from '../actions/facebook';
// import '../../../../../node_modules/react-select/dist/react-select.css';
import '../stylesheets/CampaignForm.scss';


const accessToken = 'EAAQa6wXYticBAKqU6Up1anvSEykGVxiPcJe29n0xBauX2aNWIy2lycwOZBxSOaZCZA2bBSIZBDXatA9bxRdodO5il0AnBkNLjTIClSGwRJ3N6ZBwR5L9SZCKlsEIPOZBcICJrMRD9hbxhVCpMZB4ZB41mJhl9knTY1X0ZD';


class CampaignForm extends React.Component {

    constructor(props) {
        super(props);
        this.isReady = this.isReady.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSelectFacebookAdAccount = this.onSelectFacebookAdAccount.bind(this);
        this.onSelectFacebookCampaign = this.onSelectFacebookCampaign.bind(this);
    }

    componentWillMount() {
        const {campaign} = this.props;
        const ready = this.isReady();
        this.setState({create: !campaign, ready})
    }

    componentDidMount() {
        const {campaign, dispatch, userId} = this.props;
        const {facebookAdAccountId} = campaign && campaign.facebookCampaign && campaign.facebookCampaign.template || {};

        if (userId) {
            dispatch(facebookActions.listFacebookAdAccounts(userId, accessToken));
        }

        if (userId && facebookAdAccountId) {
            dispatch(facebookActions.listFacebookCampaigns(userId, facebookAdAccountId, accessToken));
        }
    }

    componentWillReceiveProps(nextProps) {
        // const {campaign} = nextProps;
        // const ready = this.getFormState(campaign);
        // this.setState({formState});
    }

    isReady() {
        const {campaign} = this.props;
        const haveFacebook = campaign && campaign.facebookCampaign && campaign.facebookCampaign.facebookAdAccountId
            && campaign.facebookCampaign.template.facebookAdAccountId
            && campaign.facebookCampaign.template.facebookCampaignId;
        const haveContent = campaign
            && (campaign.metadata.keywords && campaign.metadata.keywords.length > 0)
            || (campaign.metadata.articles && campaign.metadata.articles.length > 0);

        return (haveContent && haveFacebook);
    }


    onChange(event) {
        const {name, value} = event.target;
        const {campaign} = this.props;

        switch (name) {
            case 'url':
            case 'title':
            case 'text':
                campaign.metadata.articles[0][name] = value ? value.trim() : '';
                break;
            case 'keywords':
                campaign.metadata.keywords = value ? value.split(',').map(keyword => keyword.trim()) : '';
                break;
            case 'budget':
                campaign.budget.amount = value;
                break;
            default:
                break;
        }

        const ready = this.isReady();
        this.setState({ready});
    }

    onSelectFacebookAdAccount(option) {
        if (!option) {
            return;
        }

        const facebookAdAccountId = option.value;
        const {dispatch, userId} = this.props;
        const selectedFacebookAdAccountId = option.value;
        const selectedFacebookCampaign = null;

        dispatch(facebookActions.listFacebookCampaigns(userId, facebookAdAccountId, accessToken));

        this.setState({selectedFacebookAdAccountId, selectedFacebookCampaign, ready: false})
    }

    onSelectFacebookCampaign(option) {
        if (!option) {
            return;
        }

        const selectedFacebookCampaignId = option.value;
        const ready = this.isReady();
        this.setState({selectedFacebookCampaignId, ready});
    }

    onSubmit(event) {
        event.preventDefault();

        const {campaign, dispatch} = this.props;
        const {create} = this.state;
        if (create) {
            dispatch(actions.createCampaign(campaign));
        } else {
            dispatch(actions.editCampaign(campaign));
        }
    }

    render() {
        const {campaign, facebookAdAccounts, facebookCampaigns, isLoadingFacebookAdAccounts, isLoadingFacebookCampaigns, onSave, onCancel} = this.props;
        const {selectedFacebookAdAccountId, selectedFacebookCampaignId, ready, created, updated} = this.state || {};

        if (created || updated) {
            return onSave(campaign.id);
        }

        const textTabActive = campaign.metadata.articles && campaign.metadata.articles.length > 0;
        const keywords = campaign.metadata.keywords && campaign.metadata.keywords.length > 0 ? campaign.metadata.keywords.join(', ') : '';
        const {text, title, url} = campaign.metadata.articles && campaign.metadata.articles.length > 0 ? campaign.metadata.articles[0] : {
                text: '',
                title: '',
                url: ''
            };

        const facebookAdAccountsOptions = (facebookAdAccounts || []).map(facebookAdAccount => ({
            value: facebookAdAccount.account_id,
            label: facebookAdAccount.name
        }));
        const facebookCampaignsOptions = (facebookCampaigns || []).map(facebookCampaign => ({
            value: facebookCampaign.id,
            label: facebookCampaign.name
        }));

        campaign.facebookCampaign.facebookAdAccountId = selectedFacebookAdAccountId;
        campaign.facebookCampaign.template.facebookAdAccountId = selectedFacebookAdAccountId;
        campaign.facebookCampaign.template.facebookCampaignId = selectedFacebookCampaignId;

        console.log(`selectedFacebookAdAccountId = ${selectedFacebookAdAccountId} \nselectedFacebookCampaignId = ${selectedFacebookCampaignId}`);

        return (

            <div className="campaign-form">
                <form onSubmit={this.onSubmit}>
                    <div className="campaign-metadata">
                        <div className="nav-tabs-custom">
                            <ul className="nav nav-tabs">
                                <li className={`${textTabActive ? 'active' : ''}`}>
                                    <a href="#text" data-toggle="tab" aria-expanded="true">Text</a>
                                </li>
                                <li className={`${!textTabActive ? 'active' : ''}`}>
                                    <a href="#keywords" data-toggle="tab">Keywords</a>
                                </li>
                            </ul>
                            <div className="tab-content">

                                <div className={`text-tab tab-pane ${textTabActive ? 'active' : ''}`} id="text">
                                    <div className="form-group url">
                                        <label>URL</label>
                                        <input className="form-control" type="text" name="url" defaultValue={url}
                                               onChange={this.onChange}
                                               placeholder="Enter URL"></input>
                                    </div>
                                    <div className="form-group title">
                                        <label>Title</label>
                                        <input className="form-control" type="text" name="title" defaultValue={title}
                                               onChange={this.onChange}
                                               placeholder="Enter title"></input>
                                    </div>
                                    <div className="form-group text">
                                        <label>Text</label>
                                        <textarea className="form-control" rows="3" placeholder="Enter text" name="text"
                                                  defaultValue={text} onChange={this.onChange}></textarea>
                                    </div>
                                </div>

                                <div className={`keywords-tab tab-pane ${!textTabActive ? 'active' : ''}`}
                                     id="keywords">
                                    <div className="form-group keywords">
                                    <textarea className="form-control" rows="3" placeholder="Enter keywords"
                                              name="keywords" defaultValue={keywords} onChange={this.onChange}>
                                    </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="campaign-facebook">
                        <div className="form-group">
                            <label>Select Facebook ad account</label>
                            <Select name="facebookAdAccountId" value={selectedFacebookAdAccountId}
                                    options={facebookAdAccountsOptions}
                                    isLoading={isLoadingFacebookAdAccounts}
                                    onChange={this.onSelectFacebookAdAccount}/>
                        </div>

                        {selectedFacebookAdAccountId &&
                        <div className="form-group">
                            <label>Select Facebook campaign</label>
                            <Select name="facebookCampaignId" value={selectedFacebookCampaignId}
                                    options={facebookCampaignsOptions}
                                    isLoading={isLoadingFacebookCampaigns}
                                    onChange={this.onSelectFacebookCampaign}/>
                        </div>
                        }

                        <div className="form-group">
                            <label>Select</label>
                            <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <input className="form-control" type="text" name="budget"
                                       defaultValue={campaign.facebookCampaign.budget.amount} onChange={this.onChange}/>
                                <span className="input-group-addon">.00</span>
                            </div>
                        </div>
                    </div>

                    {/*<div className="form-group">*/}
                        {/*<button*/}
                            {/*className={`btn btn-primary ${formState === STATES.ready ? '' : 'disabled'}`}*/}
                            {/*type="submit">Next*/}
                        {/*</button>*/}
                        {/*<button className="btn btn-default" onClick={onCancel}>Cancel</button>*/}
                    {/*</div>*/}
                </form>
            </div>
        );
    }
}

CampaignForm.propTypes = {
    campaign: PropTypes.object,
    userId: PropTypes.string,
    facebookAdAccounts: PropTypes.array,
    facebookCampaigns: PropTypes.array,
    isLoadingFacebookAdAccounts: PropTypes.bool,
    isLoadingFacebookCampaigns: PropTypes.bool,
    created: PropTypes.bool,
    updated: PropTypes.bool,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

CampaignForm.defaultProps = {
    campaign: {
        metadata: {
            keywords: [],
            articles: []
        },
        content: {
            types: ["news", "lifestyle"]
        },
        facebookCampaign: {
            template: {},
            budget: {},
            live: {},
            optimization: {}
        }
    },
    created: false,
    updated: false
};

function mapStateToProps(state) {
    const {campaigns} = state;
    const {facebook} = campaigns;

    const userId = 'me';
    let facebookAdAccounts = [],
        facebookCampaigns = [];
    let isLoadingFacebookAdAccounts = false,
        isLoadingFacebookCampaigns = false;
    if (userId && facebook && facebook[userId]) {
        facebookAdAccounts = facebook[userId].facebookAdAccounts;
        isLoadingFacebookAdAccounts = facebook[userId].loading;

        const facebookAdAccount = facebookAdAccounts && facebookAdAccounts.find(faa => faa.selected);
        if (facebookAdAccount) {
            facebookCampaigns = facebookAdAccount.facebookCampaigns;
            isLoadingFacebookCampaigns = facebookAdAccount.loading;
        }
    }

    const {created, updated} = campaigns.campaigns;

    return {
        userId,
        facebookAdAccounts,
        facebookCampaigns,
        isLoadingFacebookAdAccounts,
        isLoadingFacebookCampaigns,
        created,
        updated
    };
}

export default connect(mapStateToProps)(CampaignForm);
