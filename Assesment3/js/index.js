var xseq = [0,1,2,3,4,4,3,2,1,0];
var yseq = [0,1,0,0,1,0,1,1,0,1];
var answ = [];

var sum;

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
    

    const articles = ['un', 'una'];
    
    var $buttons = $('.btn');
    var elOrLa = yseq[count];
    var article = articles[elOrLa];
    var $goodBtn = $('#' + article + '-btn');
    
    var $word = $('#test-word');
    var word = wordList[yseq[count]][xseq[count]];
    $word.text(word);
    
    $buttons.click(function() {
        if(count>=9){
            for(var i = 0; i<10; i++){
                sum = answ[i] + sum;
            };
            console.log(sum);
            return;
        };
        if (this.id == $goodBtn[0].id) {
            console.log("correct");
            count++;
            answ.push(1);
            document.getElementById('test-word').innerHTML = wordList[yseq[count]][xseq[count]];
            elOrLa = yseq[count];
            article = articles[elOrLa];
            $goodBtn = $('#' + article + '-btn');
            
            $word = $('#test-word');
            word = wordList[yseq[count]][xseq[count]];
            $word.text(word);
            console.log(count);
            console.log(answ);
            // location.reload(true);
        } else {
            console.log("wrong");
            count++;
            answ.push(0);
            document.getElementById('test-word').innerHTML = wordList[yseq[count]][xseq[count]];
            elOrLa = yseq[count];
            article = articles[elOrLa];
            $goodBtn = $('#' + article + '-btn');
            
            $word = $('#test-word');
            word = wordList[yseq[count]][xseq[count]];
            $word.text(word);
            console.log(count);
            console.log(answ);
        }
    });
}
setWord();