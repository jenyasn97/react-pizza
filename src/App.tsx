import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock
                title="Мексиканская"
                price={395}
                imageUrl="./img/pizza-hren.avif"
                sizes={[26, 30, 40]}
                types={["тонкое", "традиционное"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
