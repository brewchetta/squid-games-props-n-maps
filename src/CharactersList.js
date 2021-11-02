import CharacterCard from "./CharacterCard"

const characters = [
  {id: 1, name: "old man", number: "001"},
  {id: 2, name: "Seong Gi-hun", number: "456"},
  {id: 3, name: "Kang Sae-byeok", number: "067"}
]

function CharactersList(props) {

  const mappedCharacters = characters.map(character => <CharacterCard key={character.id} name={character.name} number={character.number} />)

  return (
    <>
      <h1>Characters:</h1>

      {mappedCharacters}
    </>
  )
}

export default CharactersList
