import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import rickAndMortyBackground from './assets/RyM-space.jpg'
import axios from 'axios';
import Character from '../component/Character';

function App() {

  const [isLoading, setIsLoading] = useState(true); 
  const [RickAndMortyLocation, setRickAndMortyLocation] = useState({});
  const [typeId, setTypeId] = useState("");

  const randomId = Math.floor(Math.random() * 126) +1;
  useEffect(() =>{
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then((res) => {
      setIsLoading(false);
      setRickAndMortyLocation(res.data);
    });
  }, []);

  const searchLocation = () =>{
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
    .then((res) => {
      setIsLoading(false);
      setRickAndMortyLocation(res.data);
    });
  }

  return (
    <>
    {
      isLoading ? (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
    <div className="App">
      <div className="grid-container">      
      <div className='header'>
      <div className="title-box">
      <h1 className='title'>Rick And Morty</h1> 
      {/* <h1 className='title'>Rick<br/>&nbsp;&nbsp;And <br/> &nbsp;&nbsp;&nbsp;Morty</h1> */}
      </div>
       <img className='header-img' src={rickAndMortyBackground} alt="rick and morty" /> 
       <div className='search'>
         <div className="btn-search-box">
          <input type="text" value={typeId} placeholder="1 to 126" onChange={e => setTypeId(e.target.value)}/>
          <a href=""></a>
</div>
          {
          typeId >= 127 || typeId == 0 ?
          (
            <button disabled className='btn' style={{background:"purple", color: "white"}}>Search</button>
          ) :
          <button onClick={searchLocation} className='btn' style={{background:"blue", color:"white"}}>Search</button> 
          }</div>
      </div>
      <div className='browser-dimension-container'>
        
          <h2>We are at: {RickAndMortyLocation.dimension}</h2>
        
        <div className='place-info'>
            <p><b className='white-content'>Type: </b>{RickAndMortyLocation.type}</p>
            <p><b className='white-content'>Population: </b>{RickAndMortyLocation.residents?.length}</p>
          </div>
        </div>
        </div>
        
      
      <div className='main-cards'>
        <div className="cards-scroll">
        <div className='location'>
        <div className='cards-content'>
          {
            RickAndMortyLocation.residents?.map(location => (
              <Character
              key={location} 
              location={location}
              />
            )) 
        
          }</div>
        </div>
      </div>
            <footer>
          <h2>By Luce❤</h2>
            </footer>
         
    </div> </div>
    </>
        )}
       </>
       )
       
}

export default App
