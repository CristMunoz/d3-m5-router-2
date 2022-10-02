import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokecard from '../components/Pokecard';

export default function Pokedatos() {
  const {name} = useParams();
  const [pokes, setPokes] = useState({});

  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokes = async (name) => {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    const src = data.sprites.other.dream_world.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat
    }));
    const types = data.types.map((el) => el.type.name).join(" ");
    setPokes({name, stats, src, types});
  };

  useEffect(() => {
    getPokes(name);
  }, [name]);

  return (
    <div>
      <Pokecard pokes={pokes} />
    </div>
  )
}
