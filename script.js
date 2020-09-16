//global variables
let container = $('.container');
let timeArr = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];
let jumbo = $('.jumbotron');

//time element using moment.js displaying day, month, year; hour, minute and second
let timeElement = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
jumbo.append(timeElement);


//for loop to loop through the hours in the work day
for (let i = 0; i < timeArr.length; i++) {


    //local variable storing the array of hours in the work day
    let time = timeArr[i];

    //logic relating to the hours section on the page
    let sectionEl = $('<section>').addClass('row rounded align-items-center');
    let hourEl = $('<div>').addClass('time-block col text-center');
    hourEl.text(time);
    sectionEl.append(hourEl);

    //logic relating to the text input area on the page
    let inputEl = $('<div>').addClass('col-lg-6 col text-center');
    let input = $('<textarea>');
    $(this).attr('cols', '50')
    input.attr('id', time);
    inputEl.append(input);
    sectionEl.append(inputEl);
    let savedText = localStorage.getItem(time);
    input.val(savedText);

    //logic for the save button on the page
    let saveEl = $('<div>').addClass('col-lg-3 col text-center align-items-center');
    let saveBtn = $('<button>').addClass('saveBtn');
    saveBtn.attr('date-time', time);
    saveBtn.text('save');
    saveEl.append(saveBtn);
    sectionEl.append(saveEl);
    container.append(sectionEl);

    //stores text input to local storage
    saveBtn.on("click", function(){
        localStorage.setItem(time, input.val())
    });

    //logic to set past, present, and future color changes using moment.js
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

}