import React, {useState} from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import plantData from "./data/calflora-out.json";
/*import * as parkData from "./data/skateboard-parks.json";*/
import "./App.css";
/*import loader from "sass-loader";*/

console.log(plantData)
export const icon = new Icon({
  iconUrl: "/plant.png",
  iconSize: [25, 25]
});



export default function App() {
  


   /*const clickedPlant = plantData.pop*/

  /*function handleClick(clickedPlant) {
     clickedPlant = this.setState(e.target.value)
  }*/
  


const [activePlant, setActivePlant] = React.useState(
  {
      "Number of Plants": "20",
      "Date / Time": "2021-11-17 13:08:38.0",
      "Phenology": "Flowering",
      "Common Name": "French broom",
      "Percent Cover": "1 %",
      "Observer": "Henry Inman",
      "Taxon": "Genista monspessulana",
      "Latitude": "37.933429",
      "ID": "mg153983",
      "Longitude": "-122.68728"
  }
  ); 
  let activePlantArray = ["Number of Plants", "Date / Time", "Phenology", "Common Name", "Percent Cover", "Observer", "Taxon", "Latitude", "ID", "Longitude"]
  let handleClickPlantVar = ["Number of Plants", "Date / Time", "Phenology", "Common Name", "Percent Cover", "Observer", "Taxon", "Latitude", "ID", "Longitude"]
  const filteredPlants = plantData.filter(plant => plant.Taxon === "Genista monspessulana")
  const handleClick = (event) => { 
    handleClickPlantVar = event.target.value;
    /*activePlantArray = Object.values(handleClickPlantVar);*/
    setActivePlant(activePlantArray);
  
  }
  



  return (
     
    <div style={{ display: "grid",  gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
    <div>
    <Map center={[37.93, -122.68]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {filteredPlants.map(plant => (
        <Marker
         key={plant.ID}
         position={[plant.Latitude, plant.Longitude]}
         onClick={handleClick}
         icon={icon}
         >
       
       <Popup position={[plant.Latitude, plant.Longitude]}>
             <div>
               
                    <ul><h3>Specie2s:</h3> 
                    {plant.ID}{activePlantArray}</ul>
               
             </div>

          </Popup>
        </Marker>
      ))}
     </Map>
     </div>
     <div>
     
     <div>
     <ul><h3>Spe3cies:</h3> 
   
     {activePlantArray}</ul>
                    </div>
           
     </div>
     </div>
  )}
