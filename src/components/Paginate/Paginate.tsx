import { useEffect, useState } from "react"
import s from "./Pagination.module.scss"
import ReactPaginate from "react-paginate"


interface IParams{
  limit:number
  currentPage:number
  currentPaginatePage:(val:number) => void
}


const Paginate = ({ limit, currentPage, currentPaginatePage }:IParams) => {



  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => currentPaginatePage(e.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(100 / 12)}
        previousLabel="<"
        className={s.Paginate}
      />
    </>
  )
}

export default Paginate;