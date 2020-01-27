# solteq-pre-assignment
 A web app that reads an API and displays its information to the user.

[the app on Heroku](https://solteq-pre-assignment-api-app.herokuapp.com/)

[the app on dockerhub](https://hub.docker.com/repository/docker/tooth/brewery-db-app)

[the API I used](https://www.openbrewerydb.org)

## Stack

This project was built using React, Redux and axios, html and css. I wanted to keep the build light and as simple as possible given that the task it performs is light and fairly straight forward. I also didnt feel like there was any need to complicate things.

React is used due to its popularity and its features and due to the fact that I missed working with it. Redux to enable communication between "sibling" components and axios to easily read the API responses. 

## Rational

The application is aimed at anyone in the US (due to the availiable data in the API) looking for a brewery to have some local beer. The app supplies the location and all other relevant information of a brewery or breweries based on the search. for example searching San Diego will return all breweries in the San Diego area, with their contact information and location.

The initial view simply supplies the default breweries from the root of the API.

The search works with places, brewery names, adresses and so forth.

## Used data sources

- https://www.openbrewerydb.org
- https://google.com/maps

## Architecture

The architecture for this project is simple since there is no backend. the data is simply fetched from the api and presented to the user in the front end. (I used this project to re-learn / re - familiarize myself with React and Redux, since its been a while since I used them last.)

The application consists of two proper components, the "Search" component and the "Results" component. The search component is resposible for taking in user data and submitting it to the Redux store which can transmit it further to the Results component. 
The results component takes the users query ( if it exists ) and asks
the API for the data. This data is then displayed in the results component as "ListItems", which simply are the JSX versions of the json data.
The button component is only used once in this case but I figured it would be a good idea to separate it in case I ever decided to continue developement on this app.

As a side note I ended up wrapping the project in a container and pushing it to dockerhub. The application is larger than required due to the fact that I had to edit node_modules to get the app to run on heroku, and therefore couldnt ignore them in the Dockerfile.

Styling is done with some light CSS work.


