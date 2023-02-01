import {useDispatch} from 'react-redux'
import { changePage } from '../../redux/actions';
import style from './Pagination.module.css'
import BtnNext from '../Button/BtnNext';

export default function Pagination({pageCount, currentPage}) {
  const dispatch = useDispatch();
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  //cp = currentPage
  const handlerPage = (cp) =>{
    dispatch(changePage(cp));
  }

  const handlerNext = () => {
    dispatch(changePage(currentPage + 1))
  }

  return(
    <div className={style.pagination}>
      <section>
        <ul>
          {pages.map(page => (
            page === currentPage 
              ? <li key={page} onClick={() => handlerPage(page)} className={style.pageSelected}>{page}</li>
              : <li key={page} onClick={() => handlerPage(page)}>{page}</li>
            ))}
        </ul>
      </section>
      <section>
        {currentPage < pageCount && <BtnNext handlerNext={handlerNext}/>}
      </section>
    </div>
  )
}