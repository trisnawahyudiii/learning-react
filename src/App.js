import './App.css';
import Calculator from './Components/Calculator/Calculator';
import Counter from './Components/Counter/Counter';
import Digitalclock from './Components/DigitalClock/Digitalclock';
import Todolist from './Components/ToDoList/Todolist';

function App() {
    return (
        <div className="App">
            <Digitalclock />
            <Counter />
            <Todolist />
            {/* <Calculator /> */}
        </div>
    );
}

export default App;
