function main(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) { // successful response
            var data = JSON.parse(request.responseText);


var table = document.createElement("table");


for (var i = 0; i < data.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = arrItems[i][col[j]];
                }
            };

var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
    
