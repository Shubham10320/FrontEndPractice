import { useState } from "react";
import Button from "../common/button/Button";
import Container from "../common/container/Container";
import UserCard from "./UserCard";

// This users list; You should not modify this;
const usersList = [
  {
    id: 1,
    name: "Chrisse",
    address: "4018 Sachs Trail",
    avatar: "https://placehold.co/200",
    posts: 1841,
    followers: 66868,
    isMarried: true,
  },
  {
    id: 2,
    name: "Chandler",
    address: "15 Yemen road, Yemen",
    avatar: "https://placehold.co/200",
    posts: 1433,
    followers: 20000,
    isMarried: false,
  },
  {
    id: 3,
    name: "Lottie",
    address: "564 Messerschmidt Court",
    avatar: "https://placehold.co/200",
    posts: 1900,
    followers: 23658,
    isMarried: true,
  },
  {
    id: 4,
    name: "Gray",
    address: "50 Schiller Point",
    avatar: "https://placehold.co/200",
    posts: 875,
    followers: 52900,
    isMarried: true,
  },
  {
    id: 5,
    name: "Clemens",
    address: "67556 Nevada Center",
    avatar: "https://placehold.co/200",
    posts: 1800,
    followers: 31529,
    isMarried: true,
  },
];

function Users() {

  const[data, setData]=useState(usersList);

  const sortAsc=()=>{
     console.log('sorted')
     const val=[...data].sort((a,b)=>{
       return a.followers-b.followers;
     })
     setData(val)
  }
  const sortDesc=()=>{
    console.log('sorted')
    const val=[...data].sort((a,b)=>{
      return b.followers-a.followers;
    })
    setData(val)
 }

 const resetData=()=>{
    setData(usersList)
 }

  return (
    <Container>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Users List</h1>
      <div data-testid="users-app-buttons">
        <h3>Sort By their number of followers</h3>
        {/* create 3 buttons here with the help of `Button` component as mentioned in the problem statement */}
        <Button text="Sort by asc" click={sortAsc}/>
        <Button text="Sort by desc" click={sortDesc}/>
        <Button text="Reset" click={resetData}/>
      </div>
      {/* show all users details here with the help of UserCard component here */}
      {
        data?.map((elem, idx)=>{
          return <UserCard key={idx} idx={idx} elem={elem}/>
        })
      }
    </Container>
  );
}

export default Users;
