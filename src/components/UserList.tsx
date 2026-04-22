import UserCard, { type User } from './UserCard';

interface UserListProps {
  users: User[];
  onShowInfo: (name: string) => void;
}

function UserList({ users, onShowInfo }: UserListProps) {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.email} {...user} onShowInfo={onShowInfo} />
      ))}
    </div>
  );
}

export default UserList;
