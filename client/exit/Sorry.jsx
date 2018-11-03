import React from "react";

import {Centered} from "meteor/empirica:core";
import {FormGroup, Intent, TextArea} from "@blueprintjs/core";

export default class Sorry extends React.Component {
  static stepName = "Sorry";

  render() {
    const { player, hasNext, onSubmit } = this.props;
    let msg;
    switch (player.exitStatus) {
      case "gameFull":
        msg = "All games you are eligible for have filled up too fast...";
        break;
      case "gameLobbyTimedOut":
        msg = "There were NOT enough players for the game to start..";
        break;
      // case "playerLobbyTimedOut":
      //   msg = "???";
      //   break;
      case "playerEndedLobbyWait":
        msg =
          "You decided to stop waiting, we are sorry it was too long a wait.";
        break;
      default:
        msg = "Unfortunately the Game was cancelled...";
        break;
    }

    return (
      <Centered>
        <div className="score">
          <h1>Sorry!</h1>

          <p>Sorry, you were not able to play today! {msg}</p>

          {/*{player.exitStatus !== "gameFull" ? (*/}

          {/*<p>*/}
          {/*Please return the HIT now so our platform does register your MTurk.*/}
          {/*Please come back for one of the next batches of Part 1. We will submit new*/}
          {/*batches on Monday the 6th of August and Tuesday the 7th of August*/}
          {/*(batches of 100 games every hour starting at 2PM ET until 5PM).*/}
          {/*</p>*/}

          {player.exitStatus === "gameLobbyTimedOut" ? (
            <p>
              Please submit <em>{player._id}</em> as the survey code in order to
              receive the $0.5 base payment for your time today.
            </p>
          ) : null}

          {player.exitStatus === "gameFull" ? (
            <p>
              Please submit <em>FZgameFullCSOP213093</em> as the survey code in
              order to receive the $0.1 showing up bonus.
            </p>
          ) : null}

          <p>
            <strong>Please come back for the next scheduled game.</strong>{" "}
            {/*We will send an email notification once the next  HIT is scheduled.*/}
          </p>

            <FormGroup
                className={"form-group"}
                inline={false}
                label={"Feedback, including problems you encountered."}
                labelFor={"fair"}
                //className={"form-group"}
            >
              <TextArea
                  id="feedback"
                  name="feedback"
                  large={true}
                  intent={Intent.PRIMARY}
                  onChange={this.handleChange}
                  value={feedback}
                  fill={true}
              />
            </FormGroup>

          {/*This is not really needed .. all of these people failed to start the game .. if we allow them to submit, then their data will be deleted, we don't want that*/}
          <p>
            {hasNext ? (
              <button
                className="pt-button pt-intent-primary"
                type="button"
                onClick={() => onSubmit()}
              >
                Done
              </button>
            ) : (
              ""
            )}
          </p>
        </div>
      </Centered>
    );
  }
}
