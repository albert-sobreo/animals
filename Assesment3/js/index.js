function setWord() {
  
    // Return random int between min (included) and max (excluded)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    const wordList = [
      ["Birds Fly", "Aligators Crawl", "Deers Run", "Rabbits Hop", "Fish Swim"],


      ["Birds Crawl", "Alligators Fly", "Deers Swim", "Rabbits Slither", "Fish Fly"]
    ];

  
    const articles = ['un', 'una'];
    
    var $buttons = $('.btn');
    var elOrLa = Math.round(Math.random());
    var article = articles[elOrLa];
    var $goodBtn = $('#' + article + '-btn');
    
    var $word = $('#test-word');
    var word = wordList[elOrLa][getRandomInt(0, wordList[elOrLa].length)];
    $word.text(word);
    
    $buttons.click(function() {
        if (this.id == $goodBtn[0].id) {
            location.reload(true);
        } else {
            alert('You got the wrong answer');
            $buttons.not($goodBtn).fadeOut();
            $goodBtn.addClass('btn-success').removeClass('btn-primary');
            $word.addClass('bg-danger').removeClass('bg-warning');
        }
    });
}

setWord();