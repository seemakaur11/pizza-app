import styles from "../styles/Featured.module.css";
import { useState } from "react";
import Image from "next/image";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2)
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }

  return (
    <div className="">
      <div className={styles.container}>
        <Image src="/img/pizza8.png" layout="fill" alt="" />
      </div>
    </div>
  );
};

export default Featured;
