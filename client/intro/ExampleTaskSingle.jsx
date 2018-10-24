import React from "react";



export default class ExampleTaskSingle extends React.Component {

  render() {
      // Dan : for the example user, the character is fixed
    const { sceneDesc, character, prompt } = this.props;
    const tempMsg = ["Charlie greeted Anne. ",
        "Anne said hello to Charlie."]

    return (
      <div>
        <div>
            <p> <strong>Scenario : </strong></p>
            <p> {sceneDesc} </p>
            <p> <strong>Task : </strong></p>
            <p> In the lines below describe how you think the scene will unfold.
                Use a simple sentence describing one character taking one action
                in the first box in each line. Try to use the <strong>past tense
                </strong> of all the verbs.  </p>
            <WritePanel messages = {tempMsg} />
            {/* Dan: Remove this part for the example
            <p> Now Imagine <b>{character}</b> is <b>{prompt}</b></p>*/}
        </div>
      </div>
    );
  }
}

// current ask them to write from the first person view
class WritePanel extends React.Component {
    state = { comment: "" ,
    commentHist : this.props.messages};


    handleChange = e => {
        const el = e.currentTarget;
        this.setState({ [el.name]: el.value });
        console.log("the input field has been changed");
        console.log(el.name + " "+ el.valueOf);
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Submit the form");
        const text = this.state.comment.trim();
        if (text !== "") {
            this.state.commentHist.push(text);
            this.setState({ comment: "" });
        }
    };

    render() {
        const { comment } = this.state;
        //const { messages } = this.props;

        return (
            <div className="bp3-card">
                <Messages messages={this.state.commentHist}  />
                <form onSubmit={this.handleSubmit}>
                    <div className="bp3-card bp3-input-group">
                        <input
                            name="comment"
                            type="text"
                            className="bp3-input"
                            placeholder="Enter new actions here,
                            e.g. Charlie invited Anne for dinner. "
                            value={comment}
                            onChange={this.handleChange}
                            autoComplete="off"
                        />
                        {/* May be fixed the position of the input later*/}
                        <button type="submit" className="bp3-intent-primary">
                            Add New
                        </button> <span> (Add new action using this button)</span>
                    </div>
                </form>
            </div>
        );
    }
}
const chatSound = new Audio("sounds/unsure.mp3");
class Messages extends React.Component {
    // Dan : after all the elements are rendered
    componentDidMount() {
        this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
    }
    // Dan : after all the elements are rendered
    componentDidUpdate(prevProps) {
        if (prevProps.messages.length < this.props.messages.length) {
            this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
            chatSound.play();
        }
    }
    render() {
        const { messages } = this.props;

        return (
            <div className="">
                <p> <strong>Interactions : </strong></p>
                <div className="messages" ref={el => (this.messagesEl = el)}>

                    {messages.length === 0 ? (
                        <div className="empty">No messages yet...</div>
                    ) : null}
                    {messages.map((message, i) => (
                        <Message
                            key={i}
                            message= {message}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

class Message extends React.Component {
    render() {
        const { message } = this.props;
        return (
            <div className="message">
                {"- " + message}
            </div>
        );
    }
}

