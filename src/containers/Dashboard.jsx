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
    <>
      <header className='dashboard-header'>
        <h1 className='dashboard-title'>Statistics app</h1>
        <p className='dashboard-subtitle'>This is an automatically analyzing web application able to collect information about the interactions on the components on it.
          <br />
          Additionally, you can easily interact with data, download reports and access the source code currently uploaded on GitHub.
          <br />
          Feel free to let your own feedback on my personal email and social media.
        </p>
      </header>
      <Counter interactions={interactionCount} />
      <Button onClick={() => parentToChild()} />
    </>
  );
}

export default Dashboard;