import './App.css';

import AddTask from './Component/AddTask';
import TaskListe from './Component/TaskListe';

function App() {
  return (
    <div className="App">
      <h1> ToDo Aplication </h1>
      <AddTask/>
      <TaskListe/>
    </div>
  );
}

export default App;
