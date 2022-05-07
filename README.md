# MERN-User-App
This is a User app, where a user can Signup, Login, Add product to dashboard etc.. 
# Steps
    1. Created a client side & server side folders to differentiate frontend and backend
    
    2. In server side (backend)-> 
                * Initialized a empty package.json file
                * Defined a PORT and connected with mongodb 27017
                * Installed packages like express, body-parser,cors, mongoose etc...
                * Created a userSchema, productSchema in Models folder
                * Defined functions for Signup, Login, Get user etc.. in controllers folder
                * Created userRoutes in routes folder
                * Implemented "bcrypt" for hashing user password
                * Created "jwt-web-token" for user
                * Checked Signup, Login, getUser by Id etc.. with postman
                
     3. In client side (frontend)->
                * Created a app using the command "npx-create-react-app ./"
                * Installed npm packages like axios, react-router-dom@6, bootstrap etc...
                * Created & designed components for Signup from, Login form using bootstrap
                * Created and designed Dashboard page, Error page 
                * Navigated using react-router
                
                