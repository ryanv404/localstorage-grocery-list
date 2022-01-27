import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("grocery_list")) || []);

  return (
    <div className="App">
      <Header />
      <Content 
        items={items} 
        setItems={setItems}
      />
      <Footer items={items}/>
    </div>
  );
}

export default App;
