import React from "react";
import "./Home.css";

class Detail extends React.Component {
  componentDidMount() {
    var { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    var { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    return (
      <div className="detail">
        <img src={location.state.poster} alt={location.state.title} />
        <h4>{location.state.title}</h4>
        <p>{location.state.summary}</p>
      </div>
    );
  }
}

export default Detail;
