# Cinema Universe

[![Netlify Status](https://api.netlify.com/api/v1/badges/78a3cf4b-6b1d-44d7-a54a-7a52b9ee1cbb/deploy-status)](https://app.netlify.com/sites/cinema-universe/deploys)

Cinema Universe is a large Database App for all movies around the world since the beginning of Cinema, and its Database depends on the API of TMDB Website, which is the largest Database Website for Movies and TV Shows in the World.


![Screenshot](preview_1.png) 

![Screenshot](preview_3.png) 
## Demo

https://user-images.githubusercontent.com/69651552/138268637-1139c182-b669-46a4-bc97-d2c4496eae08.mp4

## Instructions, Building & Getting Started  
    - 1- Fork, clone or download this repository to your local machine.
    - 2- Be sure that you install the [Node.js](https://nodejs.org/en/) environment in your machine.
    - 3- Open your terminal and Be sure that you are inside the correct destination of the App, while you must be in the same path of the package.json file and the website folder.
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
* [Js Cookie](https://www.npmjs.com/package/js-cookie)
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
## Author

* Mohamed Elhawary  

## Contact Me by my Social Accounts

* Email: mohamed.k.elhawary@gmail.com  

* [Linkedin](https://www.linkedin.com/in/mohamed-elhawary14/)

* [Codepen](https://codepen.io/Mohamed-ElHawary)

* [Behance](https://www.behance.net/mohamed-elhawary14)

## Deploy with Me

Feel Free to Deploy it with me, send Issues or a Pull Request and i'll deal with you, just test it First.

## Notices & Overview about the App

1- The App has a Simulation for the Authentication process, so you have to enter any username and any password as you choice in the login form to be able to see the home screen of the App.

2- The username and password you entered are saved in the cookies as they are will be your tokens to check your Auth. before every request you perform inside the App, so don't try to delete your tokens from the cookies otherwise you will be logged out once you make any request inside the App and so you lost all your data including your saved favorites movies [will talk about it in point (3)], as the App doesn't have any backend database that saves your works in the App, it depends ONLY on the client side [Cookies] so deleting cookies here i similar to the Deleting your Account forever.

3- You can choose any movie in the App as your favorite movie, by clicking on the heart icon at the top right of each movie poster, and this choice as a favorite movie will be saved in the Cookies also, so that you can retrieve all your favorite movies again if you make a reload for the App, also you can remove this favorite movie from your favorites list by clicking another click on the heart icon.

4- The App contains in the Home Screen 4 main sliders:-
    - The Top Slider is for the [Now Playing Movies] in the Cinema
    - The Second Slider is for the [Popular Movies]
    - The Third Slider is for the [Top Rated Movies]
    - The Fourth is for the [Recent Rated Movies]

5- If you click on any movie, a movie modal will be opened that contains all this selected movie details:- [Title, Release Date, Genres, Overview, Cast, Crew, Video Trailer]

6- You have the ability to search for any movie you need by just typing its name letters in the search input at the top right of the screen and then you will get huge results that match your needs.

7- The App depends for its database on the TMDB Website API's, TMDB is the largest Database Website for Movies and TV Shows in the World, you can check all the API's and the URLs the this App uses it in the requests in the (config.js) file inside the (src) folder.
## License

Licensed under the [MIT License](LICENSE)