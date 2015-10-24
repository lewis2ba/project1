$(document).ready(function(){
  var cardNums = []
  var matches=0;
  var clickCounter=0;
  //console.log(clickCounter)
$('td').on("click",chooseCard)

  function chooseCard(){
    //console.log(clickCounter)
    clickCounter=clickCounter+1
    var cardNum=$(this).text()
    cardNums.unshift(cardNum)
    $(this).attr("class","content clicked")
    //console.log(cardNums)
    console.log(clickCounter)
    //console.log(clickCounter)
    if(clickCounter===2){
      var match = checkForMatch(cardNums[0],cardNums[1])
      console.log(match)
      //$('td').removeAttr("class","content")
      clickCounter = 0
      cardNum = []

        if(match===true){
          $('.clicked').css('visibility','hidden')
        }
        else{
          $('td').removeAttr("class","content")
        }
    }

  }

  function checkForMatch(num1,num2){
    if(num1===num2){
      matches+=1
      alert("its a match!")
      //console.log(matches)
      return true;
    }
    else{
      alert("sorry! not a match, try again")
      return false;
    }
  }
})
