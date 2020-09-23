# Project Discription

For this project I completed an application that generates a random password based on specific user selected criteria.  I wrote the JavaScript code for the "generatePassword" function to get a random password, that is then displayed onto a users screen using the querySelector "password."  My code consists of a series of "prompt" and "confirm" statements that store user input into variables which are later used to call on specific characters from arrays.  These arrays consist of the various strings of data that are used to generate the users random password given certain criteria: (uppercase letters, lowercase letters, numbers, and symbols).  Once the user input passes through a series of tests, 1) checking for the correct length, 8-128 characters & 2) selection of at least one of the passords criteria, a series of "if" statements determine which arrays to pull data from.  Once the arrays are determined they pass through a "for" loop using Math.floor and Math.random functions to select random character to be written to the HTML attribute "placeholder."    

## Links

[Github files](https://github.com/Tarbo13/Password-Generator)

<br>

[Password Generator webpage](https://tarbo13.github.io/Password-Generator/)

### Screen Shots

![Initial page](https://user-images.githubusercontent.com/68627417/93968793-42844680-fd1f-11ea-9abc-ed5f4102c1a0.png)

<br>

![PW length?](https://user-images.githubusercontent.com/68627417/93968853-62b40580-fd1f-11ea-91dd-4e292f30a689.png)

<br>

![Selection criteria](https://user-images.githubusercontent.com/68627417/93968896-824b2e00-fd1f-11ea-9ea5-8773b2f83c15.png)

<br>

![Error message](https://user-images.githubusercontent.com/68627417/93968999-b6beea00-fd1f-11ea-9b27-abd517420d68.png)

<br>

![Generated password](https://user-images.githubusercontent.com/68627417/93969045-d0f8c800-fd1f-11ea-9bdd-167f957eba09.png)


