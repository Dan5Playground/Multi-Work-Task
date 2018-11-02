import React from "react";
import Author from "./Author";

export default class ChatLog extends React.Component {
  state = { comment: "" };

  
  handleChange = e => {
    const el = e.currentTarget;
    this.setState({ [el.name]: el.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const text = this.state.comment.trim();
    if (text !== "") {
      const { stage, player } = this.props;
      stage.append("chat", {
        text,
        playerId: player._id,
          isChat:true
      });
      this.setState({ comment: "" });
        const otherPlayers = _.reject(this.props.game.players,
            p => p._id === player._id);
        // Dan : only deal with 2 player conditions
        if (otherPlayers.length == 1)
            stage.set("whosTurn", otherPlayers[0]._id);
        player.set("satisfied", false);
    }



  };

  render() {
    const { comment } = this.state;
    const { messages, player, social, stage } = this.props;
    const otherPlayers = _.reject(this.props.game.players,
          p => p._id === player._id);
    let isOpponentSatisfied = false;
    // Dan : only deal with 2 player conditions
      if (otherPlayers.length == 1 && otherPlayers[0].get("satisfied"))
          isOpponentSatisfied = true;


    return (
      <div className="chat bp3-card">
        <Messages messages={messages} player={player} social = {social}>

        </Messages>
          {stage.get("whosTurn") === player._id?
              <div className="sysInfo">
                  {isOpponentSatisfied ?
                      "The other player clicked the 'Finish' button." +
                          " You can click it or continue writing." :
                      "Please type in an action for the character."
                  }
              </div>:
              <div className="sysInfo">
                   Please wait for the other player ...
              </div>}
        <form onSubmit={this.handleSubmit}>
          <div className="bp3-control-group">
            <input
              name="comment"
              type="text"
              className="bp3-input bp3-fill"
              placeholder="Enter action here. "
              value={comment}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <button
                type="submit"
                className="bp3-button bp3-intent-primary"
                disabled={stage.get("whosTurn") !== player._id}
            >
              + Send Action
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const chatSound = new Audio("experiment/unsure.mp3");
class Messages extends React.Component {
  componentDidMount() {
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.messages.length < this.props.messages.length) {
      this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
      chatSound.play();
    }
  }
  render() {
    const { messages, player, social } = this.props;

    return (
      <div className="messages" ref={el => (this.messagesEl = el)}>
        {messages.length === 0 ? (
          <div className="empty">No actions yet...</div>
        ) : null}
        {messages.map((message, i) => (
            social ?
            <Message
              key={i}
              message={message}
              self={message.subject ? player._id === message.subject._id : null}
            />: <Message
                    key={i}
                    message={message}
                    isSingle
                />

        ))}
      </div>
    );
  }
}

class Message extends React.Component {
    renderSysMsg(text, self, player){
        return (
            <div className="empty">
                <span className="name" style={{ color: player.get("nameColor") }}>
                    {self ? "You" : player.get("name")}
                    </span>
                {text}
            </div>
        );
    }
    renderChat(text, isSingle, subject, self)
    {
        return(
            <div>
            {isSingle?
                <Author player={subject} isSingle/> :
                <Author player={subject} self={self}/>}
                {text}
            </div>
        );
    }
  render() {
    const { text, subject, isChat} = this.props.message;
    const { self, isSingle} = this.props;
    //console.log(text, isChat);
    return (

      <div className="message">
          {isChat ?
              this.renderChat(text, isSingle, subject, self) :
              this.renderSysMsg(text,self, subject)
          }
      </div>
    );
  }
}
