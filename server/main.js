import Empirica from "meteor/empirica:core";

import "./callbacks.js";
import "./bots.js";

// import the constant values for all the factors
import { SceneSettings } from "./constants";

// gameInit is where the structure of a game is defined.
// Just before every game starts, once all the players needed are ready, this
// function is called with the treatment and the list of players.
// You must then add rounds and stages to the game, depending on the treatment
// and the players. You can also get/set initial values on your game, players,
// rounds and stages (with get/set methods), that will be able to use later in
// the game.
Empirica.gameInit((game, treatment, players) => {
  // Dan : print out the game treatment/conditions with player id
  console.log(
    "Init Game with a treatment: ",
        treatment,
    ", with workers : ",
        _.pluck(players, "id")
    );
  players.forEach((player, i) => {
    // Dan : create avatar for each player using jdenticon.com/#icon-D3
    player.set("avatar", `/avatars/jdenticon/${player._id}`);
    player.set("score", 0);
  });

  // Dan : Q? Why not using treament directly but use 
  // game.treatment to access the data 
  let numRounds = 1;
  if (game.treatment.nRounds > 0)
  {
    numRounds = game.treatment.nRound;
  }
  _.times(numRounds, i => {
    const round = game.addRound();
    round.set("task", "manipulative");
    const stage = round.addStage({
      name: "writing",
      displayName: "writing",
      // Dan : 30 mins per rounds? Maybe change it to var later
      durationInSeconds: 30 * 60 
    });
    //stage.set("task", "manipulative");
  });
});
