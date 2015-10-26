$(document).ready(function(){
  var cardNums = []
  var matches=0;
  var numOfClicks = 0;
  var clickCounter=0;
  click = true
  values = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
  shuffle(values)
  $('td').each(function(i){
    $(this).text(values[i])
  })
  console.log(values)
$('td').on("click",chooseCard)
$('.button').on("click",resetBoard)

  function chooseCard(){
    $(this).off("click")
    numOfClicks++;
    $('#clicks').text(numOfClicks)
    clickCounter=clickCounter+1
    var cardNum=$(this).text()
    cardNums.unshift(cardNum)
    $(this).attr("class","content clicked")
    if(clickCounter===2){
      $('td').off("click",chooseCard)
      var match = checkForMatch(cardNums[0],cardNums[1])
      clickCounter = 0
      cardNum = []
        if(match===true){
          console.log(matches)
          if(matches===8){
            winGame(numOfClicks)
          }
        }
        else{
        }
      }
    }


  function checkForMatch(num1,num2){
    setTimeout(function(){$('td').on("click",chooseCard)},2100)
    if(num1===num2){
      matches+=1
      $("#matches").text(matches)
      setTimeout(function(){$('.clicked').css('visibility','hidden')},2000)
      return true;
      }

    else{
      setTimeout(function(){$('td').removeAttr("class","content")},2000)
      return false;
    }
  }
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
      shuffle(values)
      console.log(values)
      $('td').each(function(i){
        $(this).text(values[i])
      })
}

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
      }

    return array;
  }
})
