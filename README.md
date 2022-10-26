# Project 12 OpenClassrooms : SportSee
![Logo SportSee](https://user.oc-static.com/upload/2020/08/18/15977560509272_logo%20%285%29.png)

The goal of the project is to develop an analytics dashboard with React to track its training performance.

## Prerequisites
* NodeJS (version 16.13.1)
* React and React-dom (version 18.2.0)
* prop-types (version 15.8.1)
* Recharts (version 2.1.15)
* JSDoc (version 3.6.11)

The use Visual Studio Code (VSCode) is recommended to install and launch the project.

## Installation
To install this project, please follow the steps below.

1. Fork the repository
2. Clone it on your computer
3. Open the main folder (containing the "frontend" and "backend" folders) with VSCode
4. Open two terminals in VSCode
    * In the first terminal, type :
        * `cd ./backend ` to access the backend folder
        * `npm install ` to install all dependencies
    * Do the same for the second terminal :
        * `cd ./frontend ` to access the frontend folder
        * `npm install ` to install all dependencies


## Launching the project
To run the project, please follow the steps below.

1. When all dependencies are installed, type :
    * In the backend terminal : `npm start ` and wait for the message "Magic happens on port 3000" to display
    * In the frontend terminal : `npm start ` then a prompt will display "Something is already running on port 3000. Would you like to run the app on another port instead ?", type "Y" to accept
2. The React app displays an error page. This is normal, you must add the user's ID to display his page.
3. There are two user IDs : **12** and **18**. To access a user page, the correct URLs are :
    * `http://localhost:3001/12`
    * `http://localhost:3001/18`