import React from "react";

import { Centered } from "meteor/empirica:core";

export default class UIOverview extends React.Component {
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
                    <h1 className={"bp3-heading"}> Interface Overview </h1>

                    <p>Here is an example of what the interface looks like. </p>
                    <ul>
                        <li>
                            Use the <strong style={{color : "#0000FF"}}>blue </strong>
                            button to add new actions
                        </li>
                        <li>
                            the <strong style={{color : "#00FF00"}}>green </strong>
                            button to submit the story when you finish.
                            {social?
                                <em> The next stage will start after all of you submit.
                                </em>
                                :null}
                        </li>
                    </ul>


                    <div className="all-rooms">

                        <img src = {imgUrl} width="80%"  className="bp3-card"/>

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
