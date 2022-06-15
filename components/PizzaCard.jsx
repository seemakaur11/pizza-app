import Link from 'next/link';
import Image from 'next/image';

function PizzaCard({ pizza }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Link href={`/product/${pizza._id}`} passHref>
            <Image src={pizza.img} className="pizzaImg" width="250px" height="200px" alt="" />

          </Link>
          <div className="mainPizza">
            <h4 className="h4Pizza">{pizza.title}</h4>
            <p>${pizza.prices[0]}</p>
            <p className="pizzaDes">{pizza.desc}</p>
          </div>
        </div>
        <div className="col-md-3">
          <Link href={`/product/${pizza._id}`} passHref>
            <Image src={pizza.img} className="pizzaImg" width="250px" height="200px" alt="" />
          </Link>
          <div className="mainPizza">
            <h4 className="h4Pizza">{pizza.title}</h4>
            <p>${pizza.prices[0]}</p>
            <p className="pizzaDes">{pizza.desc}</p>
          </div>
        </div>
        <div className="col-md-3">
          <Link href={`/product/${pizza._id}`} passHref>
            <Image src={pizza.img} className="pizzaImg" width="250px" height="200px" alt="" />
          </Link>
          <div className="mainPizza">
            <h4 className="h4Pizza">{pizza.title}</h4>
            <p>${pizza.prices[0]}</p>
            <p className="pizzaDes">{pizza.desc}</p>
          </div>
        </div>
        <div className="col-md-3">
          <Link href={`/product/${pizza._id}`} passHref>
            <Image src={pizza.img} className="pizzaImg" width="250px" height="200px" alt="" />
          </Link>
          <div className="mainPizza">
            <h4 className="h4Pizza">{pizza.title}</h4>
            <p>${pizza.prices[0]}</p>
            <p className="pizzaDes">{pizza.desc}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PizzaCard
