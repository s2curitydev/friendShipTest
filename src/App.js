import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";
import Message from "./Message";
import Ranking from "./Ranking";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => {},
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/score" exact component={Score} />
          <Route path="/message" exact component={Message} />
          <Route path="/ranking" exact component={Ranking} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
