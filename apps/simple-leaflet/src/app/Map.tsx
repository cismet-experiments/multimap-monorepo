import { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, Popup, WMSTileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [51.261, 7.178] as LatLngTuple;

  return (
    <MapContainer
      center={position}
      zoom={20}
      style={{ height: 'calc(100vh - 16px)', width: '100wh' }}
    >
      <WMSTileLayer
        url="https://maps.wuppertal.de/deegree/wms"
        layers="R102:trueortho2022"
        format="image/png"
        transparent={true}
        maxZoom={19}
        opacity={0.7}
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
