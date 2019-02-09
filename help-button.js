export function HelpButton (){
    $("#game-head")
            .append($("<button>")
                .text("HELP!")
                .addClass("help-button")
                .on("click", (event)=>{
                    event.preventDefault();
                    this.notMatch = Array.from($(".not-match"));
                    this.notMatchId = this.notMatch.map(i =>{
                            return i.id
                    });
                    this.allDuplicates = this.notMatchId.filter((item, index) =>{
                        return this.notMatchId.indexOf(item) != index
                    });
                    this.firstDuplicate = this.notMatch.map( (j) => {
                        return j.id == this.allDuplicates[0]
                    });
                    for(var k = 0; k < this.notMatch.length; k++){
                        if(this.firstDuplicate[k]){
                            this.notMatch[k].parentNode.previousSibling.classList.add("help-class") 
                        }
                    };
                    setTimeout(()=>{
                        $(".help-class").removeClass("help-class");
                    }, 500)
                }))
}