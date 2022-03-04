import { AddColorForm, ColorList, FilterColorForm } from './components';
import { ContextProvider } from './state';
import './style/global.scss';

const App = () => {
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
