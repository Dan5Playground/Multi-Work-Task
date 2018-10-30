/*
* Dan : Set up the game for the narrative task
* */
import Empirica from "meteor/empirica:core";

import "./callbacks.js";
import "./bots.js";
import { SceneSettings } from "./constants";
import React from "react";

// gameInit is where the structure of a game is defined.
// Just before every game starts, once all the players needed are ready, this
// function is called with the treatment and the list of players.
// You must then add rounds and stages to the game, depending on the treatment
// and the players. You can also get/set initial values on your game, players,
// rounds and stages (with get/set methods), that will be able to use later in
// the game.

Empirica.gameInit((game, treatment, players) => {
  console.log(
    "Game with a treatment: ",
    treatment,
    " will start, with workers",
    _.pluck(players, "id")
  );

    // Dan : leave it for now and maybe change it to the character's name.

    let charNames = [];
    let charPrompts = {};
    //console.log(SceneSettings);
    // Dan : fix the scenario for now. May change it later
    SceneSettings[0].characters.forEach((character) => {
        charNames.push(character.name);
        charPrompts[character.name] = character.prompt;
    });


  //play the sound on the UI when the game starts
    // Dan : need to restart server to add new var
    game.set("justStarted", true);
    game.set("scenario", SceneSettings[0].sceneDesc);
    // Dan : maybe init the player's name here ~ decide who play whom

    // Dan : we'll have 1 round, each task is 3 stage
    const round = game.addRound();
    let numRounds = 1;
    // Dan : defined numRounds just in case nRounds is not specified in
    // the treatment
    if (game.treatment.nRounds > 1)
    {
        numRounds = game.treatment.nRounds;
    }

    // Dan : loDash ?
    _.times(numRounds, i => {
        const stage = round.addStage({
            name: "writing-" + i.toString(),
            displayName: "Story " + (i+1).toString(),
            durationInSeconds: game.treatment.stageDuration
        });
        // Dan : add the value of IV for each trail
        // Dan : fix them for now
        let tempSceneSettings = {};
        // Dan : no prompt for the first rounds.

        if (i > 0)
            // first rounds is empty
            {
                charNames.forEach((name) => {
                    tempSceneSettings[name] =
                        charPrompts[name][i]});

            }
        else {
                charNames.forEach((name) => {
                    tempSceneSettings[name] =
                        "";
            });
        }
        stage.set("task", tempSceneSettings);
    });
});
