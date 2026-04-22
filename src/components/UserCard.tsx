export interface User {
  name: string;
  email: string;
  city: string;
}

function UserCard({ name, email, city }: User) {
  return (
    <div style={{ border: '1px dotted grey' }}>
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <h3>City: {city}</h3>
    </div>
  );
}

export default UserCard;
