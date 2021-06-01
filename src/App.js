import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

function App() {
  const [star, setStar] = useState(0);
  const [hover, setHover] = useState(0);


  const emptyStar = 'https://i.imgur.com/FKpmu4t.png';
  const fullStar = 'https://i.imgur.com/ayTO5W7.png';

  return (
    <div className="App">
      <img data-tip='1 star' className='star' onMouseOver={() => {setHover(1)}} onMouseLeave={() => setHover(0)} onClick={() => setStar(1)} alt='star' src={hover >= 1 || star >= 1 ? fullStar : emptyStar} />
      <img data-tip='2 stars' className='star' onMouseOver={() => {setHover(2)}} onMouseLeave={() => setHover(0)} onClick={() => setStar(2)} alt='star' src={hover >= 2 || star >= 2 ? fullStar : emptyStar}/>
      <img data-tip='3 stars' className='star' onMouseOver={() => {setHover(3)}} onMouseLeave={() => setHover(0)} onClick={() => setStar(3)} alt='star' src={hover>= 3 || star >= 3 ? fullStar : emptyStar}/>
      <img data-tip='4 stars' className='star' onMouseOver={() => {setHover(4)}} onMouseLeave={() => setHover(0)} onClick={() => setStar(4)} alt='star' src={hover>= 4 || star >= 4 ? fullStar : emptyStar}/>
      <img data-tip='5 stars' className='star' onMouseOver={() => {setHover(5)}} onMouseLeave={() => setHover(0)} onClick={() => setStar(5)} alt='star' src={hover>= 5 || star >= 5 ? fullStar : emptyStar}/>
      <ReactTooltip />
    </div>
  );
}

export default App;

// Example: https://5f91c06f624acd0a9c980b61--zen-meninsky-057ceb.netlify.app/