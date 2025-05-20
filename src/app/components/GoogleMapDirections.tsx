"use client";
import { useRef, useState } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer, Autocomplete } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -23.55052, // São Paulo
  lng: -46.633308,
};

type Props = {
  apiKey: string;
};

export default function GoogleMapDirections({ apiKey }: Props) {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Referências para os Autocomplete
  const originRef = useRef<google.maps.places.Autocomplete | null>(null);
  const destinationRef = useRef<google.maps.places.Autocomplete | null>(null);

  const handleRoute = () => {
    if (!originRef.current || !destinationRef.current) return;

    const originPlace = originRef.current.getPlace();
    const destinationPlace = destinationRef.current.getPlace();

    if (!originPlace?.geometry?.location || !destinationPlace?.geometry?.location) {
      alert("Selecione um local válido para origem e destino.");
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: originPlace.geometry.location,
        destination: destinationPlace.geometry.location,
        travelMode: google.maps.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
          if (map) {
            map.panTo(originPlace.geometry.location);
          }
        } else {
          alert("Rota não encontrada!");
        }
      }
    );
  };

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      libraries={["places"]}
    >
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <Autocomplete
          onLoad={autocomplete => (originRef.current = autocomplete)}
        >
          <input
            className="p-2 rounded bg-gray-200 text-black flex-1"
            placeholder="Origem (ex: Vila Mariana, São Paulo)"
            type="text"
          />
        </Autocomplete>
        <Autocomplete
          onLoad={autocomplete => (destinationRef.current = autocomplete)}
        >
          <input
            className="p-2 rounded bg-gray-200 text-black flex-1"
            placeholder="Destino (ex: Paulista, São Paulo)"
            type="text"
          />
        </Autocomplete>
        <button
          className="bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition"
          onClick={handleRoute}
        >
          Traçar rota
        </button>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={mapInstance => setMap(mapInstance)}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
}