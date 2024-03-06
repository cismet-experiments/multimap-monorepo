import { Viewer } from 'resium';

export function App() {
  return (
    <Viewer
      full
      timeline={false}
      animation={false}
      baseLayerPicker={false}
      homeButton={false}
      geocoder={false}
      navigationHelpButton={false}
      sceneModePicker={false}
      fullscreenButton={false}
      infoBox={true}
    />
  );
}

export default App;
