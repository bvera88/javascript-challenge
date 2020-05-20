// from data.js
// var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
// YOUR CODE HERE!
console.log(data);

// data.forEach(function(aliensreport) {
//     console.log(aliensreport);
//     var row = tbody.append("tr");
//     Object.entries(aliensreport).forEach(function([key, value]) {
//         console.log(key, value);

//         var cell = row.append("td");
//         cell.text(value);
//     });
// });


// refactoring the method here
data.forEach(aliensreport => {
    var row = tbody.append("tr");
    row.append ("td").text(aliensreport.datetime);
    row.append ("td").text(aliensreport.city);
    row.append ("td").text(aliensreport.state);
    row.append ("td").text(aliensreport.country);
    row.append ("td").text(aliensreport.shape);
    row.append ("td").text(aliensreport.durationMinutes);
    row.append ("td").text(aliensreport.comments);
});

var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();
    var inputfield =d3.select("#datetime");
    var inputValue = inputfield.propery("value");

    console.log(inputValue)
    d3.select("tbody").text(inputValue)  
};

// inputfield.on("field",function() {
//     var newText =d3.event.target.value;
//     console.log(newText);
// })

// inputfield.on("change",handleClick);