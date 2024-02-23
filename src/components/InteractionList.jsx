import './InteractionList.css';
import { getAllInteractions } from '../helpers';
import { useEffect, useState } from 'react';


function InteractionList() {

  const [Data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const interactions = await getAllInteractions();
        setData(interactions)
        console.log(Data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])


  return (
    <div className='InteractionList'>
      <h2>Recent interactions</h2>
      <table className='interaction-table'>
        <thead>
          <tr>
            <th>Type</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Click</td>
            <td>13:48:00</td>
          </tr>
          <tr>
            <td>Click</td>
            <td>13:48:00</td>
          </tr>
          {Data.map((interaction, index) => (
            <tr key={index}>
              <td>{interaction.type}</td>
              <td>{interaction.date}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default InteractionList;