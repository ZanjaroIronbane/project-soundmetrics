import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      I'm always watching <Outlet />
    </div>
  );
}

export default App;
