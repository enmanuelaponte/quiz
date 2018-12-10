/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});
function q1(a1) {
    if(a1  === "Winter") {
        return 2
    }
     if(a1 === "Spring") {
        return 4
    }
     if(a1 === "Fall") {
        return 3
    }
     if(a1 === "Summer") {
        return 2
    }
}

function q2(a2) {
    if(a2  === "Winter") {
        return 2
    }
     if(a2 === "Spring") {
        return 4
    }
     if(a2 === "Fall") {
        return 3
    }
     if(a2 === "Summer") {
        return 2
    }
}