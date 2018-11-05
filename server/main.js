/*
* Dan : Set up the game for the narrative task
* */
import Empirica from "meteor/empirica:core";

import "./callbacks.js";
import "./bots.js";
import { SceneSettings, rdmPrompt } from "./constants";
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

  // Dan : UI related initiation better happens here
    let charNames = [];
    let charPrompts = {};
    // Dan : fix the scenario for now. May change it later
    SceneSettings[0].characters.forEach((character) => {
        charNames.push(character.name);
        // Dan : use random prompt for now
        charPrompts[character.name] = _.shuffle(rdmPrompt); //character.prompt;
    });
    // shuffle the name of all the characters.
    _.shuffle(charNames);
    // Dan : init player
    // Dan : add avatar
    // to do more go to https://jdenticon.com/#icon-D3
    const avatarNames = ["Colton", "Aaron"];
    // similar to the color of the avatar
    const nameColor = ["#3D50B7", "#70A945"];

    players.forEach((player, i) => {
        player.set("name", charNames[i]);
        player.set("avatar", `/avatars/jdenticon/${avatarNames[i]}`);
        player.set("nameColor", nameColor[i]);
        player.set("score", 0);
        player.set("satisfied", false)
    });

    // Dan : play the sound on the UI when the game starts to remind the user
    // Dan : note - need to restart the batch to add new var in server
    game.set("justStarted", true);
    game.set("scenario", SceneSettings[0].sceneDesc);

    // Dan : we'll have 1 round, each task is 3 stage
    const round = game.addRound();
    let numStages = 1;
    // Dan : defined numStages just in case nRounds is not specified in
    // the treatment
    if (game.treatment.nRounds > 1)
    {
        numStages = game.treatment.nRounds;
    }

    // Dan :
    _.times(numStages, i => {
        const stage = round.addStage({
            name: "writing-" + i.toString(),
            displayName: "Story " + (i+1).toString(),
            durationInSeconds: game.treatment.stageDuration
        });
        // Dan : add the value of prompts for each stage
        let tempPrompts = {};
        // Dan : no prompt for the first rounds.

        if (i > 0)
            // first rounds is empty
            {
                charNames.forEach((name) => {
                    tempPrompts[name] =
                        charPrompts[name][i]});

            }
        else {
                charNames.forEach((name) => {
                    tempPrompts[name] =
                        "";
            });
        }
        stage.set("task", tempPrompts);
        // Dan : use this to control the turn taking. By default, Anne starts first
        stage.set("whosTurn", players[0]._id);
    });
});
