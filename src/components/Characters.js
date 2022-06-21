import { useEffect, useState, useReducer, useMemo } from "react"

//Reducer puede tener un estado inicial
const initialState = {
  favorites: []
}

//se parece al manejo del reducer de redux, necesita el estado inicial y los action
const favoriteReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return{
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state
  }

}

const Characters = () => {

  const [characters, setCharacters] = useState([])

  //use reducer maneja un dispatch
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

  //Buscador con UseMemo
  const [search, setSearch] = useState('')

  //Funcion anomina primer parametro y segundo parametro variable que está escuchando algun cambio
  useEffect(() => {
    
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results));
  
  }, [])

  const handleOnClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  // const filterSearch = characters.filter((user)=> {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // })

  //El filter puede realizarse con Memo
  const filterSearch = useMemo (()=> 
  characters.filter((user)=> {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }), [characters, search]
  )

  return (

    <div>
      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}

        <input type='text' value={search} onChange={handleSearch} />

      {filterSearch.map(character => (
        <div className="character-card" key={character.id}> 
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleOnClick(character)}>Fav</button>
        </div>
        
      ))}
    </div>
  )
}

export default Characters