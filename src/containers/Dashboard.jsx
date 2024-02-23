import './Dashboard.css';
import Button from '../components/Button'
import Counter from '../components/Counter'
import { useState } from 'react';
import { getAllInteractions, postInteraction } from '../helpers';
import InteractionList from '../components/InteractionList';

function Dashboard() {

  const [interactionCount, setInteractionCount] = useState()

  const parentToChild = async () => {
    const interactions = await getAllInteractions()
    postInteraction()
    setInteractionCount(interactions.length)
  }

  return (
    <div className='dashboard'>
      <div className='dashboard-card'>
        <Counter interactions={interactionCount} />
        <Button onClick={() => parentToChild()} />
      </div>
      <div className='dashboard-card'>
      </div>
      <div className='dashboard-card long-card'>
        <InteractionList data={() => {getAllInteractions()}}/>
      </div>
      <div className='dashboard-card'>
        
      </div>
      <div className='dashboard-card'>
        
      </div>
    </div>
  );
}

export default Dashboard;