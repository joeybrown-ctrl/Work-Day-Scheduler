# Work-Day-Scheduler

**version 1.0.0**

[For deployed version, click me](https://joeybrown-ctrl.github.io/Work-Day-Scheduler/)

For week four of bootcamp I was assigned with making a day planner used to schedule events and save them to local storage using jQuery and Moment.js. This was a fun assignment, and I learned a lot about the efficiency of jQuery over vanilla JavaScript, as well as absorbing useful information about Moment.js through reading through documentation. I attended office hours and observed the different coding processes my classmates used before deciding on my course of action. I'm glad I chose the path I decided upon as it helped me practice and further understand both jQuery and thrid-party APIs like Moment.js.
<br>

## Using jQuery and Moment.js

I started by using jQuery to create HTML elements stored within JavaScript variables, and appending them to the page. I made an element for the hour of the day, a textarea input for the user to schedule their events, and lastly a save button to allow the user's text to be saved to local storage. I then looped these blocks of code through a for loop, which iterates through an array of hours in the work day (9am to 5pm). Using Moment.js, I created both a time element at the top of the page to show the day, month, year and hour, minute and second of current time -- and created logic within the main function to denote whether the time blocks are in the past, present or future by changing their colors to give the user a clear idea of where they are in their work day.
<br><hr>

![Image of Work-Day-Scheduler web page](https://github.com/joeybrown-ctrl/Work-Day-Scheduler/blob/master/images/work-day-screenshot.png)
<br>

## Local Storage

One of the main objectives of this project was to allow the user to save their scheduled events to local storage. I did this by creating an event with jQuery, and setting the time and user's input to local storage. When the user refreshes the page, the item within local storage persists.
<br><hr>

![Image of text input saved in local storage](https://github.com/joeybrown-ctrl/Work-Day-Scheduler/blob/master/images/local-storage-screenshot.png)
<br>

## Built With

* [Visual Studio Code](https://code.visualstudio.com/)
* [Moment.js](https://momentjs.com/docs/)
* [jQuery](https://jquery.com/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap 4](https://getbootstrap.com/)
* [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [Markdown](https://guides.github.com/features/mastering-markdown/) 


## Contributors

-Joey Brown <br> <gjoey.brown@gmail.com> <br> &copy; 2020 Joey Brown. All rights reserved.