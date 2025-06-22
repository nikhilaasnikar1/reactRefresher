import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is about Us page </h2>
//       <UserClass
//         name={"Nikhil"}
//         location={"Dublin"}
//         contact={"nikhilasnikar@yahoo.com"}
//       />
//     </div>
//   );
// };

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is about Us page </h2>
        <User />
        <UserClass
          name={"Nikhil"}
          location={"Dublin"}
          contact={"nikhilasnikar@yahoo.com"}
        />
      </div>
    );
  }
}
export default AboutUs;
