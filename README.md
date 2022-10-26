## Simple node echo webserver

The echoserver listen under port 8080 and will print back message you send as a url parameter `?message=xyxyxy`

## run locally

    node server.js

to test the echo web app running locally, from a webrowser, visit `localhost:8080/?message=hello`


## create a container image

     docker build . -t <your username>/node-echo-webapp:v1

## run locally

     docker run -p 8888:8080 -d <your username>/node-echo-webapp:v1

to test the echo web app running in the container, from a webrowser, visit `localhost:8888/?message=hello`


## push to docker hub

     docker login
     docker login -u <your username> -p
     docker push <your username>/node-echo-webapp:v1


`NOTE: the container image is pushed to docker.io/raddaoui/node-echo-webapp:v1`

## Optionally run within a web app in Azure


	# create resource group
	az group create --name myResourceGroup --location eastus
	# create app service plan
	az appservice plan create --resource-group myResourceGroup --location eastus --name myAppServicePlan --is-linux
	# create a web app using our container
	url=$(az webapp create --name myContainerAp --plan myAppServicePlan  --resource-group myResourceGroup --deployment-container-image-name docker.io/raddaoui/node-echo-webapp:v1)
	# wait for few minutes for the web app to become ready then visit from a webrowser the url from this command
	echo $url?message=hello
