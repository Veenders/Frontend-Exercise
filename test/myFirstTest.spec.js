import {rockPaperScissors} from '../src/index.js';

describe('Test my rock Paper Scissors App',function(){
  describe('Test hand1 wins',function(){
    test('Test scissors over paper',function(done){
      var result = rockPaperScissors("scissors","paper");
      expect(result.msg).toBe("scissors vs paper => scissors wins!");
      expect(result.winner).toBe("hand1")
      done();
    })
    test('Test paper over rock',function(done){
      var result = rockPaperScissors("paper","rock");
      expect(result.msg).toBe("paper vs rock => paper wins!");
      expect(result.winner).toBe("hand1")
      done();
    })
    test('Test rock vs scissors',function(done){
      var result = rockPaperScissors("rock","scissors");
      expect(result.msg).toBe("rock vs scissors => rock wins!")
      expect(result.winner).toBe("hand1")
      done();
    })
  })
  describe('Test hand2 wins',function(){
    test('Test paper over scissors',function(done){
      var result = rockPaperScissors("paper","scissors");
      expect(result.msg).toBe("paper vs scissors => scissors wins!")
      expect(result.winner).toBe("hand2")
      done()
    })
    test('Test rock over paper',function(done){
      var result = rockPaperScissors("rock","paper");
      expect(result.msg).toBe("rock vs paper => paper wins!")
      expect(result.winner).toBe("hand2")
      done();
    })
    test('Test scissors over rock',function(done){
      var result = rockPaperScissors("scissors","rock");
      expect(result.msg).toBe("scissors vs rock => rock wins!")
      expect(result.winner).toBe("hand2")
      done();
    })
  })
  describe('Test Ties',function(){
    test('Test paper over paper',function(done){
      var result = rockPaperScissors("paper","paper");
      expect(result.msg).toBe("paper vs paper => tie!");
      expect(result.winner).toBe("tie")
      done()
    })
    test('Test rock over rock',function(done){
      var result = rockPaperScissors("rock","rock");
      expect(result.msg).toBe("rock vs rock => tie!")
      expect(result.winner).toBe("tie")
      done();
    })
    test('Test scissors over scissors',function(done){
      var result = rockPaperScissors("scissors","scissors");
      expect(result.msg).toBe("scissors vs scissors => tie!")
      expect(result.winner).toBe("tie")
      done();
    })
  })
  describe('Test incorrect values',function(){
    test('Test scis over scissors',function(done){
      expect(function() {
        rockPaperScissors("scis","scissors")
      }).toThrow("Los valores introducidos han de ser rock, paper o scissors")
      done();
    })
    test('Test scissors over scis',function(done){
      expect(function() {
        rockPaperScissors("scis","scissors")
      }).toThrow("Los valores introducidos han de ser rock, paper o scissors")
      done();
    })
    test('Test scis over scis',function(done){
      expect(function() {
        rockPaperScissors("scis","scis")
      }).toThrow("Los valores introducidos han de ser rock, paper o scissors")
      done();
    })
  })
})
