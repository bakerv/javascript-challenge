
var form = d3.select("#form");
var button = d3.select("#button");

form.on("submit", dateFilter);
button.on("click", dateFilter);

function displayData(inputData){
    // use d3 to set the cursor on specific html tags
    var tbody = d3.select("tbody");
    var thead = d3.select("thead");
   
    

    // Fill the data table using the values from each object in the data set
    inputData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    })

    // Create table header using they keys from the data object
    let header = thead.append("tr");
    Object.entries(inputData[0]).forEach(([key,value]) => {
        let contents = header.append("th");
        contents.text(key);
    })
        }

function test() {
    d3.event.preventDefault();
    var inputElement = d3.select("#date-input")
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    d3.select("h1").text(inputValue);
}

function dateFilter(){ 
    d3.event.preventDefault();
    var filterValue = d3.select("#date-input").property("value");
    var dateFiltered = data.filter(object => object.datetime === filterValue);
    displayData(dateFiltered)
    
}

displayData(data)