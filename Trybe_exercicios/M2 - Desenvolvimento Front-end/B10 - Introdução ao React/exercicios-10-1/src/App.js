import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const myTasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

function App() {
  return (
    <div>
      <ul>{ myTasks.map(task => Task(task)) }</ul>
    </div>
  );
}

export default App;
