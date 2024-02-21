import './Dashboard.css';
import Button from '../components/Button'
import Counter from '../components/Counter'
import { useState } from 'react';
import { getAllInteractions, postInteraction } from '../helpers';

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
        <header className='dashboard-header'>
          <h1 className='dashboard-title'>Statistics app</h1>
          <p className='dashboard-subtitle'>This is an automatically analyzing web application able to collect information about the interactions on the components on it.
            <br />
          </p>
        </header>
      </div>
      <div className='dashboard-card'>
        <Counter interactions={interactionCount} />
        <Button onClick={() => parentToChild()} />
      </div>
      <div className='dashboard-card long-card'>

      </div>
      <div className='dashboard-card'>
        
      </div>
      <div className='dashboard-card'>
        
      </div>
    </div>
  );
}

export default Dashboard;