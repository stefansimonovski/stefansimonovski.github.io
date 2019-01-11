import * as jquery from "/lib/jquery.js"
export function GameLogic(fields){
    this.moves = 0;
    this.match1 = "";
    this.match2 = "";
    this.delay = 1500;
    this.timer = 100;
    this.flips = 0;
    var that = this;
    this.reset = function(){
        that.moves = 0;
        that.match1 = "";
        that.match2 = "";
        var selected = Array.from($(".selected"))
        selected.forEach(element => {
            element.classList.remove("selected")
            element.classList.remove("field-front")
            element.classList.add("field-back");
            element.lastChild.classList.add("hidden")
        });
    }
    this.match = function(){
        that.moves = 0;
        that.match1 = "";
        that.match2 = "";
        var matched = $(".match")
        if(matched.length == fields){
            alert("You Win")
        }
        var selected = Array.from($(".selected"))
        selected.forEach(element =>{
            element.classList.remove("selected")
        })
    }
    this.startCountdown = function(){
        return setInterval( ()=>{
            this.timer--
            $(".timer").html("Time: " + that.timer)
            if(that.timer == 0){
                alert("Game Over");
                $("#main-container").html("");
            }
        }, 1000);
    }
}