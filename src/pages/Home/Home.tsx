import React, { useEffect, useState } from "react";
import s from "./Home.module.scss";
import axios from "axios";
import getSearch from "../../API/Api";
import { getProducts } from "../../API/Api";
import { sortByName } from "../../API/Api";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import { useStr } from "../../store/ItemStore";
import Products from "../../components/Product/Product";
import Paginate from "../../components/Paginate/Paginate";
function Home() {

  const [search, setSearch] = useState('');

  const [products, setProducts] = useState([])


  const { setId, limit, currentPage, offset, setCurrentPage, setOffset }:any = useStr(state => state)

  const submit = (event: any) => {
    event.preventDefault()
    if(search == null){
      getProducts(setProducts, 0, limit)
    }else{
      getSearch(search, setProducts)
    }
  };

  useEffect(() => {
    getProducts(setProducts, 0, limit)
  }, [])

  const currentPaginatePage = (number:number) => {
    setCurrentPage(number);
    setOffset(number*limit-limit);
    getProducts(setProducts, offset, limit)     
  }
  

  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.Home__title}>Товары</h1>
        <div className={s.Home__top}>
          <div className={s.Home__sort}>
            <p className={s.Home__sort__title}>Сортировка:</p>
            <div className={s.Home__sort__btns}>
              <button className={s.Home__sort__btns__btn} onClick={() => sortByName('title', setProducts, 'asc')}>По названию</button>
              <button className={s.Home__sort__btns__btn} onClick={() => sortByName('price', setProducts, 'asc')}>По цене</button>
              <button className={s.Home__sort__btns__btn} onClick={() => sortByName('rating', setProducts, 'desc')}>По рейтингу</button>
            </div>
            <form className={s.Home__top__search} onSubmit={(event) => submit(event)}>
            <input type="text"
              className={s.Home__top__search__input}
              value={search}
              onChange={(event) => { setSearch(event.target.value); } } />
            {/* <button className={s.Home__search__btn}>Поиск</button> */}
          </form>
          </div>
        </div>
        <Products products={products}/>
        <Paginate limit={limit} currentPage={currentPage} currentPaginatePage={currentPaginatePage}/>
      </div>
    </>
  );
}

export default Home;
