import React from "react";

import {Centered} from "meteor/empirica:core";

import {
    Button,
    Classes,
    FormGroup,
    RadioGroup,
    TextArea,
    Intent,
    Radio
} from "@blueprintjs/core";



export default class ExitSurvey extends React.Component {
  static stepName = "ExitSurvey";
  state = {
    age: "",
      gender: "",
      education: "",
      strategy0: "",
      strategy1: "",
      strategy2: "",
      strategyOpp0: "",
      strategyOpp1: "",
      strategyOpp2: "",
      fair: "",
      agreement:"",
    feedback: ""};


    handleChange = event => {
        const el = event.currentTarget;
        this.setState({ [el.name]: el.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };
    exitMessage = (player, game) => {
    return (

      <div>
        {" "}
        <h1> Exit Survey </h1>
        <br />
        <h3>
          Please submit the following code to receive your bonus:{" "}
          <em>{player._id}</em>.
        </h3>

      </div>
    );
  };

  exitForm = (game) => {

    const {
            strategy0,
            strategy1,
            strategy2,
        strategyOpp0,
        strategyOpp1,
        strategyOpp2,
      fair,
      feedback,
        age,
        gender,
        education,
        agreement
    } = this.state;


    return (
        <div>
            {" "}
            <p>
                Please answer the following short survey. You do not have to provide
                any information you feel uncomfortable with.
            </p>
            <form onSubmit={this.handleSubmit}>
                {game.treatment.playerCount > 1 && game.players.length > 1?
                <div className="form-line">
                    <RadioGroup
                        inline={true}
                        name="agreement"
                        label="Have your character reached his/her goal?"
                        onChange={this.handleChange}
                        selectedValue={agreement}
                    >
                        <Radio
                            selected={agreement}
                            name="agreement"
                            value="yes"
                            label="Yes"
                            onChange={this.handleChange}
                        />
                        <Radio
                            selected={agreement}
                            name="agreement"
                            value="no"
                            label="No"
                            onChange={this.handleChange}
                        />

                    </RadioGroup>
                </div>: null}
                <div className="form-line">
                    <div className="form-line thirds">
                        <FormGroup
                            className={"form-group"}
                            inline={false}
                            label={"How would you describe your character's strategy" +
                            " in the first story?"}
                            labelFor={"strategy"}>
                            <TextArea
                                  id="strategy0"
                                  large={true}
                                  intent={Intent.PRIMARY}
                                  onChange={this.handleChange}
                                  value={strategy0}
                                  fill={true}
                                  name="strategy0"
                              />
                        </FormGroup>

                        <FormGroup
                            className={"form-group"}
                            inline={false}
                            label={"How would you describe your character's " +
                            "strategy in the second story?"}
                            labelFor={"fair"}
                            //className={"form-group"}
                                        >
                              <TextArea
                                  id="strategy1"
                                  name="strategy1"
                                  large={true}
                                  intent={Intent.PRIMARY}
                                  onChange={this.handleChange}
                                  value={strategy1}
                                  fill={true}
                              />
                        </FormGroup>

                        <FormGroup
                            className={"form-group"}
                            inline={false}
                            label={"How would you describe your character's strategy" +
                            " in the third story?"}
                            labelFor={"fair"}
                            //className={"form-group"}
                        >
                          <TextArea
                              id="strategy2"
                              name="strategy2"
                              large={true}
                              intent={Intent.PRIMARY}
                              onChange={this.handleChange}
                              value={strategy2}
                              fill={true}
                          />
                        </FormGroup>
                    </div>
                </div>
                {game.treatment.playerCount > 1 && game.players.length > 1?
                    <div className="form-line">
                        <div className="form-line thirds">
                            <FormGroup
                                className={"form-group"}
                                inline={false}
                                label={"How would you describe your opponent's strategy" +
                                " in the first stories game?"}
                                labelFor={"strategy"}>
                            <TextArea
                                id="strategyOpp0"
                                large={true}
                                intent={Intent.PRIMARY}
                                onChange={this.handleChange}
                                value={strategyOpp0}
                                fill={true}
                                name="strategyOpp0"
                            />
                            </FormGroup>

                            <FormGroup
                                className={"form-group"}
                                inline={false}
                                label={"How would you describe your opponent's " +
                                "strategy in the second stories game?"}
                                labelFor={"fair"}
                                //className={"form-group"}
                            >
                              <TextArea
                                  id="strategyOpp1"
                                  name="strategyOpp1"
                                  large={true}
                                  intent={Intent.PRIMARY}
                                  onChange={this.handleChange}
                                  value={strategyOpp1}
                                  fill={true}
                              />
                            </FormGroup>

                            <FormGroup
                                className={"form-group"}
                                inline={false}
                                label={"How would you describe your opponent's strategy" +
                                " in the third stories game?"}
                                labelFor={"fair"}
                                //className={"form-group"}
                            >
                          <TextArea
                              id="strategyOpp2"
                              name="strategyOpp2"
                              large={true}
                              intent={Intent.PRIMARY}
                              onChange={this.handleChange}
                              value={strategyOpp2}
                              fill={true}
                          />
                            </FormGroup>
                        </div>
                    </div>
                    :null}

                <div className="form-line">
                    <FormGroup
                        inline={true}
                        label={"Age"}
                        labelFor={"age"}
                        className={"form-group"}
                    >
                        <input
                            id="age"
                            className={Classes.INPUT}
                            type="number"
                            min="0"
                            max="150"
                            step="1"
                            dir="auto"
                            name="age"
                            value={age}
                            onChange={this.handleChange}
                            // required
                        />
                    </FormGroup>

                    <FormGroup
                        inline={true}
                        label={"Gender"}
                        labelFor={"gender"}
                        className={"form-group"}
                    >
                        <input
                            id="gender"
                            className={Classes.INPUT}
                            type="text"
                            dir="auto"
                            name="gender"
                            value={gender}
                            onChange={this.handleChange}
                            // required
                        />
                    </FormGroup>
                </div>

                <div className="form-line">
                    <RadioGroup
                        inline={true}
                        name="education"
                        label="Highest Education Qualification?"
                        onChange={this.handleChange}
                        selectedValue={education}
                    >
                        <Radio
                            selected={education}
                            name="education"
                            value="high-school"
                            label="High School"
                            onChange={this.handleChange}
                        />
                        <Radio
                            selected={education}
                            name="education"
                            value="bachelor"
                            label="Bachelor's Degree"
                            onChange={this.handleChange}
                        />
                        <Radio
                            selected={education}
                            name="education"
                            value="master"
                            label="Master's or higher"
                            onChange={this.handleChange}
                        />
                        <Radio
                            selected={education}
                            name="education"
                            value="other"
                            label="Other"
                            onChange={this.handleChange}
                        />
                    </RadioGroup>
                </div>

                <div className="form-line thirds">


                    <FormGroup
                        className={"form-group"}
                        inline={false}
                        label={"Do you feel the pay was fair?"}
                        labelFor={"fair"}
                        //className={"form-group"}
                    >
              <TextArea
                  id="fair"
                  name="fair"
                  large={true}
                  intent={Intent.PRIMARY}
                  onChange={this.handleChange}
                  value={fair}
                  fill={true}
              />
                    </FormGroup>

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
                </div>

                <Button type="submit" intent={"primary"} rightIcon={"key-enter"}>
                    Submit
                </Button>
            </form>{" "}
        </div>
    );
  };

  render() {
    const { player, game } = this.props;
    return (
      <Centered>
        <div className="exit-survey">
          {this.exitMessage(player, game)}
          <hr />
          {this.exitForm(game)}
        </div>
      </Centered>
    );
  }
}
