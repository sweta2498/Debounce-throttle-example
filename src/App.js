import logo from './logo.svg';
import './App.css';
import Throttle_Simple from './Throttle_Simple/Throttle_Simple';
import Debounce_Simple from './Rebounce_Simple/Debounce_Simple';
import Search_debounce from './Search_Rebounce/Search_debounce';
import Lodash_Debounce from './Lodas-Rebounce/Lodash_Debounce';
import Lodash_Debounce_class from './Lodas-Rebounce/Lodash_debounce_class';
import Debounce_input from './Rebounce-Input/Debounce_input';

function App() {
  return (
    <div className="App">
      <Debounce_Simple/>
      <Throttle_Simple/>
      <Search_debounce/>
      <Lodash_Debounce/>
      <Lodash_Debounce_class/>
      <Debounce_input/>

    </div>
  );
}

export default App;
