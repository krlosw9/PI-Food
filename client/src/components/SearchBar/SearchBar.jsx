import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {seacrhRecipe, clearErrorStatus} from '../../redux/actions/'
import style from './SearchBar.module.css'

export default function SearchBar() {
  const errorStatus = useSelector(store => store.errorStatus);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const handlerSubmit = (e) =>{
    e.preventDefault();
    if (error === '') {
      dispatch(seacrhRecipe(input));
      setInput('');
      setLoading('Loading...');
      setTimeout(() => {
        setLoading('');
      }, 3000);
    }
  }

  const handlerChange = (e) =>{
    validate(e.target.value);
    setInput(e.target.value);
    if (errorStatus) {
      //Si existen mensajes de error de la anterior consulta y se esta digitando en el campo de busqueda, entonces se limpia el statusError
      dispatch(clearErrorStatus());
    }
  }

  const handlerErrorStatus = () =>{
    dispatch(clearErrorStatus());
  }

  const validate = (txtSearch) =>{
    const expRegText = new RegExp(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/);

    txtSearch.length > 0 
      ? (!expRegText.test(txtSearch)) ? setError('only letters are allowed') : setError('')
      : setError('')
  }

  return(
    <div className={style.searchBar}>
      <form onSubmit={handlerSubmit}>
        <input type="text" value={input} onChange={handlerChange} placeholder='Search by name' className={style.searchBarInput}/>
      </form>
      {loading && <p>{loading}</p>}
      {error && <p className='errorMessage'>{error}</p>}
      {errorStatus && <div className={`errorMessage ${style.errorStatus}`}><p>{errorStatus}</p><p onClick={handlerErrorStatus}>X</p></div>}
    </div>
  )
}