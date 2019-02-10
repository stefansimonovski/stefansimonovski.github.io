export function HelpButton (){
    $("#game-head")
            .append($("<span>")
            .append($("<button>")
                .text("HELP!")
                .addClass("help-button")
                .on("click", (event)=>{
                    event.preventDefault();
                    this.notMatch = Array.from($(".not-match"));
                    this.notMatchId = this.notMatch.map(element =>{
                            return element.id
                    });
                    for(var i = 0; i < this.notMatch.length; i++){
                        if(this.notMatchId[0] == this.notMatchId[i]){
                            this.notMatch[0].parentNode.previousSibling.classList.add("help-class") 
                            this.notMatch[i].parentNode.previousSibling.classList.add("help-class") 
                        }
                    };
                    setTimeout(()=>{
                        $(".help-class").removeClass("help-class");
                    }, 500);
                })))
}