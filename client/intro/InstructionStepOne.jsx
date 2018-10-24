import React from "react";

import { Centered } from "meteor/empirica:core";
import ExampleTaskSingle from "./ExampleTaskSingle";

export default class InstructionStepOne extends React.Component {
  //If you don’t initialize state and you don’t bind methods, 
  //you don’t need to implement a constructor for your React //component.

  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;
    console.log(game);

    // Dan : hard coded data for instructions
    const taskData = {
        sceneDesc : "Charlie wants to invite his new colleague Anne to dinner. " ,
        characters : [{
          name : "Anne",
          // format for prompts :  Char is PROMPT
          prompt : [
            "a manipulative person who always attempts to control a situation" +
            " or a person",
            "Charlie's ex-girlfriend"]},
        {name : "Charlie",
          prompt : [
            "an ethical and creative person",
            "Anne's best friends"]}
                ]};

    return (
      <Centered>
        <div className="instructions">
          <h1>Instructions </h1>
          <p>
              In this task, you need to read the scenario setting and write
              down how you think the story will unfold. Here is an example.
          </p>
          <ul>
                <p>Note:</p>
                <li>This task contains<strong> 3 </strong>rounds. For each round,
                    please fill in at least 6 sentences. 
                </li>
                <li>Try to use the <strong>past tense </strong> of all the verbs.</li>
                <li>
                  <strong>
                    <span style={{color:"#FF0000"}}>Extra credits will be given to the creative and coherent stories.
                    </span>
                  </strong>
                </li>
          </ul>

          <div className="bp3-card">
            <ExampleTaskSingle
                sceneDesc = {taskData.sceneDesc}
                character = {taskData.characters[0].name}
                prompt = {taskData.characters[0].prompt[0]}
            />
          </div>
          
          {/* Below is the prev/next buttons. Don't changes.*/}
          <p>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Previous
            </button>
            <button type="button" onClick={onNext} disabled={!hasNext}>
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
