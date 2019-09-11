var xseq = [0,1,2,3,4,4,3,2,1,0];
var yseq = [0,1,0,0,1,0,1,1,0,1];

var count = 0;

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
    
    for(var i = 0; i < 10; i++){
        console.log(wordList[yseq[i]][xseq[i]]);
    }

    const articles = ['un', 'una'];
    
    var $buttons = $('.btn');
    var elOrLa = yseq[count];
    var article = articles[elOrLa];
    var $goodBtn = $('#' + article + '-btn');
    
    var $word = $('#test-word');
    var word = wordList[yseq[count]][xseq[count]];
    $word.text(word);
    
    $buttons.click(function() {
        if (this.id == $goodBtn[0].id) {
            console.log(this.id);
            count++;
            $('html').load(location.href+'html');
            console.log(count);
            // location.reload(true);
        } else {
            console.log(this.id);
            count++;

        }
    });
}
setWord();