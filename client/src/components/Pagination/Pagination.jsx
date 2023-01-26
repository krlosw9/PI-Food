import {useDispatch} from 'react-redux'
import { changePage } from '../../redux/actions';
import style from './Pagination.module.css'
import bntNext from '../../utils/pagination/bntNext.png'

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
          {pages.map(page => <li key={page} onClick={() => handlerPage(page)}>{page}</li>)}
        </ul>
      </section>
      <section>
        {currentPage < pageCount && <img src={bntNext} alt="button-next-pagination" onClick={handlerNext}/>}
      </section>
    </div>
  )
}