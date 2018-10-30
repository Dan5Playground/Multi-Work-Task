import React from "react";
import ChatLog from "./ChatLog.jsx";

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeButton: false };
  }

  componentDidMount() {
    const { player } = this.props;
    // the player could only go to the next step after 1 min
    setTimeout(() => this.setState({ activeButton: true }), 1*60*1000);

  }
  handleSubmit = event => {
        event.preventDefault();
      // Dan : if both submit, transfer to the next stage
      this.props.player.stage.submit();
      // disable the submission button
      this.setState({ activeButton: false });

    };

  render() {
    const { game, stage, player } = this.props;
      const messages = stage.get("chat").map(({ text, playerId }) => ({
          text,
          subject: game.players.find(p => p._id === playerId)
      }));
    const scenario = game.get("scenario");
    const prompt = stage.get("task");
    const playerName = player.get("name");
    console.log(prompt);



    return (
      <div className="task">


        <div className="board">
            <h3>Scenario</h3>
            <p>
                {scenario}
            </p>
            {game.treatment.playerCount > 1?
                <p> You will play the role of <strong>{playerName}</strong></p>:null

            }
            {/*check for condition 1*/}
            {game.treatment.hasPrompt && prompt[playerName] !== undefined ?
                <p><strong>Now Imagine : <label></label></strong> <em>
                    {playerName + " is " + prompt[playerName] + ". " }</em></p> :
                null

            }
            <p>
                How do you think the story will unfold?
            </p>

            <div className="all-rooms">


                <ChatLog
                    messages={messages}
                    stage={stage}
                    player={player}
                    social = {game.treatment.playerCount > 1}
                />
                <button type="submit"
                        onClick={this.handleSubmit}
                        className="bp3-button bp3-intent-success"
                        style={{margin: "5px"}}
                        disabled={!this.state.activeButton}>
                    Next
                    <span className="bp3-icon-standard bp3-icon-double-chevron-right bp3-align-right"/>
                </button>

            </div>

        </div>
      </div>
    );
  }
}
