import {ContextProvider} from './state';
import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";
import FilterColorForm from './components/FilterColorForm';

function App() {
  return (
    <ContextProvider>
      <AddColorForm />
      <FilterColorForm/>
      <ColorList />
    </ContextProvider>
  );
};

export default App;
