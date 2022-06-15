import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <div className="container py-5">
      <div className="row pt-5">
        <div className="col-md-6 pt-5">
          <Image src={pizza.img} className="imgContainer" width="350px" height="350px" alt="" />

        </div>
        <div className="col-md-6 pt-5">
          <h1>{pizza.title}</h1>
          <span className="pizzaPrice">${price}</span>
          <p className="pizzaDes" style={{ fontSize: "17px" }}>{pizza.desc}</p>
          <h3 className="pizzaChoose">CHOOSE YOUR SIZE</h3>
          <div className="row py-3">
            <div className="col-md-4" onClick={() => handleSize(0)}>
              <Image src="/img/size.png" width="40px" height="40px" alt="" />
              <span className="imgSize">small</span>
            </div>
            <div className="col-md-4" onClick={() => handleSize(1)}>
              <Image src="/img/size.png" width="50px" height="50px" alt="" />
              <span className="imgSize">medium</span>
            </div>
            <div className="col-md-4" onClick={() => handleSize(2)}>
              <Image src="/img/size.png" width="60px" height="60px" alt="" />
              <span className="imgSize">large</span>
            </div>
          </div>
          <h3>Choose additional ingredients</h3>
          <div id="checkbox">
            {pizza.extraOptions.map((option) => {
              return (
                <div key={option._id}>
                  <input type="checkbox" id={option.text} name={option.text} className="double p-2 m-2" onChange={(e) => handleChange(e, option)} />
                  <label htmlFor="double" className="option pt-1">{option.text}</label>
                </div>
              )
            })}
          </div>
          <div className="add pt-3">
            <input type="number" defaultValue={1} className="quantity" onChange={(e) => setQuantity(e.target.value)} />
            <button className="addButton" onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      </div>

    </div>
    // <div className={styles.container}>
    //   <div className={styles.left}>
    //     <div className={styles.imgContainer}>
    //       <img src={pizza.img} alt="" width="350px" height="350px" />
    //     </div>
    //   </div>
    //   <div className={styles.right}>
    //     <h1 className={styles.title}>{pizza.title}</h1>
    //     <span className={styles.price}>${price}</span>
    //     <p className={styles.desc}>{pizza.desc}</p>
    //     <h3 className={styles.choose}>Choose the size</h3>
    //     <div className={styles.sizes}>
    //       <div className={styles.size} onClick={() => handleSize(0)}>
    //         <img src="/img/size.png" alt="" width="40px" height="40px" />
    //         <span className={styles.number}>Small</span>
    //       </div>
    //       <div className={styles.size} onClick={() => handleSize(1)}>
    //         <img src="/img/size.png" alt="" width="50px" height="50px" />
    //         <span className={styles.number}>Medium</span>
    //       </div>
    //       <div className={styles.size} onClick={() => handleSize(2)}>
    //         <img src="/img/size.png" width="60px" height="60px" alt="" />
    //         <span className={styles.number}>Large</span>
    //       </div>
    //     </div>
    //     <h3 className="pt-4">Choose additional ingredients</h3>
    //     <div className={styles.ingredients}>
    //       {pizza.extraOptions.map((option) => (
    //         <div className={styles.option} key={option._id}>
    //           <input
    //             type="checkbox"
    //             id={option.text}
    //             name={option.text}
    //             className={styles.checkbox}
    //             onChange={(e) => handleChange(e, option)}
    //           />
    //           <label className="m-2" htmlFor="double">{option.text}</label>
    //         </div>
    //       ))}
    //     </div>
    //     <div className={styles.add}>
    //       <input
    //         onChange={(e) => setQuantity(e.target.value)}
    //         type="number"
    //         defaultValue={1}
    //         className={styles.quantity}
    //       />
    //       <button className={styles.button} onClick={handleClick}>
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
