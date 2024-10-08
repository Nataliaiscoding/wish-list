import { useState } from 'react';
import { data } from './data';
import './App.css';
import Photo from './Photo';

function App() {

  const [city, setCity] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const removeCity = (id) => {
    let newCity = city.filter(item => item.id !== id);
    setCity(newCity)
  }

  const showTextClick = (town) => {
    town.showMore = !town.showMore;
    setShowMore(!showMore)
  }

  return (
    <div className='big'>
      <div className='container'>
        <h1>Wish list of {city.length} places to visit between November 2024 and January 2025</h1>
      </div>

      <div className='containerImg'>
          <Photo />
      </div>

      {city.map((town => {
        const {id, city, image, description, timeForVisit, showMore} = town;
      
      return (
        <div key={id} className='containerPool'>
          <div className='container'>
            <h2>{id} - {city}</h2>
          </div>

          <div className='containerImg'>
            <img src={image} width='300px' alt='City' />
          </div>

          <div className='container'>
            <p>
            {showMore ? description : description.substring(0, 55) + "..."} 
            <button className='btnMore' onClick={() => showTextClick(town)}>{showMore ? "Show less" : "Show more"}</button>
            </p>
          </div>

          <div className='container'>
            <h3>Visiting time {timeForVisit}</h3>
          </div>

          <div className='container'>
            <button onClick={() => removeCity(id)}>Remove</button>
          </div>
        </div>
)
      }))}

      <div className='container'>
        <button onClick={() => setCity([])}>delete all</button>
      </div>
    </div>
  );
}
export default App;
