import { Pokemon } from '../../types/Pokemon';
import Card from '../Card';

interface Props {
  pokemons: Pokemon[];
}

export default function Gallery(props: Props) {
  const { pokemons } = props;

  return (
    <div className='collection-container'>
      {pokemons.map((pokemon, key) => {
        return (
          <div key={key}>
            <Card
              name={pokemon.name}
              id={pokemon.id}
              type={pokemon.types[0].type.name}
              image={pokemon.sprites.front_default}
            />
          </div>
        );
      })}
    </div>
  );
}
