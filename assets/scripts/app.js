
var items = {
    shield:new Defense("Shield",0.2,"This is an awesome shield!"),
    armour:new Defense("Armour",0.3, "This armour is the best!"),
    fireballs:new Defense("Fireballs",0.4, "These guys kill!")
}


var player = {
    health: 100,
    name: 'Sara',
    hits: 0,
    items: [items.shield, items.armour, items.fireballs],
    
    slap: function(){
        this.health -= 1 * this.addMods(); 
        this.hits = this.hits + 1;
        upDate();
    },
    
    punch : function(){
    this.health -= 5 * this.addMods();  
    this.hits = this.hits +1;
    upDate();
    },
    
    kick : function(){
    this.health -= 10 * this.addMods(); 
    this.hits = this.hits +1;
    upDate();
    },
    
    addMods : function (){
        var total = 0;
        for(var i =0; i<this.items.length; i++){
            total += this.items[i].modifier;
        }
        return total;
    }   
}
// Adds player name
 
function AddPlayer (name, gender,fierce, diet) {
    this.name = name;
    this.gender = gender;
    this.fierce = true;
    this.diet = diet;
}
  
var Sara = new AddPlayer ("Sara","F", true, "Human Flesh");

// changes background

function changeBackground() {
    document.body.style.backgroundColor = "red";
}
 

// Updates  


function upDate(){
    var playerHealthElem = document.getElementById("player-health");
    playerHealthElem.textContent = player.health.toString(); 
  
    var hitsElem = document.getElementById("hits");
    hitsElem.textContent = player.hits.toString();
    
    
 
    if(player.health <= 0){
         changeBackground();
    }   
}
    
// Show Items on Page

function listTools (){
    
    var toolsListElem = document.getElementById('tools-list');
    toolsListElem.innerHTML = " ";
    
    for (var key in items){
        var listElem = document.createElement('li');
        listElem.textContent = items[key].name;
        toolsListElem.appendChild(listElem);
    }
}
// Defense function

function Defense (name, modifier, description){
        this.name = name;
        this.modifier = modifier;
        this.description = description;
     }


// Prompts name 

function namePrompt(name){
    var playerName = prompt ("Welcome! What is your name?");
    if (playerName != null){
        document.getElementById('name-prompt').innerHTML = playerName
    }
      
}




namePrompt();
upDate();
listTools();