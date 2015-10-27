$(document).ready(function(){
  var cardNums = []
  var matches=0
  var numOfClicks = 0
  var clickCounter=0
  click = true
  values = ['<img class="content" src="http://www.findthatlogo.com/wp-content/gallery/superheros/thumbs/thumbs_captain-america-logo.gif"/>',
  '<img class="content" src="http://measuredbytheheart.com/wp-content/uploads/2013/07/superman-1024x819.jpg"/>',
  '<img class="content" src="https://s-media-cache-ak0.pinimg.com/736x/b8/ae/6d/b8ae6d84182e85add21b2f78d6d7e4fc.jpg"/>',
  '<img class="content" src="http://www.findthatlogo.com/wp-content/gallery/superheros/thumbs/thumbs_green-lantern-logo.gif"/>',
  '<img class="content" src="http://underscoopfire.com/wp-content/uploads/2012/08/deadpool-logo.png"/>',
  '<img class="content" src="http://cliparts.co/cliparts/zTX/oeB/zTXoeBBLc.png"/>',
  '<img class="content" src="http://blog.signalnoise.com/wp-content/uploads/2013/01/i_spiderman.jpg"/>',
  '<img class="content" src="http://wallpapercave.com/wp/aTLxGYt.jpg"/>',
  '<img class="content" src="http://www.findthatlogo.com/wp-content/gallery/superheros/thumbs/thumbs_captain-america-logo.gif"/>',
  '<img class="content" src="http://measuredbytheheart.com/wp-content/uploads/2013/07/superman-1024x819.jpg"/>',
  '<img class="content" src="https://s-media-cache-ak0.pinimg.com/736x/b8/ae/6d/b8ae6d84182e85add21b2f78d6d7e4fc.jpg"/>',
  '<img class="content" src="http://www.findthatlogo.com/wp-content/gallery/superheros/thumbs/thumbs_green-lantern-logo.gif"/>',
  '<img class="content" src="http://underscoopfire.com/wp-content/uploads/2012/08/deadpool-logo.png"/>',
  '<img class="content" src="http://cliparts.co/cliparts/zTX/oeB/zTXoeBBLc.png"/>',
  '<img class="content" src="http://blog.signalnoise.com/wp-content/uploads/2013/01/i_spiderman.jpg"/>',
  '<img class="content" src="http://wallpapercave.com/wp/aTLxGYt.jpg"/>']
  shuffle(values)
  $('td').each(function(i){
    $(this).append(values[i])
  })
  $('.content').css('visibility','hidden')
  console.log(values)
  $('td').on("click",chooseCard)
  $('.button').on("click",resetBoard)
  $('#animate').css('visibility','hidden')
  function chooseCard(){
    $(this).find(".content").css('visibility','visible')
    $(this).off("click")
    numOfClicks++;
    $('#clicks').text(numOfClicks)
    clickCounter=clickCounter+1
    var cardNum=$(this).html()
    console.log(cardNum)
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
      setTimeout(function(){$('.clicked').css('visibility','hidden')
    $('.content').css("visibility","hidden")},2000)
      return true;
      }

    else{
      console.log(this)
      setTimeout(function(){$('td').removeAttr("class","content")
    $('.content').css("visibility","hidden")},2000)
      return false;
    }
  }
  function winGame(numOfClicks){
    $('#animate').css('visibility','visible')
    $('#animate').text("Congratulations! You won in "+numOfClicks+" clicks!")
    //alert("Congratulations, you win! You won the game in " + numOfClicks +" clicks." )
    var width = $(document).width()-160;

     function goRight() {
         $("#animate").animate({
         left: width
       }, 5000, function() {
          setTimeout(goLeft, 50);
       });
     }
     function goLeft() {
         $("#animate").animate({
         left: 0
       }, 5000, function() {
          setTimeout(goRight, 50);
       });
     }
     setTimeout(goRight, 50);
     setTimeout(function(){resetBoard()},5000)
  }
    function resetBoard(){
      $('td').removeAttr("class","content")
      $('td').css('visibility','visible')
      $('#animate').css('visibility','hidden')
      numOfClicks = 0
      $('#clicks').text(numOfClicks)
      matches = 0
      $("#matches").text(matches)
      shuffle(values)
      console.log(values)
      $('td').each(function(i){
        $(this).empty(values[i])
        $(this).append(values[i])
      })
      $('.content').css("visibility","hidden")
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
