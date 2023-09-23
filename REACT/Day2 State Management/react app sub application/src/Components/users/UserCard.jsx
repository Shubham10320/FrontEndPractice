import Button from "../common/button/Button";

function UserCard({idx, elem}) {
  const{ id, name, address, avatar, posts, followers, isMarried}=elem;
  const followBtn=(name)=>{
    alert(`You are now following ${name}`)
  }
  return <div data-testid="user-card">
    <img src={avatar} alt={name} />
     <h2 data-testid="user_name">{name}</h2>
     <h3 data-testid="user_address">{address}</h3>
     <h3>Posts</h3>
     <p data-testid="user_posts">{posts}</p>
     <h3>Followers</h3>
     <p data-testid="user_followers">{followers}</p>
     <h3>Married</h3>
     <p data-testid="is-married">{isMarried ? "Yes" : "No"}</p>
     <Button text={"Follow"} click={()=>followBtn(name)}/>
  </div>;
}

export default UserCard;
