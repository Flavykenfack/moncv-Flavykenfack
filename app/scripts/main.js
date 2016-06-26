$(document).ready(function(){
'use strict';

$('a').smoothScroll();

// var data = {
//     labels: [],
//     datasets: [
//         {
//             data: [30,70],
//             backgroundColor: [
//                 "#FF6384"
//             ],
//             hoverBackgroundColor: [
//                 "#FF6384"
//             ]
           
//         }]
// };

// var ctx = $("#myCanvas").get(0).getContext("2d");
// var myCanvas = new Chart(ctx, {
// 	type: 'doughnut',
// 	data: data,
//     options: {
//         responsive: true
//     }
// });

var listObj = $('.progress-bar');

    listObj.each(function(){
        var dataNow = $(this).attr('aria-valuenow');
        var data1 = $(this).attr('aria-valuemax')-dataNow;
        var newCanvas = $('<canvas> </canvas>');
        $(this).parent().replaceWith(newCanvas);

        var data = {
        labels: [],
        datasets: [
            {
                data: [dataNow, data1],
                backgroundColor: [ "#FF6384" ],
                hoverBackgroundColor: [ "#FF6384"]
               
            }]
        };

        var myCanvas = new Chart(newCanvas, {
        type: 'doughnut',
        data: data,
        options: {
         responsive: true
            }
        });

    });


});

