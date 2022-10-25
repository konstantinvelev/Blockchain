import './App.css';
import { Configuration } from './components/Configuration';
import { Transaction } from './components/Transaction';
import { Monitor } from './components/Monitor';
import { ConfigProvider } from './contexts/configContext';


function App() {
  return (
    <ConfigProvider>
      <div className="App">
        <h1 className='header'>Ethereum monitor</h1>
        <div className='components'>
          <Configuration />
          <Monitor />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
