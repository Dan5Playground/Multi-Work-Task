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
      const { stage, player } = this.props;
      // Dan : if both submit, transfer to the next stage
      player.set("satisfied", true);
      // Dan : change turn
      const otherPlayers = _.reject(this.props.game.players,
          p => p._id === player._id);
      // Dan : only deal with 2 player conditions
      if (otherPlayers.length == 1)
          stage.set("whosTurn", otherPlayers[0]._id);

      // disable the submission button
      this.setState({ activeButton: false });

    };

  render() {
    const { game, stage, player } = this.props;
      const messages = stage.get("chat").map(({ text, playerId, isChat }) => ({
          text,
          subject: game.players.find(p => p._id === playerId),
          isChat
      }));
    const scenario = game.get("scenario");
    const prompt = stage.get("task");
    const playerName = player.get("name");
    //console.log(prompt);



    return (
      <div className="task">


        <div className="board">
            <h3>Scenario</h3>
            <p>
                {scenario}
            </p>
            {game.treatment.playerCount > 1?
                <p> You will play the role of <strong>{playerName}</strong>.</p>:null

            }
            {/*check for condition 1*/}
            {game.treatment.hasPrompt && prompt[playerName] !== undefined ?
                <p><strong>Now Imagine : </strong> <em style={{color:"#FF0000"}}>
                    {playerName + " is a very " + prompt[playerName] + " person. " }</em></p> :
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
                    game = {game}
                />
                {/*Only avaliable whne the length is longer than 6*/}
                <button type="submit"
                        onClick={this.handleSubmit}
                        className="bp3-button bp3-intent-success"
                        style={{margin: "15px"}}
                        disabled={!this.state.activeButton && messages.length < 6}>
                    Finished ! Next
                    <span className="bp3-icon-standard bp3-icon-double-chevron-right bp3-align-right"/>
                </button>

            </div>

        </div>
      </div>
    );
  }
}
