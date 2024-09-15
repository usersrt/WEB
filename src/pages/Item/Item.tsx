import { useEffect, useState } from "react"
import s from "./Item.module.scss"
import { getById } from "../../API/Api";
import { useStr } from "../../store/ItemStore";



const Item = () => {


  const [singleItem, setSingleItem]:any = useState([])

  

  const { id }:any = useStr()
  

  useEffect(() => {
    getById(id, setSingleItem)
  },[])
  

  return (
    <>
        <div className={s.wrapper}>
            <div className={s.box}>
              <img src={singleItem.thumbnail} alt="" />
                <p className={s.Item__title}>{singleItem.title}</p>
                <p className={s.Item__description}>{singleItem.description}</p>
                <div className={s.Item__block}>
                    <div className={s.Item__block__item}>price: <span className={s.Item__block__span}>{singleItem.price}</span>$</div>
                    <div className={s.Item__block__item}>rating: <span className={s.Item__block__span}>{singleItem.rating}</span>★</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Item