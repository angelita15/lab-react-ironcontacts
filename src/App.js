import logo from './logo.svg';
import './App.css';
import contacs from './contacts.json'
import { useState } from 'react';

function App() {
  const [allContacs, setAllContacs] = useState(contacs)

  const arrCopy = [...allContacs]

  const remainingArr = arrCopy.slice(5, -1)
  const randomPost = Math.floor(Math.random() * remainingArr.length)
  const newElem = () => {

    setAllContacs(remainingArr.indexOf(randomPost))
  }
  return (
    <div className="App">
      <h1>
        IronContacs
      </h1>
      <button onClick={newElem}>
        Add Random Contac
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {
            arrCopy.slice(0, 5).map(elem => {
              return <tr key={elem.id}>
                <td>
                  <img src={elem.pictureUrl} alt="img" />
                </td>
                <td>
                  <p>{elem.name}</p>
                </td>
                <td>
                  <p>{elem.popularity}</p>
                </td>
                <td>
                  {elem.wonOscar && <p> 🏆</p>}
                </td>
                <td>
                  {elem.wonEmmy && <p> 🏆</p>}
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
