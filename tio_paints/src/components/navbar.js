import React, { useState } from "react";
import '../css/navbar.css';
import { navItems } from "../config/navitems";
import { contact } from "../config/contact";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [Categories, setCategories] = useState([]);
    const [subCategories, setSubcategories] = useState([]);
    const [innerSub, setInnersub] = useState([]);
    const [dropdown, setDropdown] = useState(false);
    const [stickyNav, setStickynav] = useState(false); 

    const toFixed = () => {
        if (window.scrollY >= 30){
            setStickynav(true);
        }
        else
            setStickynav(false);
    }
    window.addEventListener("scroll", toFixed);

    return (
        <>
            <div className="contact">
                <b>|</b>{contact.map((cont) => <span>{cont.name}: {cont.child} <b>|</b></span>)}
            </div>
            <div className={!stickyNav?"navbar":"navbar fixed"}>
                <div className="logo">
                    <img src = "../Images/set_1/tiopaints.jpg" width="90px" height="50px"></img>
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
                    {navItems.map((navItem)=> <Link to={navItem.route}><p id="nav_item"
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
                    >{navItem.name}</p></Link>)}
                    <div className={dropdown?"dropdown":"dropup"}
                    onMouseEnter = {() => {
                        setDropdown(true);
                        // setCategories(navItem);
                        setSubcategories([]);
                        setInnersub([]);
                    }}>
                        <div className={Categories.child !== undefined?"cat":"null"}>
                            {Categories.child !== undefined? Categories.child.map((subCategory)=>
                            <div><Link to={subCategory.route}><p onMouseEnter={() => 
                                {
                                setSubcategories(subCategory);
                                setInnersub([]);
                                }
                            }>{subCategory.name}</p></Link><hr></hr></div>
                            ):<div />}
                        </div>
                        <div className={subCategories.child !== undefined?"subcat":"null"}>
                            {subCategories.child !== undefined?subCategories.child.map((subCat) =><div><p onMouseEnter={() => setInnersub(subCat)}>{subCat.name}</p><hr></hr></div>):<div />}
                        </div>
                        <div className={innerSub.child !== undefined?"innersub":"null"}>
                            {innerSub.child !== undefined?innerSub.child.map((sub) => <div><p>{sub}</p><hr></hr></div>):<div />}
                        </div>
                    </div>    
                    </nav> 
            </div>
        </>
    );
}

export default NavBar;