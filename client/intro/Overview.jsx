import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Overview extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    const social = treatment.playerCount > 1;
    let imgUrl = "";
    if (social)
    {
        if ( treatment.hasPrompt) {
            imgUrl = "./resources/UI/pair_wi_prompt.png";
        }
        else{
            imgUrl = "./resources/UI/pair.png";
        }
    }else{
        if ( treatment.hasPrompt) {
            imgUrl = "./resources/UI/single_wi_prompt.png";
        }
        else{
            imgUrl = "./resources/UI/single.png";
        }
    }

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
                    <li><strong>
                        You will play this game simultaneously with{" "}
                        <span style={{color:"#FF0000"}}>{treatment.playerCount - 1} </span>
                        other participant(s) in real-time
                    </strong></li>
                    : null}
                <li>This task contains<strong> 3 </strong>stages.
                    For each stage,
                    {treatment.hasPrompt? " you will be given a new prompt and " : "" }

                    please write at least <strong>6 actions</strong> for each story.
                </li>
                <li>Use <strong>a simple sentence</strong> describing one character
                    taking one action, e.g. : <em> Anne introduced herself.</em></li>

                <li>Try to use the <strong>past tense </strong> of all the verbs.</li>
                <li>
                    <strong>
                    <span style={{color:"#FF0000"}}>Extra credits will be given to the
                        creative and coherent stories.
                    </span>
                    </strong>
                </li>
                <li>
                    For the best experience, please play the game <strong>on a desktop or
                    laptop</strong>.
                    There is NO mobile support.
                </li>
            </ul>
            <p>Here is an example of what the interface looks like. </p>
            <p>Use the <strong>green</strong> button to add new actions
                and the <strong>blue button</strong> to submit the story
                when you finished. {social? " The next stage will start after all of you " +
                    "submit.":null}</p>
            <div className="all-rooms bp3-card">

                <img src = {imgUrl} width="100%" />

            </div>



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
