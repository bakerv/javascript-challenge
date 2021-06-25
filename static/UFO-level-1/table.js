
function convertData(saveLocation, dataSource){
    // Loop through each Object in the data array
   dataSource.forEach((ufObject) => {
       // insert a new row for each Object
       let row = saveLocation.insertRow();

       // Loop through all keys in each Object
       Object.entries(ufObject).forEach(([key,value]) => {
           // Create and fill cells with values from the Objects keys
          let cell = row.insertCell();
          let contents = document.createTextNode(ufObject[key]);
          cell.appendChild(contents);
       })
   })

   // After creating the table body, add the table heads
   let rowHeader = saveLocation.createTHead().insertRow();
   Object.entries(dataSource[0]).forEach(([key, value]) =>{
       let tableHeader = document.createElement("th");
       let contents = document.createTextNode(key);
       tableHeader.appendChild(contents);
       rowHeader.appendChild(tableHeader);
   })
}
// Inspiration for this function came from Valentino Gagliardi www.valentiog.com

let saveLocation = document.querySelector("table");
let dataSource = data;
convertData(saveLocation, dataSource);