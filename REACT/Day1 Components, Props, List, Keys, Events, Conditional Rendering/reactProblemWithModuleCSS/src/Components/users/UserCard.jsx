import card from "./Users.module.css"

const UserCard = (props) => {

  console.log(props.data)
  const{id, name, address, avatar, posts, followers, isMarried}=props.data;
  const followingFunc=(name)=>{
    alert(`You are now following ${name}`)
  }

  return <div data-testid="user-card" className={card.miniCard}>
     <div>
      <img src={avatar} alt={name} />
     </div>
     <div>
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid="user_address">{address}</p>
      <h3>Posts</h3>
      <p data-testid="user_posts">{posts}</p>
      <h3>Followers</h3>
      <p data-testid="user_followers">{followers}</p>
      <h3>Married</h3>
      <p data-testid="is-married">{ isMarried ? 'Yes' : "No"}</p>
      <button onClick={()=>followingFunc(name)}>Follow</button>
     </div>
  </div>;
};

export default UserCard;
