
import { MapContainer, TileLayer, Popup, Marker, Polygon, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


import { Spinner } from 'reactstrap'
import { useState } from 'react';


const containerStyle = {
  width: '100%',
  height: '100%'
};
const center = [5.0048405, 7.9057385];


{/*<Spinner color="success" type="grow">
    Loading...
</Spinner>*/}

const DisplayMap = () =>{
  
    return (
        <MapContainer
        center={center} 
        zoom={14} 
        scrollWheelZoom={true} 
        style={containerStyle}
        >
        <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2NhcHAiLCJhIjoiY2w0ZWQyODlyMDBkYjNjcW9sYTBzZW4zayJ9.stoyOcHBtm4De6h6mBSUiQ`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />
          <Marker 
          position={[5.0048405, 7.9057385]}
          draggable={true}
          animate={true}
          >
            <Popup>
              Hey ! you found me
            </Popup>
            <Tooltip 
            permanent 
            direction="top">
              60 Ndioho street, Mbierebe obio
            </Tooltip>
          </Marker>
      </MapContainer>
    )
    
}

export default DisplayMap