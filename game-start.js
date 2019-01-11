import * as jquery from "/lib/jquery.js"
import {GenerateImages} from "./generate-images.js";
import {GameLogic} from "./game-logic.js";


export function gameStart(fields){
    var images = new GenerateImages(fields);
    var gameLogic = new GameLogic(fields);
    var $mainContainer = $("#main-container");
    if (fields == 12){
        gameLogic.startCountdown();
        var $gameHead = $("<div>")
                            .addClass("game-head")
                            .append($("<span>")
                            .addClass("timer")
                            .html("Time: " + gameLogic.timer))
                            .append($("<span>")
                            .addClass("moves")
                            .html("Flips: " + gameLogic.flips));
        $mainContainer
            .html("")
            .addClass("twelve-fields")
            $mainContainer.append($gameHead)
        for(var i = 0; i < images.imagesArray.length; i++){
            var $field = $("<div>")
            $field.addClass("field")
                            .addClass("field-back")
                .on("click", (event) =>{
                var clicked = event.target;
                if (clicked.classList.contains("selected") || clicked.classList.contains("match") || clicked.classList.contains("picture")) {
                    return;
                  }
                    if(gameLogic.moves < 2){
                        gameLogic.moves++
                        if(gameLogic.moves == 1){
                            gameLogic.match1 = clicked.lastChild.src
                            setTimeout(function(){
                                clicked.classList.add("selected");
                                clicked.classList.remove("field-back")
                                clicked.classList.add("field-front")
                            }, 300);
                            setTimeout(function(){
                                clicked.lastChild.classList.remove("hidden")
                            }, 500);
                            
                        }else{
                            gameLogic.match2 = clicked.lastChild.src
                            gameLogic.flips++
                            $(".moves").html("Flips: " + gameLogic.flips);
                            setTimeout(function(){
                                clicked.classList.add("selected")
                                clicked.classList.remove("field-back")
                                clicked.classList.add("field-front")
                            
                            }, 300)
                            setTimeout(function(){
                                clicked.lastChild.classList.remove("hidden")
                            }, 500)
                            
                        }   
                    }
                    if(gameLogic.match1 !== "" && gameLogic.match2 !== ""){
                        if(gameLogic.match1 == gameLogic.match2){
                            setTimeout(function(){
                                $(".selected").addClass("match")
                                gameLogic.match();
                            }, 1500)
                            
                        }else{
                            setTimeout(gameLogic.reset, 1500);
                        }
                    }
                })
            var picture = $("<img>")
            picture.attr("src", images.imagesArray[i].src)
                .addClass("picture")
                .addClass("hidden")
            $field.append(picture)
            
            $mainContainer.append($field);
        }
    }else if(fields == 16){
        $mainContainer
            .html("")
            .addClass("sixteen-fields")
    }else if(fields == 20){
        $mainContainer
            .html("")
            .addClass("twenty-fields")
    }else if(fields == 24){
        $mainContainer
            .html("")
            .addClass("twentyfour-fields")
    }

}