"use strict";$(document).ready(function(){$("a").smoothScroll();var a=$(".progress-bar");a.each(function(){var a=$(this).attr("aria-valuenow"),t=$(this).attr("aria-valuemax")-a,r=$("<canvas> </canvas>");$(this).parent().replaceWith(r);var o={labels:[],datasets:[{data:[a,t],backgroundColor:["#FF6384"],hoverBackgroundColor:["#FF6384"]}]};new Chart(r,{type:"doughnut",data:o,options:{responsive:!0}})})});