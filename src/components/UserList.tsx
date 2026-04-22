import UserCard, { type User } from './UserCard';

interface UserListProps {
  users: User[];
}

function UserList({ users }: UserListProps) {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.email} {...user} />
      ))}
    </div>
  );
}

export default UserList;
