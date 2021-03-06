# QuaranTrail-Server

This is the server used for the game QuaranTrail to store character health, stock, and curveball information.

## Written by QuaranTeam 2020

- Nghi Tran
- Taylor Piccarreto
- Robert Perez
- Jaye Laguardia

## Live Link: [QuaranTrail](https://quarantrail.web.app/)

## Client Repo Link: [Client Repo](https://github.com/nttran8/quarantrail-client)

### About

In this playful and lighthearted game, the world was struck with an awful pandemic and the player has to stay indoors. The goal is to practice social distancing and self quarantine while keeping one's boredom level bar low for as many days as possible. As such, the two guages to keep an eye on are the chance of infection and boredom. Every choice and action can increase or decrease these guages so tread carefully. The player must also keep track of, and maintain, their supply of food and toilet paper.

### API Endpoints

- `/game` accepts GET and POST requests, POST request requires a body with a key of `location` and a value pair of either `home, market, or park`.
- `/leaderboard` accepts GET and POST requests, GET request responds with top 5 scores on the leaderboard in descending order. POST requests require a body with keys of `name` and `score`, with their values as a string and number respectively.

### Tech Stack

Server

- Express
- Node.js

Data Persistence

- PostgreSQL

Development Tools

- Postgrator
- VScode
- Postman
- DBeaver
- Mocha/Chai

### Screenshots

![image of landing page](src/Images/screen1.png)
![image of market page](src/Images/screen2.png)
![image of park page](src/Images/screen3.png)

## Scripts

- Start the application `npm start`

- Start nodemon for the application `npm run dev`

- Run the tests `npm test`

- Migrate the Tables into database `npm run migrate` or `npm run migrate:test`

- Seed Tables with data after migration `npm run seed`

## Deployment

This server is deployed at `https://quarantrail.herokuapp.com/`.
