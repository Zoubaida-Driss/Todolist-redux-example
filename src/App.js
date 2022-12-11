import logo from './logo.svg';
import './App.css';
import TaskList from './Components/TaskList';
import AddNewTask from './Components/AddNewTask';

function App() {
  return (
    <div className="App">
      <AddNewTask/>
     <TaskList/>
    </div>
  );
}

export default App;
