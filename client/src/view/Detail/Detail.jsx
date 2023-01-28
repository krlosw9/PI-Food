import { useEffect } from "react"
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {recipeDetail, clearDetailRecipe} from '../../redux/actions'
import DetailCard from "../../components/DetailCard/DetailCard"
import Loading from '../../components/Loading/Loading'
// // import style from './Detail.module.css'

export default function Detail() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(store => store.recipeDetail);
  
  useEffect(() => {
    dispatch(recipeDetail(id))

    return dispatch(clearDetailRecipe());
  },[dispatch,id]);

  return (
    <main>
      {
        Object.keys(recipe).length === 0
          ? <Loading />
          : <DetailCard recipe={recipe}/>
      }
      
    </main>
  )
}