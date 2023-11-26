import { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './product/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import '/index.css';
//database
import dbProducts from './db/data';
// import { FiTablet } from 'react-icons/fi';
import Cards from './components/Cards';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('');

  //input Filter
  
  const handleInputChange = (event) => {
    setQuery(event.target.value);

  }

  const filteredItems = dbProducts.filter(product =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1);
  


  //Radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  //Buttons filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products
    //Filtering input items
    if (query) {
      filteredProducts = filteredItems
    }

    //selected filter
  // selected filter
  if (selected) {
    filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => 
      category === selected ||
      color === selected ||
      company === selected ||
      newPrice === selected ||
      title === selected
    );
  }
  


  return filteredProducts.map(({ img, title, star, reviews, newPrice, prePrice }) => (
    <Cards
      key={Math.random()}
      img={img}
      title={title}
      star = {star}
      reviews={reviews}
      newPrice={newPrice}
      prePrice={prePrice}
    />
  ));
  


  }

  //calling function
  const result =  filteredData(dbProducts, selectedCategory, query);
  console.log(`the result is : ${result}`)


  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query ={query} handleInputChange={handleInputChange} />
      <Recommended handleClick = {handleClick} />
      <Products result ={result} />

    </>

  )
}

export default App
 