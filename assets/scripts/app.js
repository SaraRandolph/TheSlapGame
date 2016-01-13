var health = 100;

var hits = 0;

var playerHealth = document.getElementById("player-health");

var hitsIncrease = document.getElementById("hits");

function slap(){
    health = health - 1; 
    hits = hits +1;
    upDate();
    }
 
function punch(){
    health = health - 5; 
    hits = hits +1;
    upDate();
    }
    
function kick(){
    health = health - 10; 
    hits = hits +1;
    upDate();
    }


function upDate(){
    playerHealth.innerHTML = health.toString(); 
    hitsIncrease.innerHTML = hits.toString();
}






upDate();