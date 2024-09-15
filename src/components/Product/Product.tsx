import React, { useEffect, useState } from "react";
import s from "./Products.module.scss";
import { Link } from "react-router-dom";
import { useStr } from "../../store/ItemStore";
import { sortByName } from "../../API/Api";

const Products = ({ products }:any) => {
  const { setId }: any = useStr(state => state);
  return (
    <>
      <div className={s.Home__bottom}>
        {products.map((i: any, el: number) => (
          <div className={s.Home__bottom__item} key={el}>
            <img className={s.Home__bottom__item__img} src={i.thumbnail} alt="" />
            <Link to={"/item"}>
              <p
                className={s.Home__bottom__item__title}
                onClick={() => setId(i.id)}
              >
                {i.title}
              </p>
            </Link>
            <p className={s.Home__bottom__item__price}>
              Цена: <span className={s.Home__span}>{i.price}</span>$
            </p>
            <p className={s.Home__bottom__item__rating}>
              Рейтинг: <span className={s.Home__span}>{i.rating}</span>★
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
