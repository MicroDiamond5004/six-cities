import { Offer, OfferMap } from '../../../types/type-offers';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../../const';
import L, { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  currentPoint: Offer | undefined;
  cordinats: OfferMap;
  height: number;
  width: number | null | undefined;
}

function Map(props: MapProps): JSX.Element {
  const {offers, currentPoint, cordinats, height, width} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cordinats);

  useEffect(() => {
    const defaultCustomIcon = new Icon({
      iconUrl: URL_MARKER_DEFAULT,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    const activeCustomIcon = new Icon({
      iconUrl: URL_MARKER_CURRENT,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    if(map) {
      const markerLayer = layerGroup().addTo(map);
      map.panTo(new L.LatLng(cordinats.latitude, cordinats.longitude));
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(currentPoint !== undefined && currentPoint.id === offer.id ? activeCustomIcon : defaultCustomIcon).addTo(markerLayer);
      });
      return(() => {
        map.removeLayer(markerLayer);
      });
    }
  }, [map, offers, currentPoint]);

  return(<div style={{'height': `${height}px`, 'width': width ? `${width}px` : '100%'}} ref={mapRef} />);
}

export default Map;
