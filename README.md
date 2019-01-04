# Fides Web Console

## Install

### Prerequisites
For first time installation, go through general Node.js and npm install, and create the project environment.

### Before you start 
Go through the following steps:
1. `npm install`
1. `npm update`
1. `npm install -g webpack webpack-cli`

## Running the environments

#### Develop
To run the environment in an hot reload configuration execute the following command:
1. `npm start` will start the server
2. `npm run watch` (on another terminal window) will watch the code files for changes, and rebuild the environment 
automatically. 
3. Browse to `http://localhost:3030`

### Build

#### Local
Run the following command to build the environment: 
`npm run build`

#### Docker
1. `docker build . --tag us.gcr.io/fides-prod/fides-web:[VERSION]`
*Replace VERSION with semver https://semver.org/ version convention [e.g. 1.0.1]*
1. `docker tag us.gcr.io/fides-prod/fides-web:[VERSION] us.gcr.io/fides-prod/fides-web:latest`
1. Test your docker by running it locally: `source env-vars; docker-compose up`

### Deploy

#### Setup your environment
1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/quickstarts), which includes the gcloud command-line tool.
1. Install the kubectl command-line tool by running the following command: `gcloud components install kubectl`
1. Setting default project: `gcloud config set project [PROJECT_ID]
`
1. Setting a default compute zone:`gcloud config set compute/zone [COMPUTE_ZONE]`
1. Verify your settings by running the following command: `gcloud config list`

* 1. Make sure to authenticate with the user attached to your environment by running: `gcloud auth login`

See more in: https://cloud.google.com/kubernetes-engine/docs/quickstart

#### Creating a Kubernetes Engine cluster
`gcloud container clusters create fides-web-cluster --num-nodes=1 --disk-size=10 --machine-type=n1-standard-1 --enable-autorepair`

#### Get authentication credentials for the cluster
To authenticate for the cluster, run the following command:
`gcloud container clusters get-credentials fides-web-cluster`

### Register docker image
`gcloud docker -- push us.gcr.io/fides-prod/fides-web:[VERSION]`

This may take a while but once it's done, we should have the image listed on Compute > Container Engine > Container Registry.

#### Create the deployment
1. `kubectl create -f .gcloud/deployment.yml`
1. Set environment variables: `kubectl set env deployment/fides-web VAR1=VALUE VAR2=VALUE ...`
1. Verify your installation: `kubectl describe deployments fides-web`

#### Exposing the deployment
After deploying the application, expose it to the Internet:
1. Create static ip: `gcloud compute addresses create fides-web-ip --region us-east4`
1. Get the reserved address with `gcloud compute addresses list`
1. Update `service.yml` with the IP created in the previous step
1. `kubectl create -f .gcloud/service.yml`

## Deploy

Run the following command:
1. `gcloud container clusters get-credentials fides-web-cluster`
1. `gcloud container builds submit --config=.gcloud/cloudbuild.yml --substitutions=_VERSION=[VERSION] .`

Or (**much slower**)
1. Rebuild the docker images
1. Register the newly build docker image: `gcloud docker -- push us.gcr.io/fides-prod/fides-web:[VERSION]`
1. Update the deployment with the new image: `kubectl set image deployment/fides-web server=us.gcr.io/fides-prod/fides-web:[VERSION]`

## Cleanup
1. Remove all stopped containers: `docker rm $(docker ps -a -q)`
1. Remove all untagged images: `docker rmi $(docker images | grep "^<none>" | awk "{print $3}")`
1. Remove TO DO!

## Troubleshoot
1. `kubectl get pods`
1. `kubectl logs [POD_NAME]`

### 403 errors
https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/kubectl

## Migration

1. Create a model `node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string`
2. Run migrations `node_modules/.bin/sequelize db:migrate`

see more in http://docs.sequelizejs.com/manual/tutorial/migrations.html.