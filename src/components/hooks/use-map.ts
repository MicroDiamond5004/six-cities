import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { OfferMap } from '../../types/type-offers';
import { Map, TileLayer } from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  cordinats: OfferMap,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      console.log(cordinats);
      const instance = new Map(mapRef.current, {
        center: {
          lat: cordinats.latitude,
          lng: cordinats.longitude,
        },
        zoom: cordinats.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cordinats]);
  return map;
}

export default useMap;
