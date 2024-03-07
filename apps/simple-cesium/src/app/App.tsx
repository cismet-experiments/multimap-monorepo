import { Cartesian3, Matrix4 } from 'cesium';
import { Cesium3DTileset, Viewer } from 'resium';

export function App() {
  const heightOffset = 0;
  const surface = Cartesian3.fromRadians(7.20009, 51.272034, 0.0);
  const offset = Cartesian3.fromRadians(7.20009, 51.272034, heightOffset);
  const translation = Cartesian3.subtract(offset, surface, new Cartesian3());
  const modelMatrix = Matrix4.fromTranslation(translation);

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
    >
      <Cesium3DTileset
        url="https://wupp-3d-data.cismet.de/mesh/tileset.json"
        modelMatrix={modelMatrix}
      />
    </Viewer>
  );
}

export default App;
