import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {

  return (
    <div className='container'>
      <div className='row' style={{ textAlign: "center", justifyContent: "center" }}>
        <h3>THE BEST PIZZA IN TOWN</h3>
        <p className='py-4' id='paraText'>pizza, dish of Italian origin consisting
          of a flattened disk of bread dough topped with some combination
          of olive oil, oregano, tomato, olives, mozzarella or other cheese,
          and many other ingredients, baked quickly—usually, in a commercial
          setting, using a wood-fired oven heated to a very high temperature—and
          served hot.One of the simplest and most traditional pizzas is the Margherita, which
          is topped with tomatoes or tomato sauce, mozzarella, and basil.</p>
      </div>
      {pizzaList.map((pizza) => {
        return (
          <PizzaCard key={pizza._id} pizza={pizza} />
        )
      })}
    </div>
  )
}

export default PizzaList