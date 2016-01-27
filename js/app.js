var FlirtrModel = {  
   
   init: function(){
       var score=0;
   },
    
   /* It sets the phrase to analyse */
   analyse : function (phrase){
        var res = phrase.split(" ");
        score=0;
        for(var i=0;i<res.length;i++){
            for(var j=0;j<patterns.length;j++){
                if(res[i]==patterns[j].word){
                    score=score+patterns[j].score;
                }
            }
        }
   },
  
   /* Returns the flirting score (number) of the phrase.
    * It is computed by looking for flirting patterns, 
    * adding up the individual scores of the matching
    * patterns (unless the pattern neutraliser is found to 
    * the right of the matching word)
    */
   getScore: function () {
       return score;
   }
         
};

var octopus ={
    init: function(){
        view.init();
        FlirtrModel.init();
    },
    controllatext: function(testo){
        FlirtrModel.analyse(testo);
    },
    getscore: function(){
        return FlirtrModel.getScore();
    }
};

var view ={
    init: function(){
        view.startbutton();
    },
    startbutton: function(){
        $(".check").on("click", function (event) {
                  var text=$("#phrase").val();
                  octopus.controllatext(text);
                  var punti=octopus.getscore();
                  $(".answer").html("Score :"+punti);
              })
    }
};



octopus.init();


