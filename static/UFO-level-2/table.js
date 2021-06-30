
// select the input field and search button
let form = d3.select("#form");
let button = d3.select("#button");

// initialize event monitors
form.on("submit", dateFilter);
button.on("click", dateFilter);

function displayData(inputData){

    // use d3 to set the cursor on specific html tags
    let tbody = d3.select("tbody");
    let thead = d3.select("thead");
    tbody.html("");
    thead.html("");
    

    // Fill the data table using the values from each object in the data set
    inputData.forEach((ufoReport) => {
        let row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key,value]) => {
            let cell = row.append("td");
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

// filter the data using user input
function filterData(){
    function dateFilter(inputData){ 
        d3.event.preventDefault();
        let filterValue = d3.select("#date-input").property("value");
        let filtered;
        if (filterValue === ""){ 
            filtered = inputData
        }   else {
            filtered = inputData.filter(object => object.datetime === filterValue);
            }
        return filtered;
    }

    function cityFilter(inputData){ 
        d3.event.preventDefault();
        let filterValue = d3.select("#city-input").property("value");
        let filtered;
        if (filterValue === ""){ 
            filtered = inputData
        }   else {
            filtered = inputData.filter(object => object.city === filterValue);
            }
        return filtered;
    }

    function stateFilter(inputData){ 
        d3.event.preventDefault();
        let filterValue = d3.select("#state-input").property("value");
        if (filterValue === ""){
            let Filtered = inputData     
        }
        else {
            let Filtered = data.filter(object => object.city === filterValue);
        }
    }

    function countryFilter(inputData){ 
        d3.event.preventDefault();
        let filterValue = d3.select("#country-input").property("value");
        let Filtered = data.filter(object => object.country === filterValue);
    }

    function shapeFilter(inputData){ 
        d3.event.preventDefault();
        let filterValue = d3.select("#shape-input").property("value");
        let Filtered = data.filter(object => object.shape === filterValue);
    }

    let dateFiltered = dateFilter(data);
    let cityFiltered = cityFilter(dateFiltered);
    let stateFiltered = stateFilter(cityFiltered);
    let 
}

displayData(data)