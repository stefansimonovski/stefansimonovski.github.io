import * as jquery from "/lib/jquery.js"
import {gameStart} from "/game-start.js"


export function gameSelect(){
    var $mainContainer = $("#main-container");
    var $gameSelect = $("<div>");
    var $select = $("<select>");

    $gameSelect
        .css("text-align", "center")
        .append($("<h1>")
            .html("Welcome To Memory Game")
            .css("margin-bottom", "80px"))
        .append($("<h3>")
            .html("Please select number of Fields and click Start")
            .css("margin-bottom", "150px"))
        .append($select
            .css("padding", "5px 10px 5px 10px")
            .css("font-size", "24px")
            .append($("<option>")
                .attr("value", "12")
                .html("12"))
            .append($("<option>")
                .attr("value", "16")
                .html("16"))
            .append($("<option>")
                .attr("value", "20")
                .html("20"))
            .append($("<option>")
                .attr("value", "24")
                .html("24")))
            .append($("<button>")
            .attr("id", "start-game")
            .html("Start")
            .css("font-size", "24px")
            .css("padding", "5px 10px 5px 10px")
            .on("click", function(){
                gameStart(parseInt($select[0].value))
            }))

    $mainContainer.append($gameSelect)
}