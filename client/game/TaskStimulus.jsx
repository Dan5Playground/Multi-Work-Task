import React from "react";
import { Centered } from "meteor/empirica:core";

export default class TaskStimulus extends React.Component {

  render() {
    const { round, stage, player } = this.props;
    console.log(stage)

    return (
    <Centered>
      <div className="task-stimulus">
        Start writing the stories. Here is the prompt: {round.get("task")}
      </div>
    </Centered>
    );
  }
}
