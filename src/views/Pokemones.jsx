import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Pokemones() {
    const [pokes, setPokes] = useState([]); // Estado de la lista pokémon
    const [pokeSelect, setPokeSelect] = useState(""); // Estado del pokémon seleccionado
    const navigate = useNavigate();

    const url="https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

    const getPokes = async () =>{
      const res = await fetch(url);
      const {results} = await res.json();
      setPokes(results);
    };

    const goToPokeDatos = async () => {
      if(pokeSelect) navigate(`/pokemones/${pokeSelect}`);
      else alert("Selecciona un pokémon");
    };

    useEffect(() => {
      getPokes();
    },[]);

  return (
    <div className='container text-center d-flex flex-column'>
        <h2 className='mt-5'>Selecciona el pokémon</h2>
        <div className="col-sm-3 mx-auto mt-3">
          <select className='form-select text-center'
          value={pokeSelect}
          onChange={(p) => setPokeSelect(p.target.value)}
          >
            <option value="" disabled>
              Pokemones
            </option>
            {pokes.map(({name}, ind) => (
              <option key={ind} value={name}>
                {name}
              </option>
            ))}
          </select>
          <Button className='mt-3'
          onClick={goToPokeDatos}>
            Ver Detalle
          </Button>
        </div>    
    </div>
  )
}
