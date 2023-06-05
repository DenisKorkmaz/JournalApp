
import { EntryForm } from './components/EntryForm/EntryForm'; 
import { Entries } from './components/Entries/Entries'; 
import Header from './components/Header/Header';
import EntryList from './components/EntryList/EntryList';

function App() {
  return (
    <div className="App">
      <Header>Journal</Header>
      <EntryForm />
      <Entries/>
      <EntryList/>
    </div>
  );
}

export default App;
