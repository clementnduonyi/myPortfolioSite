import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';
import { useEffect, useRef, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    FormGroup,
    Label,
    Input,
    Navbar,
    NavbarBrand
  } from "reactstrap";


const TomMap = () => {
    const mapElement = useRef();
    const longitude = 7.91258;
    const latitude = 5.01642;
    const [map, setMap] = useState({});
    const mapZoom = 17


        
   
    const myCrurrentLocation = [longitude, latitude];
    useEffect(() => {
        const map = tt.map({
            key: 'QwQD43vvWGfxphjw6GzEzWU54d6vZ5pr',
            container: mapElement.current,
            center: myCrurrentLocation,
            
            zoom: mapZoom,
            
        })
        setMap(map);
        map.addControl(new tt.NavigationControl())

        
        const marker = new tt.Marker().setLngLat(myCrurrentLocation).addTo(map);
  
        const popupOffsets = {
          top: [0, 0],
          bottom: [0, -70],
          'bottom-right': [0, -70],
          'bottom-left': [0, -70],
          left: [25, -35],
          right: [-25, -35]
        }
      
        const popup = new tt.Popup({offset: popupOffsets}).setHTML("<b>Graymatterverse,</b> Ibom e-library IBB Avenue, Uyo Akwa Ibom State");
        marker.setPopup(popup).togglePopup();
  
        return () => map.remove() 
       
    }, [])


    return (
        <div className="App">
          <Container className="mapContainer">
            <Row>
              <Col xs="">
                <div ref={mapElement} className="mapDiv" />
              </Col>
            </Row>
          </Container>
        </div>
      );
}

export default TomMap;