import React from 'react'
import style from "./Paginate.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { nextOrPrev } from '../../redux/actions/nextOrPrevActions';
const Paginate = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const paginate = (event) => {
    dispatch(nextOrPrev(event.target.name));
  };
  return (
   <div className={style.paginateContainer}>
     <div className={style.paginateButtons}>
    <button className={style.pagButts} name="prev" onClick={paginate}>
      Previous
    </button>
    <div className={style.currentPageContainer}>
      <p className={style.currentPageP}>{currentPage+1}</p>
    </div>
    <button className={style.pagButts} name="next" onClick={paginate}>
      Next
    </button>
  </div>
   </div>
  )
}

export default Paginate