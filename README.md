<h1>FriendFinder</h1>
<h2>Live link: https://friendfinder489.herokuapp.com/</h2>
<br>
Compatibility based application
The application will take in results from users' surveys then compare their results against all other users who have completed it. The application will then display the name and picture of the user with the best match overall.

The survey has 10 questions, answers to the survey questions are on a scale of 1-5 based on how much the user agrees or disagrees.
<br>
<h4>Technical details<h4>
<h6>The application uses Express to handle routing</h6>

<h6>The server.js file uses the npm packages: express, body-parser, path.</h6>

<h6>The html-routes.js file should include two routes:</h6>

*A GET Route to /survey which displays the survey page.
*A USE route that leads to home.html which displays the home page.
The api-routes.js file includes two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
A POST route /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
Compatibility will be determined based on the following.

Each user's results is converted into a simple array of numbers (ex: [1, 4, 3, 2, 4, 1, 5, 4, 2, 3]).

Then will compare the difference between the user's scores against other users' scores, question by question. Then will add up the differences to calculate the totalDifference.

The person with the closest match will be the one with the "least" amount of difference.

Once the closest match has been determined, it will display the result back to the user in the form of a modal pop-up.

The result will display both the name and picture of the closest match.