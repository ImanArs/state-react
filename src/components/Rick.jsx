import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Rick = () => {
  const [ characters , setCharacters] = useState([])
  const [ selectedCharacter, setSelectedCharacter ] = useState(null)

  useEffect (() => {
    async function fetchCharacters () {
      try {
          const response = await axios.get('https://rickandmortyapi.com/api/character/')
          setCharacters(response.data.results)
      } catch (error){

      }
    }
    fetchCharacters()
  }, [])
  const hadleCharacterClick = (character) => {
    setSelectedCharacter (character)
  } 
  return (
    <div>
      <h1>Rick and Morty</h1>
      <ul>
        {
          characters.map((character) => (
            <li key={character.id} onClick={() => hadleCharacterClick(character)}>
              {character.name}
            </li>
          ))
        }
      </ul>
      {
      selectedCharacter && (
        <div>
          <h2>name {selectedCharacter.name}</h2>
          <img src={selectedCharacter.image} alt={selectedCharacter.name} />
          <p>status: {selectedCharacter.status}</p>
          <p>species: {selectedCharacter.species}</p>
        </div>
      ) 
      }
    </div>
  )
}

export default Rick