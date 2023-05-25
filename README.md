# Backend_Development
RESTful API for a Todo App using Node.js and implementing JWT (JSON Web Token)
authentication. The API should allow users to create, read, update, and delete tasks, as well as authenticate and manage their
tasks using JWT

# Getting Started

To get started with the project, you will need to install Node.js and npm. Once you have installed Node.js and npm,
you can clone the project from GitHub:

Once you have cloned the project,  the dependencies automatically get instaled:

# npm install

# Notice :
<h5> You need to edit environment variable file with your mongodb database string URL </h5>

# Start the project

<h5> <em> node server.js / nodemon server.js </em> </h5>

<br></br>

# This is a code block.

```js


Login Api
http://localhost:5000/signup 

Signup Api
http://localhost:5000/signin 

# Token is required to accese those Api 
[ You get the token from Login Api ]

Add Todo-list Api
http://localhost:5000/user/add-task

All Todo-list Api
http://localhost:5000/user/all-tasks 

Todo-list Search Api
http://localhost:5000/user/get-task/{id}

Todo-list Delete Api
http://localhost:5000/user/delete-task/{id}

Todo-list Update Api
http://localhost:5000/user/update-task/{id}

Pagination Api
http://localhost:5000/user/tasks?pageNumber=1&limit=4

Searching Api
http://localhost:5000/user/search/{query}




