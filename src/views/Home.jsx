import { useState } from 'react';
import Button from '../components/Button'
import Counter from '../components/Counter'
import { getAllInteractions, postInteraction } from '../helpers';
import './Home.css';

function Home() {
  const [interactionCount, setInteractionCount] = useState()
     
  const parentToChild = async () => {
    const interactions = await getAllInteractions()
    postInteraction()
    setInteractionCount(interactions.length)
    console.log(interactions.length)
  }


  return (
    <>
      <h2>HomeComponent</h2>
      <Counter interactions={interactionCount} />
      <Button onClick={() => parentToChild()} />
    </>
  );
}

export default Home;