import './App.css';
import {Router} from '@reach/router';
import ViewPet from './components/ViewPet';
import AllPets from './components/AllPets';
import AddPet from './components/AddPet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App">
      <Router>
        <AllPets path= "/" />
        <AddPet path="/pets/new"/>
        <ViewPet path="/pets/:id"/>
        <EditPet path="/pets/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
