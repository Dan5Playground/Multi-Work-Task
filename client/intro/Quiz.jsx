import React from "react";

import { Centered, AlertToaster } from "meteor/empirica:core";

export default class Quiz extends React.Component {
  constructor(props) {
      super();
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

  handleSubmit = event => {
    event.preventDefault();
    const { game } = this.props;
    if (this.state.nParticipants !== game.treatment.playerCount.toString()
     || this.state.horse !== "white"
     || this.state.nStories != "3"
     ) {
      AlertToaster.show({
              message:
                  "Sorry, you have one or more mistakes. Please ensure that you answer the questions correctly, or go back to the insturctions"
          });
    } else {
      this.props.onNext();
    }
  };

  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    const { nStories, nParticipants, horse } = this.state;
    return (
      <Centered>
        <div className="quiz">
          <h1> Quiz </h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="nStories">
                1. How many stories do you need to write in this task? (<em>Hint: You need to write one story per round. There are 3 rounds in total.</em>)
              </label>
              <div className="bp3-form-content">
                <input
                  type="number"
                  dir="auto"
                  id="nStories"
                  className="bp3-input"
                  name="nStories"
                  placeholder="e.g. 1"
                  value={nStories}
                  onChange={this.handleChange}
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="number-of-participants">
                2. How many participants will play at the same time, including
                  yourself?
              </label>
              <div className="bp3-form-content">
                <input
                    type="number"
                    id="nParticipants"
                    className="bp3-input"
                    dir="auto"
                    name="nParticipants"
                    placeholder="e.g. 3"
                    value={nParticipants}
                    onChange={this.handleChange}
                    autoComplete="off"
                    required
                  />
              </div>
            </div>
            <div>
              <label htmlFor="horse">
                3. What color was Napoleon's white horse?
              </label>
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
            
            <p>
              <button type="button" onClick={onPrev} disabled={!hasPrev}>
                Back to instructions
              </button>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </Centered>
    );
  }
}
