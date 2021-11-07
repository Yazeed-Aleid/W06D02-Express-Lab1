# Express Lab 

## Follow these steps:
* Create an application project folder called `my_first_express_app`.

* Create another subdirectory called `public` that contains two html files called about.html and  `contact_us.html`. Feel free to reuse any html files you have created before.

* Create a file called person.json that describes a person. E.g. of json:
      `{“name”: “Tom Jones”, “email”: “tom@gmail.com”, “gender”: “male”}`

* Create a server that will do the following:

    * Display `Welcome` and the name of the person that is read from the file person.json at URL http://localhost:3000/.

    * Display the HTML page, about.html at URL http://localhost:3000/about.html

    * Display the HTML page, contact_us.html at URL http://localhost:3000/contact_us.html

    * Displays the message `Sorry! Can’t find that resource. Please check your URL` if the user enters an unknown path. Help here.

* Enable the server to restart on file changes.

* You should be able to start the server using npm start.