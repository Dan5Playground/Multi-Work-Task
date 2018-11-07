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
    // setTimeout(() => this.setState({ activeButton: true }), 1*60*1000);

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
    const social = game.treatment.playerCount > 1 && game.players.length > 1;
    //console.log(prompt);



    return (
      <div className="task">


        <div className="board">
            {!social?
            <h4 style={{color:"#FF0000"}}> There are no other players at the moment.
                You can write the story by yourself.  </h4>
            :null}
            <div className="bp3-card">
            <h3>Scenario</h3>
            <p>
                {scenario}
            </p>
            <p>
            {social?
                <span> You will play the role of <strong>{playerName}</strong>.</span>:null
            }
            {social && stage.get("whosTurn") === player._id?
                <span> You need to start writing first.</span>:null}
            </p>

            {/*check for condition 1*/}
            {game.treatment.hasPrompt && prompt[playerName] !== undefined ?
                <p><strong>Now Imagine : </strong> <em style={{color:"#FF0000"}}>
                    {playerName + " is a very " + prompt[playerName] + " person. " }</em></p> :
                null

            }
            </div>
            <p style={{margin : "10px"}}>
                How do you think the story will unfold? Please write a new story. Note:
            </p>

            <ul>

                {social?
                    <li>
                        If the other player drop off in the middle of the task or stop responding,
                        <strong> please contact us to get the reward code.
                        </strong></li>
                    : null}

                <li>you need to write a new story from scratch.
                    Please write at least <strong> 6 actions</strong> for each story.
                </li>
                <li>Use <strong>a simple sentence</strong> describing one character
                    taking one action, e.g. : <em> Anne introduced herself.</em></li>
                <li>Try to use the <strong>past tense </strong> of all the verbs.</li>

            </ul>

            <div className="all-rooms">


                <ChatLog
                    messages={messages}
                    stage={stage}
                    player={player}
                    social = {game.treatment.playerCount > 1 && game.players.length > 1}
                    game = {game}
                />
                <div className="bp3-button-group">
                    {/*The player could send reminder to the other player
                    <button
                            onClick={this.handleReminder}
                            className="bp3-button bp3-intent-warning"
                            style={{margin: "15px"}}
                           >
                        Send Reminder

                    </button>*/}
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
      </div>
    );
  }
}
