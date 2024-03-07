// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';
// import NxWelcome from './nx-welcome';
import './App.css';
import LibreMap from '../components/maplibre/LibreMap';

export function App() {
  return (
    <div className="App">
      {/* <NxWelcome title="simple-maplibre" /> */}
      <LibreMap />
    </div>
  );
}

export default App;
