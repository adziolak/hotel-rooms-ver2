# Hotel Rooms App

This simple React application, written in TypeScript, displays a list of hotel rooms fetched from a given API and allows users to check the availability and price differences of these rooms. 

## Features

1. Fetches the rooms list from a provided API endpoint.
2. Displays the rooms list sorted by price.
3. Allows checking rooms availability through custom dropdown
4. Shows the availability status for each room (available, onRequest, soldout, or error).
5. Displays the price difference (original vs. checked one).
6. Includes a "Book" button that is only enabled for available rooms and logs the selected room info to the browser console upon clicking.

## Getting Started

To get a local copy up and running, follow these simple steps.

## Prerequisites

- Node.js installed on your machine.
- A package manager like npm (comes with **Node.js**) or **Yarn**.

## Installation

### Using Node.js

1. Clone the repo

`git clone https://github.com/adziolak/hotel-rooms-ver2.git`

2. Navigate to the project directory

`cd hotel-rooms-ver2`

3. Install NPM packages

`npm install`

or if you're using **Yarn**,

`yarn install`

4. Running the Application

To run the application locally:

`npm start`

or if you're using **Yarn**,

`yarn start`

### Using Docker

This application also supports Docker, providing a seamless way to build, run, and manage the application containers. Docker ensures that the application runs identically in any environment, from a developer's local machine to a production server.

#### Prerequisites

- Docker installed on your machine. For installation instructions, visit Docker's official website.
- Building the Docker Image
- To build a Docker image for the application, run the following command in the project's root directory:

`docker build -t hotel-rooms .`

##### Running the Application in a Docker Container

After building the image, you can run the application inside a Docker container using:

`docker run -p 3000:3000 hotel-rooms`

##### Stopping the Container
To stop the running container, you can use the Docker CLI to list the running containers, find the container ID for your application, and then stop it: 

`docker ps`
`docker stop <container_id>`

Replace <container_id> with the actual container ID from the output of docker ps.

#### Running the Application with Docker Compose

1. Build you application using, run the following command from the root of your project:

`docker-compose build` 

2. Start the application using Docker Compose"

`docker-compose up`

This command builds (if necessary), (re)creates, starts, and attaches to containers for a service. If you want to run in detached mode, use the -d flag:

`docker-compose up -d`

3. Stopping the Application

To stop your application and remove the containers, networks, or volumes it defines, run:

`docker-compose down`

## Usage

1. Upon launching the application, you'll see a list of hotel rooms sorted by price.
2. Interact with the custom dropdown
3. The availability status and any price differences will be displayed alongside each room.
4. You can use the "Book" button to attempt booking a room. If the room is available, the room's information will be logged to the console.
5. If the room is not available you will see message displaing in a toast

## Live Demo

Experience the Hotel Rooms App in action! A live demo of the application is available to help you explore its features without the need to set it up locally. 

### Accessing the Demo
You can access the live demo by visiting the following URL:

[Demo](https://jo5m7ez7z0.execute-api.us-west-2.amazonaws.com/)



