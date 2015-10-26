$(document).ready(function(){
  var cardNums = []
  var matches=0;
  numOfClicks = 0;
  var clickCounter=0;
  click = true
  //console.log(clickCounter)
$('td').on("click",chooseCard)
$('button').on("click",resetBoard)

  function chooseCard(){
    numOfClicks++;
    $('#clicks').text(numOfClicks)
    //console.log(numOfClicks)
    //console.log(clickCounter)
    clickCounter=clickCounter+1
    var cardNum=$(this).text()
    cardNums.unshift(cardNum)
    $(this).attr("class","content clicked touched")
    //console.log(cardNums)
    //console.log(clickCounter)
    //console.log(clickCounter)
    if(clickCounter===2){
      var match = checkForMatch(cardNums[0],cardNums[1])
      //console.log(match)
      //$('td').removeAttr("class","content")
      clickCounter = 0
      cardNum = []
        if(match===true){
          $('.clicked').css('visibility','hidden')
          console.log(matches)
          if(matches===8){
            winGame(numOfClicks)
          }
        }
        else{
          $('td').removeAttr("class","content")
        }
      }
    }


  function checkForMatch(num1,num2){
    if(num1===num2){
      matches+=1
      $("#matches").text(matches)
      alert("It's a match!")
      //console.log(matches)
      return true;
      }

    else{
      alert("Sorry! Not a match, try again!")
      return false;
    }
  }
})

  function winGame(numOfClicks){
    alert("Congratulations, you win! You won the game in " + numOfClicks +" clicks." )
    resetBoard()
  }
    function resetBoard(){
      $('td').removeAttr("class","content")
      $('td').css('visibility','visible')
      numOfClicks = 0
      $('#clicks').text(numOfClicks)
      matches = 0
      $("#matches").text(matches)
  //randomizeBoard()
}
