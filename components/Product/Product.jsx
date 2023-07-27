import React, { useState } from "react";
import s from "./Product.module.scss";
import { useGetProductQuery } from "../redux/Product";
import { motion } from "framer-motion";
import Link from "next/link";
import AddFollovers from "../Follvers/AddFollovers";
import MyLoader from "../UI/loader/MyLoader";
import Pagination from "../Pagination/Pagination";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [videoPerPage] = useState(6);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const { data = [], isLoading } = useGetProductQuery();
  const lastVideoIndex = currentPage * videoPerPage;
  const firstVideoIndex = lastVideoIndex - videoPerPage;
  const currentVideo = data.slice(firstVideoIndex, lastVideoIndex);
  if (isLoading)
    return (
      <div className="">
        <MyLoader />
      </div>
    );
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const featureAnimation = {
    hidden: {
      y: 400,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      id="ss"
      className="container"
    >
      <div className={s.grids} style={{ paddingTop: "200px" }}>
        {currentVideo.map((item) => (
          <div variants={textAnimation} className="">
            <Link
              href={`/AddProduct/ProductMorePageId`}
              onClick={() => localStorage.setItem("productId", item.id)}
              className={s.product}
            >
              <div className={s.cards}>
                <img
                  className={s.cards_img}
                  src={item.url.length > 1 ? item.url: "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
                  alt="url"
                  width={350}
                  height={350}
                />
                <p variants={textAnimation} className="">
                  Заголовок : {item.title}
                </p>
                {/* <p variants={textAnimation}>Страна : {item.count}</p> */}
                {/* <p variants={textAnimation}>Город : {item.city}</p> */}
                {/* <p variants={textAnimation}>Описание : {item.description}</p> */}
                <p variants={textAnimation}>
                  Цена : <span style={{ color: "gold" }}>{item.price}$</span>
                </p>
                <div variants={featureAnimation} className="">
                  <AddFollovers item={item} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <br />
      <br />
      <br />
      <Pagination
        videoPerPage={videoPerPage}
        totalSize={data.length}
        paginate={paginate}
      />
    </motion.section>
  );
};

export default Product;
