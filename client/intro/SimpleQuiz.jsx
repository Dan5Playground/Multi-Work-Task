import React from "react";

import { Centered, AlertToaster } from "meteor/empirica:core";

import { Radio, RadioGroup } from "@blueprintjs/core";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nParticipants: "",
        nStories: "",
        horse : ""
    };
  }

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value.trim().toLowerCase() });
  };

  handleRadioChange = event => {
    const el = event.currentTarget;
    this.setState({ scoreOption: el.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { game } = this.props;
    //console.log("Submitted the quiz");
      if (
          this.state.nStories !== (game.treatment.nStories).toString() ||
          this.state.nParticipants !== (game.treatment.playerCount).toString()||
          this.state.horse !== "white"
      ) {
          AlertToaster.show({
              message:
                  "Sorry, you have one or more mistakes. " +
                  "Please ensure that you answer the questions correctly, " +
                  "or go back to the instructions."
          });
      } else {
          this.props.onNext();
      }


  };

  render() {
    const { hasPrev, onPrev } = this.props;
    const { nParticipants, nStories, horse} = this.state;
    return (
      <Centered>
        <div className="quiz">
          <h1 className="bp3-heading"> Quiz </h1>
          <form onSubmit={this.handleSubmit}>
              <div className="bp3-form-group">
                  <label className="bp3-label" htmlFor="number-of-participants">
                      1. How many participants will play at the same time, including
                      yourself?
                  </label>
                  <div className="bp3-form-content">
                      <input
                          id="nParticipants"
                          className="bp3-input"
                          type="number"
                          min="0"
                          max="10"
                          step="1"
                          dir="auto"
                          name="nParticipants"
                          value={nParticipants}
                          onChange={this.handleChange}
                          required
                      />
                  </div>
              </div>

              <div className="bp3-form-group">
                  <label className="bp3-label" htmlFor="length-of-negotiation">
                      2. How many stories do you need to write in this task?
                  </label>
                  <p>(
                      <em>Hint: You need to write one story per round. There are
                          3 rounds in total.</em>
                      )
                  </p>
                  <div className="bp3-form-content">
                      <input
                          id="nStories"
                          className="bp3-input"
                          type="number"
                          min="0"
                          max="10"
                          step="1"
                          dir="auto"
                          name="nStories"
                          value={nStories}
                          onChange={this.handleChange}
                          required
                      />
                  </div>
              </div>
              <div className="bp3-form-group">
                  <label className="bp3-label" htmlFor="horse">
                      3. What color was Napoleon's white horse?
                  </label>
                  <div className="bp3-form-content">
                  <input
                      type="text"
                      dir="auto"
                      id="horse"
                      name="horse"
                      className="bp3-input"
                      placeholder="e.g. brown"
                      value={horse}
                      onChange={this.handleChange}
                      autoComplete="off"
                      required
                  />
                  </div>
              </div>




            <button
              type="button"
              className="bp3-button bp3-intent-nope bp3-icon-double-chevron-left"
              onClick={onPrev}
              disabled={!hasPrev}
            >
              Back to instructions
            </button>
            <button type="submit" className="bp3-button bp3-intent-primary">
              Submit
              <span className="bp3-icon-standard bp3-icon-key-enter bp3-align-right" />
            </button>
          </form>
        </div>
      </Centered>
    );
  }
}
