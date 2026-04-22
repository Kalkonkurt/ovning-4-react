export interface User {
  name: string;
  email: string;
  city: string;
}

export interface UserCardProps extends User {
  onShowInfo: (name: string) => void;
}

function UserCard({ name, email, city, onShowInfo }: UserCardProps) {
  return (
    <div style={{ border: '1px dotted grey' }}>
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <h3>City: {city}</h3>
      <button onClick={() => onShowInfo(name)}>Visa Info</button>
    </div>
  );
}

export default UserCard;
