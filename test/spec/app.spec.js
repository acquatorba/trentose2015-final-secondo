/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the FlirtrModel object */

describe("Flirtr", function() {

  it("vedere il punteggio", function() {  
      octopus.init();
      var punti=FlirtrModel.getScore();
      expect().toBe("0");
  });    
 
});
