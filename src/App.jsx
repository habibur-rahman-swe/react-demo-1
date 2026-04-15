import ProductInfo from "./components/ProductInfo";
import Person from "./components/Person";

const App = () => {
  const name = "Mohammad";
  const age = 26;
  const products = [
      {
        id: 1,
        name: "Phone",
        price: "$669"
      },
      {
        id: 2,
        name: "Phone",
        price: "$669"
      },
      {
        id: 3,
        name: "Phone",
        price: "$669"
      },
      {
        id: 4,
        name: "Phone",
        price: "$669"
      },
    ];

  return (
    <div>
      <Person 
        name={name}
        age={age}
      />
      <ProductInfo
        products={products}
      />
    </div>
  );
}

export default App;