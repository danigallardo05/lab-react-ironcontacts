import './App.css';
import contactsData from './contacts.json'
import { useState } from 'react';
import throphy from './throphy1.png'



function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5))
  const [sortName, setSortName] = useState(contactsData)



  // add one contact function 

  const addRandom = () => {
    console.log('clicked')
    let remainingContactIndex = Math.floor(Math.random() * remainingContacts.length)
    let randomContact = remainingContacts[remainingContactIndex]
    const copyArr = [...contacts, randomContact]
    setContacts(copyArr)
    const copyRemainingContacts = [...remainingContacts]
    copyRemainingContacts.splice(remainingContactIndex, 1)
    setRemainingContacts(copyRemainingContacts)
  }

  // function to sort by name

  const sortNameFunction = () => {
    console.log("hi")
    const copySortName = [...contactsData]
    copySortName.sort()
    //setContacts(copySortName)
  }


  // function to sort by popularity




  return (
    <div className="App">
      <h1>IronContacts</h1>

      <div className='button'>
        <button onClick={addRandom}>
          Add Random Contact
        </button>

        <button >Sort by popularity</button>

        <button onClick={sortNameFunction}>Sort by name </button>
      </div>

      <br />
      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(e => {
            return (
              <tr>
                <td><img className='picture' src={e.pictureUrl} alt="celeb" /></td>
                <td>{e.name}</td>
                <td>{e.popularity.toFixed(2)}</td>
                <td>{e.wonOscar ? <img className='picture2' src={throphy} alt="trophy" /> : null}</td>
                <td>{e.wonEmmy ? <img className='picture2' src={throphy} alt="trophy" /> : null}</td>
                <td><button>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}



export default App;
