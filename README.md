## Simple node echo webserver

The echoserver listen under port 8080 and will print back message you send as a url parameter `?message=xyxyxy`

## run locally

    node server.js

to test the echo web app running locally, from a webrowser, visit localhost:8080?message=hello


## create a container image

     docker build . -t <your username>/node-echo-webapp:latest

## run locally

     docker run -p 8888:8080 -d <your username>/node-echo-webapp

to test the echo web app running in the container, from a webrowser, visit localhost:8888?message=hello


## push to docker hub

     docker login
     docker login -u <your username> -p
     docker push <your username>/node-echo-webapp


`NOTE: the container image is pushed to docker.io/raddaoui:node-echo-webapp:latest`
