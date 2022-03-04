import {ContextProvider} from './state';
import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";
import FilterColorForm from './components/FilterColorForm';
import './style/global.scss';

function App() {
  return (
    <ContextProvider>
      <div className='wrapper'>
        <AddColorForm />
        <FilterColorForm/>
        <ColorList />
      </div>
    </ContextProvider>
  );
};

export default App;
