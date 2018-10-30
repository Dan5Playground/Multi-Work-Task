import React from "react";

export default class Author extends React.Component {
  render() {
    const { player, self, isSingle} = this.props;

    return (
      <div className="author">
        <img src={player.get("avatar")} />
          {isSingle? null:
        <span className="name" style={{ color: player.get("nameColor") }}>
          {self ? "You" : player.get("name")}
        </span>}
      </div>
    );
  }
}
