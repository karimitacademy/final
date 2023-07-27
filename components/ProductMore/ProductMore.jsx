import { useRouter } from "next/router";
import React, { useState } from "react";
import { useBuyProductMutation, useGetProductIdQuery } from "../redux/Product";
import Link from "next/link";
import s from "./ProductMore.module.scss";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const ProductMore = () => {
  const handleDeleteProductID = () => {
    localStorage.removeItem("productId");
    window.location.href = "http://localhost:3001/Product/ProductPage";
  };
  const router = useRouter();
  const { data = [], isLoading } = useGetProductIdQuery();
  const { id } = router.query;

  const [buyProduct, setbuyProduct] = useState({
    // id: Date.now(),
    firstName: "",
    lastName: "",
    addres: "",
    phone: "",
  });

  const [buy ] = useBuyProductMutation();
  const handleUser = async (e) => {
    e.preventDefault();
    if (buyProduct) {
      await buy({
        userId: localStorage.getItem("id"),
        ProductId: localStorage.getItem("productId"),
        id: Date.now(),
        firstName: buyProduct.firstName,
        lastName: buyProduct.lastName,
        addres: buyProduct.lastName,
        phone: buyProduct.phone,
      }).unwrap();
    }
  };

  return (
    <div className={s.fon}>
      <div initial="hidden" whileInView="visible" id="ss" className="container">
        <button className={s.btn} onClick={handleDeleteProductID}>
          🔙Вернуться назад{" "}
        </button>
        <div className={s.grid}>
          <div className={s.grids} style={{ paddingTop: "20px" }}>
            <Link
              href={`/AddProduct/ProductMorePageId`}
              onClick={() => localStorage.setItem("productId", item.id)}
              className={s.product}
            >
              <div className={s.cards}>
                <img
                  className={s.cards_img}
                  src={data.url}
                  alt="url"
                  width={350}
                  height={350}
                />
                <p className="">Заголовок : {data.title}</p>
                <p>Страна : {data.count}</p>
                <p>Город : {data.city}</p>
                <p>Описание : {data.description}</p>
                <p>
                  Цена : <span style={{ color: "white" }}>{data.price}$</span>
                </p>
                <div className=""></div>
              </div>
            </Link>
          </div>
          <div className={s.inputs}>
            <MyInput
              onChange={(e) =>
                setbuyProduct({ ...buyProduct, firstName: e.target.value })
              }
              className={s.inptu}
              placeholder="Имя"
            />
            <MyInput
              onChange={(e) =>
                setbuyProduct({ ...buyProduct, lastName: e.target.value })
              }
              className={s.inptu}
              placeholder="Фамилия"
            />
            <MyInput
              onChange={(e) =>
                setbuyProduct({ ...buyProduct, addres: e.target.value })
              }
              className={s.inptu}
              placeholder="Адресс"
            />
            <MyInput
              onChange={(e) =>
                setbuyProduct({ ...buyProduct, phone: e.target.value })
              }
              className={s.inptu}
              placeholder="Телефон"
            />
            <MyButton onClick={handleUser}>Купить сейчас</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMore;
