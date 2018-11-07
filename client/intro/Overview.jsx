import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Overview extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    const social = treatment.playerCount > 1;


    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}> Game Overview </h1>
            <p>
                In this task, you need to <strong>read the scenario setting</strong> and <strong>write
                down how you think the story will unfold</strong>.
            </p>
            <p>Note:</p>
            <ul>
                {social?
                    <li>
                        <strong>
                            You will play this game simultaneously with{" "}
                            <span style={{color:"#FF0000"}}>{treatment.playerCount - 1} </span>
                                other participant(s) in real-time.
                        </strong>
                    </li>
                    : null}
                {social?
                    <li>
                        If the other player drop off in the middle of the task or stop responding,
                        <strong> please contact us to get the reward code.
                    </strong></li>
                    : null}
                {social?
                    <li>
                        You may need to wait up to <strong>10 minutes</strong> for the
                        other player to show up. You will be compensated for the waiting time (
                        <span style={{color:"#FF0000"}}> $0.10 per minute</span>)
                    </li>
                    : null}
                <li>This task contains<strong> 3 </strong>stages.
                    For each stage,
                    {treatment.hasPrompt? " you will be given a new prompt and " : "" }
                    you need to write a new story from scratch.
                    Please write at least <strong> 6 actions</strong> for each story.
                    <span style={{color:"#FF0000"}}> Bonus will be $1.00 per story.</span>
                </li>
                <li>Use <strong>a simple sentence</strong> describing one character
                    taking one action, e.g. : <em> Anne introduced herself.</em></li>
                <li>The character you play <strong>may be different</strong> at each stage,
                    please read the instruction carefully.</li>
                <li>Try to use the <strong>past tense </strong> of all the verbs.</li>
                <li>
                    <strong>
                    Extra
                        <span style={{color:"#FF0000"}}> $1.00  </span>
                        will be given to the creative and coherent stories.
                    </strong>
                </li>
                <li>
                    For the best experience, please play the game <strong>on a desktop or
                    laptop</strong>.
                    There is NO mobile support.
                </li>
            </ul>



          <button
            type="button"
            className="bp3-button bp3-intent-nope bp3-icon-double-chevron-left"
            onClick={onPrev}
            disabled={!hasPrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="bp3-button bp3-intent-primary"
            onClick={onNext}
            disabled={!hasNext}
          >
            Next
            <span className="bp3-icon-standard bp3-icon-double-chevron-right bp3-align-right"/>
          </button>
        </div>
      </Centered>
    );
  }
}
