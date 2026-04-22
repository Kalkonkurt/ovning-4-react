import './App.css';
import { type User } from './components/UserCard';
import UserList from './components/UserList';

function App() {
  const users: User[] = [
    { name: 'Anna Svensson', email: 'anna@example.com', city: 'Stockholm' },
    { name: 'Erik Lindgren', email: 'erik@example.com', city: 'Göteborg' },
    { name: 'Maria Johansson', email: 'maria@example.com', city: 'Malmö' },
    { name: 'Johan Karlsson', email: 'johan@example.com', city: 'Uppsala' },
    { name: 'Sara Nilsson', email: 'sara@example.com', city: 'Västerås' },
    { name: 'Lars Eriksson', email: 'lars@example.com', city: 'Örebro' },
    { name: 'Karin Persson', email: 'karin@example.com', city: 'Linköping' },
    { name: 'Mikael Andersson', email: 'mikael@example.com', city: 'Helsingborg' },
    { name: 'Emma Gustafsson', email: 'emma@example.com', city: 'Norrköping' },
    { name: 'Peter Björk', email: 'peter@example.com', city: 'Lund' }
  ];

  function handleShowInfo(name: string) {
    alert(name);
  }

  return (
    <>
      <h1>Phone Book</h1>
      <UserList users={users} onShowInfo={handleShowInfo}></UserList>
    </>
  );
}

export default App;
