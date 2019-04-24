import axios from "axios";
import { Store } from "../Store";
import { ActionTypes } from "../ActionTypes";

const Home = () => {
  const { state, dispatch } = React.useContext(Store);
  const [pokemon, usePokemon] = React.useState(["",""]);

  const fetchMyAPI = async () => {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${state.count}`);
    usePokemon([response.data.name, response.data.sprites.front_default]);
  }

  React.useEffect(() => {
    fetchMyAPI();
  }, [state.count]);

  return (
    <div className="p-4 shadow rounded bg-white">
      <h1 className="text-purple leading-normal">Next.js</h1>
      <p className="text-grey-dark">with Tailwind CSS + PokeAPI + ContextAPI + Hooks</p>
      <img src={pokemon[1]}></img>
      <h2 className="text-purple leading-normal">{pokemon[0]}</h2>
      <h2 className="text-purple leading-normal">{state.count}</h2>
      <button className="btn btn-blue" onClick={() => dispatch({ type: ActionTypes.INCREMENTAR })}>
        Próximo
      </button>
      <button className="btn btn-blue" onClick={() => dispatch({ type: ActionTypes.DECREMENTAR })}>
        Anterior
      </button>
    </div>
  );
}

export default Home;
