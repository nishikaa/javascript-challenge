// from data.js
var tableData = data;
// view if the files are connecting 
    //console.log(tableData);

// creating references
tableBody=d3.select("tbody")
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Inputing the data into the HTML
var insertData =(dataInput) => {
    tableBody.html("")
    dataInput.forEach(ufoSight => {
        var row = tableBody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSight[column])
        )
    });
}

insertData(tableData);


// Creating an Event Listener for the Button & filter
var button = d3.select("#filter-btn");

button.on("click",() => {
    
    //d3.event.preventDefault(); 
    //tableBody.html("");

    // select the input date and city to get the html nodes
    
    var inputDate = d3.select("#datetime")
    var inputDate = inputDate.property("value").trim();
    //console.log(inputDate);
    var selectDate = tableData.filter(tableData => tableData.datetime === inputDate);
    
    //console.log(selectDate);

    var inputCity = d3.select("#city")
    // console.log(inputCity)
    var inputCity = inputCity.property("value").toLowerCase().trim();
    var selectCity = tableData.filter(tableData => tableData.city === inputCity);
    //console.log(selectCity)


    var selectCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
    //console.log(selectCombinedData)

    //tableBody.html("");  

    //let response = {
        //selectDate, selectCity, selectCombinedData
    //}


        //if(response.selectCombinedData.length !== 0) {
        //insertData(selectCombinedData);
        //}
        //else if(response.selectCombinedData.length === 0 && ((response.selectDate.length !== 0 || response.selectCity.length !== 0))) {
       // insertData(selectDate) || insertData(selectCity);
       // }
        //else {
       //tableBody.append("tr").append("td").text("No Sightings For Selected Criteria");
       // }
// *** if both both date and city entered
    if (inputDate.length!==0 && inputCity.length!==0){
        

        if(selectCombinedData.length !==0) {

        //if(inputDate ===tableData.datetime) {
            tableBody.html("");
            insertData(selectCombinedData);
        }

        else {
        // Clear out the previously loaded HTML
        tableBody.html("");
        // message for no data
        tableBody.append("tr").append("td").text("No sightings on this date in selected city.");
        }
    }
// *** if  only date is entered 
    else if (inputDate.length!==0 && inputCity.length===0){

        if(selectDate.length !==0) {

            //if(inputDate ===tableData.datetime) {
                tableBody.html("");
                insertData(selectDate);
            }
    
        else {
        // Clear out the previously loaded HTML
        tableBody.html("");
        // message for no data
        tableBody.append("tr").append("td").text("No sightings on this date.");
        }

    }

    // *** if only city is entered 
    else if (inputDate.length===0 && inputCity.length!==0){

        if(selectCity.length !==0) {

            //if(inputDate ===tableData.datetime) {
                tableBody.html("");    
                insertData(selectCity);
            }

        else {
        // Clear out the previously loaded HTML
        tableBody.html("");
        // message for no data
        tableBody.append("tr").append("td").text("No sightings at selected city.");
        }

    }

    else {

    tableBody.html("");

    insertData(tableData)
    }   
    

})
