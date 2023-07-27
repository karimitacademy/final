import React from "react";
import { useGetBuysQuery, useGetProductQuery } from "../redux/Product";
import Link from "next/link";
import s from "./buypannel.module.scss";

const BuysPanel = () => {
  const handleDeleteBuysId = () => {
    localStorage.removeItem("buyId");
    window.location.href = "http://localhost:3001/AddProduct/AddProductPage";
  };

  const { data = [], isLoading } = useGetBuysQuery();

  if (isLoading) return <div className="">Loading...</div>;
  return (
    <div className="container" style={{ paddingTop: "60px" }}>
      <button onClick={handleDeleteBuysId}>Вернуться наeзад</button>
      {data.map((item) => (
        <div className="">
          {localStorage.getItem('buyId') === item.ProductId ?
          <div className={s.card}>
            <p className="">Адрес : {item.addres}</p>
            <div className=""></div>
          </div>
:null}
        </div>
      ))}
    </div>
  );
};

export default BuysPanel;
