import React from "react";

import { Centered, ConsentButton } from "meteor/empirica:core";
import BrowserDetection from "react-browser-detection";

export default class Consent extends React.Component {
  static renderConsent() {
    console.log("this is not firefox");
    return (
      <Centered>
        <div className="consent bp3-ui-text">
          <h2 className="bp3-heading"> Participation Consent Form </h2>
            <p>
                Thank you for deciding to volunteer in this research study. In this task,
                you will be asked to read the scenario setting and write down how you think
                the story will unfold.
            </p>
            <p>
                Your decision to participate in this experiment is entirely voluntary.
                There are no known or anticipated risks to participating in this experiment.
                There is no way for us to identify you. The only information we will
                have, in addition to your responses, is the timestamps of your
                interactions with our site. The results of our research may be
                presented at scientific meetings or published in scientific
                journals.
            </p>
            <h5>
                Clicking on the "I AGREE" button indicates that you are at
                least 18 years of age, and agree to participate voluntary.
          </h5>

          <ConsentButton text="I AGREE" />
        </div>
      </Centered>
    );
  }

  renderNoFirefox = () => {
    console.log("this is fire fox");
    return (
      <div className="consent">
        <h1 className="bp3-heading" style={{ textAlign: "center", color: "red" }}>
          DO NOT USE FIREFOX!!
        </h1>
        <p style={{ textAlign: "center" }}>
          Please, don't use firefox! It breaks our game and ruins the experience
          for your potential teammates!
        </p>
      </div>
    );
  };

  render() {
    const browserHandler = {
      default: browser =>
        browser === "firefox" ? this.renderNoFirefox() : Consent.renderConsent()
    };

    return (
      <Centered>
        <BrowserDetection>{browserHandler}</BrowserDetection>
      </Centered>
    );
  }
}
