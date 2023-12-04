import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  return (
    <MapContainer
      style={{ height: "50vh", width: "100%" }}
      center={[latitude, longitude]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Last known location
        </Popup>
      </Marker>
    </MapContainer>
  );
}
