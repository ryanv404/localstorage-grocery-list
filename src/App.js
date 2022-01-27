import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      content: "Buy milk"
    },
    {
      id: 2,
      checked: true,
      content: "Cash check"
    },
    {
      id: 3,
      checked: false,
      content: "Cut out some coupons to bring with you"
    }
  ]);

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
