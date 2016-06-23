$(document).ready(function(){

var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};


//var ctx = document.getElementById("myCanvas").getContext("2d");
var ctx = $("#myCanvas").get(0).getContext("2d");
var myCanvas = new Chart(ctx, {
	type: 'doughnut',
	data: data,
});

$function myCanvasTransform (argument) {
	// body...
}


});

