//Würfelspiel - eine Funktion für alles

function rollDice(){
    //Zufallszahl für beide Spieler zwischen 1 & 6
    let player1 = Math.floor(Math.random()*6)+1;
    let player2 = Math.floor(Math.random()*6)+1;
    //Ergebnis des Würfels tauscht das jeweilige Würfelbild der Spieler aus
    document.querySelector('.img1').src='./images/dice'+ player1 +'.png';
    document.querySelector('.img2').src='./images/dice'+ player2 +'.png';
    //Headline wird verändert je nachdem wie das Ergebnis ausfällt
    if(player1 > player2){
        document.querySelector('h1').innerHTML= '🌟 Player 1 wins!';
    }else if(player1 < player2){
        document.querySelector('h1').innerHTML= '🌟 Player 2 wins!';
    }else{
        document.querySelector('h1').innerHTML= 'Draw!';
    }
}
