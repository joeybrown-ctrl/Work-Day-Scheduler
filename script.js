//$(document).ready(function(){

let container = $('.container');
let timeArr = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];
let jumbo = $('.jumbotron');
let timeElement = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
jumbo.append(timeElement);


for (let i = 0; i < timeArr.length; i++) {


    //make repeatable
    let time = timeArr[i];

    let sectionEl = $('<section>').addClass('row rounded align-items-center');
    let hourEl = $('<div>').addClass('time-block col text-center');
    hourEl.text(time);
    sectionEl.append(hourEl);

    let inputEl = $('<div>').addClass('col-lg-6 col text-center');
    let input = $('<textarea>');
    //input.addClass('input rounded-pill');
    $(this).attr('cols', '50')
    input.attr('id', time);
    inputEl.append(input);
    sectionEl.append(inputEl);
    let savedText = localStorage.getItem(time);
    input.val(savedText);

    let saveEl = $('<div>').addClass('col-lg-3 col text-center align-items-center');
    let saveBtn = $('<button>').addClass('saveBtn');
    saveBtn.attr('date-time', time);
    saveBtn.text('save');
    saveEl.append(saveBtn);
    sectionEl.append(saveEl);
    container.append(sectionEl);

    saveBtn.on("click", function(){
        localStorage.setItem(time, input.val())
    });

    let now = moment();
    moment().hour();
    let currentHour = moment().hour();
    let number = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    if (currentHour === number[i]){
        sectionEl.css('background-color', '#ff6961');
    } else if (currentHour < number[i]) {
        sectionEl.css('background-color', '#77dd77');
    } else if (currentHour > number[i]) {
        sectionEl.css('background-color', '#d3d3d3');
    }

    //add styling (padding to hourEl, input, and saveBtn)

}














//})







// # 05 Third-Party APIs: Work Day Scheduler

// Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

// ## User Story

// ```
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```

// The following animation demonstrates the application functionality:

// ![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

// ## Review

// You are required to submit the following for review:

// * The URL of the deployed application.

// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

// - - -
// © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.