var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // call fight function with enemy-robot
    fight(pickedEnemyName);
}

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask players if theyd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
            // if yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //  subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
        } 
    }

    // remove the enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");

        //award player money for winning
        playerMoney = playerMoney + 20;
        
        //leave while() loop since enemy is dead
        break;
         } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
  console.log(
      playerName + " attacked " + enemyName + ". " + enemyName, " now has " + enemyHealth + " health remaining." );

      
          break;
      }
      
      
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
  console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining "
  );

  // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
        // leave while() loop if player is dead
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    }
}



    if (promptFight === "FIGHT" || promptFight === "fight") {
        

    // check player's health

if (playerHealth <= 0) {
    window.alert(enemyName + " has died!");
    break;
    } 
    
    
    
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
    // if player chooses to skip
    
    // if no (false), ask questions again by running fight() again
    else {
        // fight();
    }
}


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

