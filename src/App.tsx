import {ContextProvider} from './globalState';
import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";

function App() {
  return (
    <ContextProvider>
      <AddColorForm />
      <ColorList />
    </ContextProvider>
  );
};

export default App;
