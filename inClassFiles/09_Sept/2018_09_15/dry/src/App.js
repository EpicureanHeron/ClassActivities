import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Dry from "./components/Dry/Dry"



const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    {friends.map(item => <Dry name = {item.name} occupation = {item.occupation} location = {item.location} image = {item.image}/>)}
    </Wrapper>
   
    /* <Dry name = {friends[0].name} occupation = {friends[0].occupation} location = {friends[0].location} image = {friends[0].image}/>
    <Dry name = {friends[1].name} occupation = {friends[1].occupation} location = {friends[1].location} image = {friends[1].image} />
    <Dry name = {friends[2].name} occupation = {friends[2].occupation} location = {friends[2].location} image = {friends[2].image} /> */
 
);

export default App;
