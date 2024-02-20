import './Counter.css';
import { getAllInteractions } from '../helpers';
import { useEffect, useState } from 'react';

function Counter(props) {

  const [interactionCount, setInteractionCount] = useState(0)

  useEffect(() => {
    const fetchInitialCount = async () => {
      try {
        //I need to assign the await first to make it "accessible",otherwise .length will return undefined.
        const initialCountData = await getAllInteractions()
        const initialCount = initialCountData.length
        setInteractionCount(initialCount)
      }
      catch (error) {
        console.error('Error fetching the information from interaction count: ', error)
      }
    }
    fetchInitialCount()
  }, [props.interactions])



  return (
    <>
      <h2>Counter component</h2>
      <p>{interactionCount}</p>
    </>
  );
}

export default Counter;