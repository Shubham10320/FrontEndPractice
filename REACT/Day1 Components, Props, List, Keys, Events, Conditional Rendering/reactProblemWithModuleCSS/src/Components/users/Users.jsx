import UserCard from './UserCard';
import user from './Users.module.css'


// This users list will be included in boilerplate;
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
    address: "15 Yemem road, Yemen",
    avatar: "https://placehold.co/200",
    posts: 1433,
    followers: 20000,
    isMarried: false,
  },
];

const Users = () => {
  return (
    <div data-testid="users" className={user.container}>
      {/* Add h3 tag here as per the problem statement*/}
      <h3 className={user.heading}>Users List</h3>
      {/* show users details here with the help of UserCard component here */}
      {
        usersList?.map((elem, idx)=>{
          return <UserCard key={elem.id} data={elem} />
        })
      }

    </div>
  );
};

export default Users;
