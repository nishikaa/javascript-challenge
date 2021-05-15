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
    
    // select the input date to get the html nodes
    
    var inputDate = d3.select("#datetime")

    var inputDate = inputDate.property("value").trim();

    console.log(inputDate);

    var selectData = tableData.filter(tableData => tableData.datetime === inputDate);
    console.log(selectData);

    if (inputDate.length!==0){
        

        if(selectData.length !==0) {

        //if(inputDate ===tableData.datetime) {
            
            insertData(selectData);
        }

                else {
                // Clear out the previously loaded HTML
                tableBody.html("");
                // message for no data
                tableBody.append("tr").append("td").text("No sightings on this date.");
            }
    }   
    else {

        tableBody.html("");

        insertData(tableData)
    }    
    })
    

    //reset button click
    //var resetBtn = d3.select("#btnReset");
    //resetBtn.on("click", () => {
        //window.location.href = "index.html";
        //document.getElementById("searchDate").value='';
        
        //Load original dataset
        //insertData(tableData);
    //})
  