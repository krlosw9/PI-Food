import style from './Filters.module.css'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getDiets,filterByDiet,filterByCreator,orderByTitle,orderByHealthy } from '../../redux/actions'

export default function Filters() {
  const dispatch = useDispatch();
  const allDiets = useSelector(store => store.allDiets);

  useEffect(()=>{
    dispatch(getDiets())
  },[dispatch])

  const handlerFilterByDiet = (diet) =>{ dispatch(filterByDiet(diet)) }
  const handlerFilterByCreator = (creator) =>{ dispatch(filterByCreator(creator)) }
  const handlerOrderByTitle = (orientation) =>{ dispatch(orderByTitle(orientation)) }
  const handlerOrderByHealthy = (orientation) =>{ dispatch(orderByHealthy(orientation)) }

  return(
    <div className={style.filter}>
      {/* filtrar por dietas */}
      <select onChange={(e) => handlerFilterByDiet(e.target.value)} className={style.filterSelect}>
        <option value="none">Filter</option>
        <option value="none">All diets</option>
        {Array.isArray(allDiets) && allDiets.map(diet => <option value={diet.name} key={diet.id}>{diet.name}</option>)}
      </select>
      {/* filtrar por creado por el usuario o existente */}
      {/* Esto hace referencia al campo created de BD true es de BD y false es de Api externa */}
      <select onChange={(e) => handlerFilterByCreator(e.target.value)} className={style.filterSelect}>
        <option value="none">Filter</option>
        <option value="none">All</option>
        <option value="true">Created by users</option>
        <option value="false">Pre-existing</option>
      </select>
      {/* Ordenar por titulo ascendente o descendente*/}
      <select onChange={(e) => handlerOrderByTitle(e.target.value)} className={`${style.filterSelect} ${style.selectOrder}`}>
        <option value="none">Order</option>
        <option value="none">None</option>
        <option value="up">Title A-Z</option>
        <option value="down">Title Z-A</option>
      </select>
      {/* Ordernar por health score ascendente o descendente*/}
      <select onChange={(e) => handlerOrderByHealthy(e.target.value)} className={`${style.filterSelect} ${style.selectOrder}`}>
        <option value="none">Order</option>
        <option value="none">None</option>
        <option value="down">More healthy</option>
        <option value="up">Less healthy</option>
      </select>
    </div>
  )
}