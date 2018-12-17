/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var totalScore = q1(q1Result) + q2(q2Result) + q3(q3Result) + q4(q4Result);
        placement(totalScore);
    });

});
function placement(total){
    if(total === 10){
        $(".result").html("congratulatations you live in New York");
    }
     if(total > 8){
        $(".result").html("congratulatations you live in New York");
    }
     if(total < 5){
        $(".result").html("congratulatations you live in New York");
        
    } if(total < 9){
        $(".result").html("congratulatations you live in New York");
    }
}



function q1(a1) {
    if(a1  === "Winter") {
        return 2;
    }
     if(a1 === "Spring") {
        return 4;
    }
     if(a1 === "Fall") {
        return 3;
    }
     if(a1 === "Summer") {
        return 2;
    }
    return 0;
}

function q2(a2) {
    if(a2  === "Pizza") {
        return 2;
    }
     if(a2 === "Soup") {
        return 4;
    }
     if(a2 === "Chicken") {
        return 3;
    }
     if(a2 === "Bagels") {
        return 2;
    }
    return 0;
}
function q3(a3) {
    if(a3  === "Lake") {
        return 2;
    }
     if(a3 === "Pool") {
        return 4;
    }
     if(a3 === "Beach") {
        return 3;
    }
    return 0;
    
}
function q4(a4) {
    if(a4  === "Yellow") {
        return 2;
    }
     if(a4 === "Red") {
        return 4;
    }
     if(a4 === "Blue") {
        return 3;
    }
    return 0;
}
