import React, { useState } from "react";
import './App.css';
import { navItems } from "./config/navitems";
import { contact } from "./config/contact";
import Slider from "./components/slider";
import Card from './components/card.js'

function App() {
  const [Categories, setCategories] = useState([]);
  const [subCategories, setSubcategories] = useState([]);
  const [innerSub, setInnersub] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [stickyNav, setStickynav] = useState(false); 

  const toFixed = () => {
    if (window.scrollY >= 10){
      setStickynav(true);
    }
    else
      setStickynav(false);
  }
  window.addEventListener("scroll", toFixed);

  return (
    <div className="App">
      <div className="contact">
        <b>|</b>{contact.map((cont) => <span>{cont.name}: {cont.child} <b>|</b></span>)}
      </div>
      <div className={!stickyNav?"navbar":"navbar fixed"}>
        <div className="logo">
          <img src = "Images/tiopaints.jpg" width="90px" height="50px"></img>
          <span>TIO PAINTS</span>
        </div>
        <nav 
          onMouseEnter = {() => {
            setDropdown(true);
            // setCategories(navItem);
            setSubcategories([]);
            setInnersub([]);
          }}
          onMouseLeave={() => setDropdown(false)}>
          {navItems.map((navItem)=><a href="#" 
            onMouseEnter={()=>{
              if(navItem.name==="HOME") 
                setDropdown(false);
              else{
              setDropdown(true);
              setCategories(navItem);
              setSubcategories([]);
              setInnersub([]);
            }}}
            // onMouseLeave={ () => setDropdown(false)}
            >{navItem.name}</a>)}
          <div className={dropdown?"dropdown":"dropup"}
            onMouseEnter = {() => {
              setDropdown(true);
              // setCategories(navItem);
              setSubcategories([]);
              setInnersub([]);
            }}>
            <div className={Categories.child !== undefined?"cat":"null"}>
              {Categories.child !== undefined? Categories.child.map((subCategory)=>
                <div><a href="#" onMouseEnter={() => 
                  {
                    setSubcategories(subCategory);
                    setInnersub([]);
                  }
                }>{subCategory.name}</a><hr></hr></div>
                ):<div />}
            </div>
            <div className={subCategories.child !== undefined?"subcat":"null"}>
              {subCategories.child !== undefined?subCategories.child.map((subCat) =><div><a href="#" onMouseEnter={() => setInnersub(subCat)}>{subCat.name}</a><hr></hr></div>):<div />}
            </div>
            <div className={innerSub.child !== undefined?"innersub":"null"}>
              {innerSub.child !== undefined?innerSub.child.map((sub) => <div><a href="#">{sub}</a><hr></hr></div>):<div />}
            </div>
          </div>    
        </nav> 
      </div>
      <div className="slider">
        <Slider />
      </div>
      <div className="card">
        <Card />
      </div>
    </div>
  );
}

export default App;
