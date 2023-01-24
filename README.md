# Cinema Universe

[![Netlify Status](https://api.netlify.com/api/v1/badges/78a3cf4b-6b1d-44d7-a54a-7a52b9ee1cbb/deploy-status)](https://app.netlify.com/sites/cinema-universe/deploys)

Cinema Universe is a large Database App for all movies since the beginning of Cinema, and its Database depends on the API of TMDB website, which is the largest Database website for Movies and TV Shows in the world.


![Screenshot](preview_0.png) 

![Screenshot](preview_1.png) 

![Screenshot](preview_3.png) 

## Demo

https://user-images.githubusercontent.com/69651552/138542024-937ee1bd-c31c-435b-88ad-0e4435b10ce3.mp4

## Instructions, Building & Get Started 

    - 1- Fork, clone or download this repository to your local machine.
    - 2- Be sure that you install the [Node.js](https://nodejs.org/en/) environment in your machine.
    - 3- Open your terminal and be sure that you are inside the correct destination of the App, while you must be in the same path of the package.json file.
    - 4- inside your terminal run these commands:-
    
        * to install dependencies.
        ```
        npm install
        ```
        * to start the server.
        ```
        npm start
        ```
    - 5- Once the app server is running visit (localhost:3000) in the browser to view the app and now you can treat with it as shown above in the Demo.
    - 6- You can also see a live preview of the app from this Link (https://cinema-universe.netlify.app/)

## Pages

* Login
* Home
* My Favorites
* 404 

## Built With

* HTML
* CSS
* JS

## Libraries & Packages

* [Redux](https://redux.js.org/)
* [React Redux](https://react-redux.js.org/)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
* [React Router](https://www.npmjs.com/package/react-router)
* [React Router Dom](https://www.npmjs.com/package/react-router-dom)
* [Styled Components](https://styled-components.com/)
* [Axios](https://www.npmjs.com/package/axios)
* [React Icons](https://react-icons.github.io/react-icons/)
* [React Slick](https://www.npmjs.com/package/react-slick)
* [React Youtube](https://www.npmjs.com/package/react-youtube)

## Frameworks 

* [React.js](https://reactjs.org/)  
* [Antdesign](https://ant.design/)
* [React Bootstrap](https://react-bootstrap.github.io/)

## Features 

* Switch between Dark and Day Mode

![Screenshot](preview_1.png) 

![Screenshot](preview_2.png) 

* PWA [Progressive Web App] introduces the App with another 2 versions beside the web version. It will be in a Mobile version [Android or iPhone] and in a Desktop version for PCs, this means that you can download the app and install it in your PC or Laptop as a Desktop App or download and install it in your Mobile Phone like any App in your Phone.

* Service Worker improves the User Experience for the App, as if your connection to the internet is lost so the browser will not be crashed and go to the weird [No Connection] screen, but instead of that there will be a nice screen with a proper message that shows to the user that there is no internet connection and he has to check his internet.

## Author

* [Mohamed Elhawary](https://www.linkedin.com/in/mohamed-elhawary14/) 

## Contact me through my social accounts

* Email: mohamed.k.elhawary@gmail.com  

* [Linkedin](https://www.linkedin.com/in/mohamed-elhawary14/)

* [Codepen](https://codepen.io/Mohamed-ElHawary)

* [Behance](https://www.behance.net/mohamed-elhawary14)

## Notices & Overview about the App

1- The App has a Simulation for the Authentication process, so you have to enter any username and any password from you choice in the login form to be able to see the home screen of the App.

2- The username and password you entered in the login form generate a unique Token that will be saved in the browser Local Storage with the username. So this unique Token & username are your tokens to check your Auth state before every request you perform inside the App, so don't try to delete your tokens from the Local Storage otherwise you will be logged out once you make any request inside the App and therefore you will lost all your data including your saved favorites movies [will talk about it in point (3)], and will lost your chosen Theme (Dark or Day) [will talk about it in point (5)]. Because the App doesn't have any backend database that saves your works in the App. It depends ONLY on the client side >> [Local Storage]. So deleting your LocalStorage here or clicking on the [Logout] Link in the dropdown menu in the Navbar are similar to deleting your Account forever.

3- You can choose any movie in the App as your favorite movie, by clicking on the heart icon at the top right of each movie poster, and this choice as a favorite movie will be saved in the Local Storage also to prevent losting your favorites data if you make a reloading for the App. Also you can remove this favorite movie from your favorites list by clicking another mouse click on the heart icon again.

4- You can also see all your favorites Movies you choosed before by navigating to the "My Favorites Page", in the Navbar, open the dropdown menu and click on the [My Favorites] Link to go to your favorites Movies.  

5- You can choose your favorite Theme between (Dark & Day) and this choice will be saved in the Local Storage also, so your preferred Theme will not be lost after reloading the App.

6- The App contains 4 main sliders in the Home Screen:-
    - The Top Slider is for the [Now Playing Movies] in the Cinema
    - The Second Slider is for the [Popular Movies]
    - The Third Slider is for the [Top Rated Movies]
    - The Fourth is for the [Recent Rated Movies]

7- If you click on any movie, a movie modal will be opened that contains all this movie details:- [Title, Release Date, Genres, Overview, Cast, Crew, Video Trailer]

7- You have the ability to search for any movie you need in a large database contains millions of movies, by just typing its name letters in the search input at the top of the screen and you will get the results that match your needs.

8- The App depends for its database on the TMDB Website API's, TMDB is the largest Database Website for Movies and TV Shows in the World, you can check all the API's and the URLs that this App depends on them in the (config.js) file inside the (src) folder.

9- Finally, you can take this App as a reference and strong practical & revision to understand the working logic of `redux`, `react-redux` & middlware like `redux-thunk` and how they interact with a react App.
## License

Licensed under the [MIT License](LICENSE)
