import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nikhilaasnikar1");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    console.log(json);
    console.log("Child componentDidMount");
  }
  render() {
    console.log("child render");
    const { name, location, contact } = this.props;
    const { count, userInfo, avatar_url } = this.state;
    return (
      <div className="user-card">
        {/* <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increment
        </button> */}
        <div>
          <img className="avatar" src={userInfo.avatar_url}></img>
        </div>
        <h2>Name: {userInfo.name}</h2>
        <h3>Location: {userInfo.location}</h3>
        <h4>Company: {userInfo.company}</h4>
      </div>
    );
  }
}

export default UserClass;
