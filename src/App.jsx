import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <Counter/>
      <TodoList></TodoList>
      <Profile></Profile>
      <ShoppingList></ShoppingList>
    </div>
  );
}

export default App;