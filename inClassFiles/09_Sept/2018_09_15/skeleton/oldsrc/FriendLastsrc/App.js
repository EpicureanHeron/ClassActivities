import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    friends
  };
  // handleIncrement increments this.state.count by 1
  removeFriend = id => {
    // We always use the setState method to update a component's state
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };


  // The render method returns the JSX that should be rendered
  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(item => <FriendCard
          key={item.id}
          removeFriend = {this.removeFriend}
          id={item.id}
          name={item.name}
          occupation={item.occupation}
          location={item.location}
          image={item.image} />)}
      </Wrapper>
    );

  }


}
export default App;
