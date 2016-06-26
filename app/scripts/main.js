$(document).ready(function(){

var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [30, 50, 10],
           
        }]
};


//var ctx = document.getElementById("myCanvas").getContext("2d");
var ctx = $("#myCanvas").get(0).getContext("2d");
var myCanvas = new Chart(ctx, {
	type: 'doughnut',
	data: data,
    options: {
        responsive: true
    }
});

$function myCanvasTransform (argument) {
	// body...
}


});

