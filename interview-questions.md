# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key would be called animal_id, it would be a column in the Sightings model to identify the animal that sighting is identified with. 

  Researched answer: Pretty much that. 



2. Which routes must always be passed params and why?

  Your answer: Show, create, update, and delete. These routes are calling methods that act on a specific entry in the database. They need to know which entry to run the method on. 

  Researched answer: Or create a new one. The create method needs the parameters for the new entry. There's also routes that we haven't gone over yet like search. 



3. Based on your knowledge of Rails conventions, write a route for a webpage called "game" that takes in a parameter called "guess" with a controller called "main".

  Your answer: get 'main/game/:guess' => 'main#game'



4. Name three rails generator commands. What is created by each?

  Your answer: rails g model - generates a new model or table for our database, rails g resources - generates the RESTful routes for all basic CRUD functions, rails g migration - generates a migration file that you can edit if you need to change the shape of your database. 

  Researched answer: The generate command can also generate assets, channels, or you can download gems to get even more things to generate. 



5. Consider the Rails routes below. Describe the responsibility of each route.

method="GET"    /users       Displays an index of all users   

method="GET"    /users/1     Shows a specific user with an id of 1

method="GET"    /users/new   The form page where you can enter the information for a new user

method="GET"    /users/edit/1   A page to view the user with id 1 so you may make edits

method="POST"   /users/        This is the actual post action, creating a new user with the information provided on the new page

method="PUT"    /users/1      The update crud action, this will apply changes made on the edit page

method="DELETE" /users/1      The delete crud action. navigating to this URL would delete the user with an id of 1
