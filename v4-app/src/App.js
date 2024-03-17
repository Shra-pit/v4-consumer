import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MenuBar from './components/Navbar';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <>
      <MenuBar/>
      <Dashboard />
    </>
  );
}

export default App;
