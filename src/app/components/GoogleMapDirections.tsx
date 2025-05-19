import { useState } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -23.55052, // São Paulo (pode ajustar)
  lng: -46.633308,
};

type Props = {
  apiKey: string;
};

export default function GoogleMapDirections({ apiKey }: Props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  const handleRoute = () => {
    if (!origin || !destination) return;
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        } else {
          alert("Rota não encontrada!");
        }
      }
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          className="p-2 rounded bg-gray-200 text-black flex-1"
          placeholder="Origem (ex: Estação Sé, São Paulo)"
          value={origin}
          onChange={e => setOrigin(e.target.value)}
        />
        <input
          className="p-2 rounded bg-gray-200 text-black flex-1"
          placeholder="Destino (ex: Estação Barra Funda, São Paulo)"
          value={destination}
          onChange={e => setDestination(e.target.value)}
        />
        <button
          className="bg-[#FF7A00] text-black font-bold px-6 py-2 rounded hover:bg-white hover:text-[#FF7A00] transition"
          onClick={handleRoute}
        >
          Traçar rota
        </button>
      </div>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}