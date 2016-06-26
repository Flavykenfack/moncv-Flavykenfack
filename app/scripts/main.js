$(document).ready(function(){
'use strict';
$('a').smoothScroll();

var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [30, 50, 100],
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
    options: {
        responsive: true
    }
});

if( $('.progress-bar').attr('role') === "progressbar") { 
    console.log("yes");
}else{
    console.log('no');
};

var listObj1  = $('.progress-bar'); 

var d1 = $('.progress-bar').attr('aria-valuenow');


});

