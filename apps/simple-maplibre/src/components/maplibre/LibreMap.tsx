import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import MapOverlay from './ui/MapOverlay';

const LibreMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(7.150764);
  const [lat] = useState(51.256);
  const [zoom] = useState(14);
  const [clickInfo, setClickInfo] = useState(null);
  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://omt.map-hosting.de/styles/osm-bright/style.json`,
      center: [lng, lat],
      zoom: zoom,
      pitch: 100,
      // bearing: 172,
    });

    map.current.on('click', (e) => {
      const features = map.current.queryRenderedFeatures(e.point);
      setClickInfo({
        ...e.lngLat,
        type: features[0]?.properties?.class || 'keine Angaben',
        title: features[0]?.properties?.name || 'Informationen',
      });
    });

    map.current.on('load', function () {
      map.current.addSource('wms-test-source', {
        type: 'raster',
        // use the tiles option to specify a WMS tile source URL
        // https://maplibre.org/maplibre-gl-js-docs/style-spec/sources/
        tiles: [
          'https://maps.wuppertal.de/deegree/wms?service=WMS&request=GetMap&layers=R102%3Atrueortho202010&styles=&format=image%2Fpng&transparent=false&version=1.1.1&tiled=true&type=wms&cssFilter=undefined&width=256&height=256&srs=EPSG%3A3857&bbox={bbox-epsg-3857}',
        ],
        tileSize: 256,
      });
      map.current.addSource('terrainSource', {
        type: 'raster-dem',
        tiles: [
          'https://wuppertal-terrain.cismet.de/services/wupp_dgm_01/tiles/{z}/{x}/{y}.png',
        ],
        tileSize: 512,
        maxzoom: 15,
      });

      map.current.addLayer({
        id: 'wms-test-layer',
        type: 'raster',
        opacity: 0.25,
        source: 'wms-test-source',
        paint: {
          'raster-opacity': 0.4,
          'raster-contrast': 0.4,
        },
      });
    });

    map.current.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: true,
      }),
      'top-left'
    );
    map.current.addControl(
      new maplibregl.TerrainControl({
        source: 'terrainSource',
        maxzoom: 16,

        exaggeration: 1,
      }),
      'top-left'
    );
  }, [lng, lat, zoom]);
  return (
    <div style={{ position: 'relative', width: '100%', height: '900px' }}>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
        <MapOverlay>
          <h4>{clickInfo?.title || 'Information'}</h4>
          <p>Latitude: {clickInfo?.lat || ''}</p>
          <p>Longitude: {clickInfo?.lng || ''}</p>
          <p>Art: {clickInfo?.type || ''}</p>
        </MapOverlay>
      </div>
    </div>
  );
};

export default LibreMap;
