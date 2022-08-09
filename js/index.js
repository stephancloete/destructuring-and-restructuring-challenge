const dataRx= {
    title1 : "Quiet Time",
    title2 : "Study",
    title3 : "Go Jogging",
    title4 : "Eat Breakfast",

    description1 : "",
    description2 : "",
    description3 : "This is going to help to reach my goals and live my life to the fullest",
    description4 : "",

    date1 : "05/02/2020",
    date2 : "01/02/2020",
    date3 : "tomorrow",
    date4 : "today",

    time1 : "08:12",
    time2 : "13:15",
    time3 : "12:36",
    time4 : "13:25",

    completed1 : false,
    completed2 : true,
    completed3 : false,
    completed4 : true,

    priority1 : "red",
    priority2 : "yellow",
    priority3 : "black",
    priority4 : "white",

    tags1 : ["Personal", "Work", "School"],
    tags2 : ["Personal", "School", "Diary Entry"],
    tags3 : ["Content Creation", "Personal"],
    tags4 : ["Personal"]
  }

//isolate title properties and store in new object

var title = {};
var description = {};
var date = {};
var time = {};
var completed = {};
var priority = {};
var tags = {};

  for (x in dataRx){
    if (x.includes("title")){   
        let objectSource = {[x]:dataRx[x]}
        let objectReturn = Object.assign(title, objectSource); 
    }
    else if (x.includes("description")){
        let objectSource = {[x]:dataRx[x]}
        let objectReturn = Object.assign(description, objectSource);   
    }
    else if (x.includes("date")){
        let objectSource = {[x]:dataRx[x]}
        let objectReturn = Object.assign(date, objectSource);  
    }
    else if (x.includes("time")){
        let objectSource = {[x]:dataRx[x]}
        let objectReturn = Object.assign(time, objectSource);   
    }
    else if (x.includes("completed")){
        let objectSource = {[x]:dataRx[x]}
        let objectReturn = Object.assign(completed, objectSource);  
    }
    else if (x.includes("priority")){
        let objectSource = {[x]:dataRx[x]}
        let objectReturn = Object.assign(priority, objectSource);  
    }
    else if (x.includes("tags")){
        let objectSource = {[x]:dataRx[x]}
        let objectReturn = Object.assign(tags, objectSource);  
    }
  }
  
  console.log(title);
  console.log(description);
  console.log(date);
  console.log(time);
  console.log(completed);
  console.log(priority);
  console.log(tags);
