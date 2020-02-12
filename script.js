    $.get("data.txt", function(data) {
var xVal = 0;
var allLines = data.split('\n');
var dps = [];

for(var i=0; i< allLines.length; i++) {
   xVal +=.25;
   dps.push({x : xVal, y: Number(allLines[i])});
}

var chart = new CanvasJS.Chart("chartContainer",{
    title :{
        text: "Chart using Text File Data"
    },
    data: [{
        type: "line",
        dataPoints : dps
    }]
});
chart.render();
},'text');