# Project Discription

For this project I completed an application that generates a random password based on specific user selected criteria.  I wrote the JavaScript code for the "generatePassword" function to get a random password, that is then displayed onto a users screen using the querySelector "password."  My code consists of a series of "prompt" and "confirm" statements that store user input into variables which are later used to call on specific characters from arrays.  These arrays consist of the various strings of data that are used to generate the users random password given certain criteria: (uppercase letters, lowercase letters, numbers, and symbols).  Once the user input passes through a series of tests, 1) checking for the correct length, 8-128 characters & 2) selection of at least one of the passords criteria, a series of "if" statements determine which arrays to pull data from.  Once the arrays are determined they pass through a "for" loop using Math.floor and Math.random functions to select random character to be written to the HTML attribute "placeholder."    

## Links

[Github files](https://github.com/Tarbo13/Password-Generator)

<br>

[Password Generator webpage](https://tarbo13.github.io/Password-Generator/)

### Screen Shots

![Initial page](https://user-images.githubusercontent.com/68627417/93841477-8f491e00-fc48-11ea-9baf-36a826a8f155.png)

<br>

![PW length](https://user-images.githubusercontent.com/68627417/93841525-b869ae80-fc48-11ea-8972-e17ef79f153b.png)

<br>

![Selection criteria](https://user-images.githubusercontent.com/68627417/93841583-e18a3f00-fc48-11ea-993c-f32a686a0ae0.png)

<br>

![Error message](https://user-images.githubusercontent.com/68627417/93841626-0979a280-fc49-11ea-829c-cc69448237bf.png)

<br>

![Generated PW](https://user-images.githubusercontent.com/68627417/93841668-2dd57f00-fc49-11ea-9de8-105cfd0c65f4.png)


