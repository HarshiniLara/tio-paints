import { navItems } from "../config/navitems";
import NavBar from "./navbar";
import "../css/product.css";

// const ProductSkeleton = (props) => {
//     return(
//         <div className="product">
//             <img src={props.img} height="200px" width="200px" />
//             <div className="desc">
//                 <p>{props.name}</p>
//                 <div>{props.subname}</div>
//                 <p>{props.cat}</p>
//                 <p>{props.desc}</p>
//                 <p>{props.rate}</p>
//             </div>
//         </div>
//     );
// }
const ProductSkeleton = (props) => {
  return (
    <div className="product">
      <div className="image">
        <img src={props.img} alt="Product" height="200px" width="350px"/>
      </div>
      <div className="desc">
        <div className="product-name">{props.name}</div>
        <div className="subnames">
          {props.subname &&
            props.subname.map((item, index) => (
              <div className="subname" key={index}>
                {item}
              </div>
            ))}
        </div>
        <div className="category">{props.cat}</div>
        <div className="description">{props.desc}</div>
        <div className="rating">{props.rate}</div>
      </div>
    </div>
  );
};

const Product = (props) => {

    const products = navItems.filter(
        (product) => product.name === props.name
    );
    return(
        <div>
            <NavBar />
            {products[0].child.map((prod)=>
                    prod.child && prod.child.map((p)=>(
                    <ProductSkeleton 
                    img="./Images/set_1/Wallputty.jpg"
                    name={p.name?p.name:null}
                    subname={p.child && p.child.length?(p.child.map((item)=><p>{item}</p>)):null}
                    cat={prod.name}
                    desc="description"
                    rate="rate"
                    />
                )))
            }
            </div>
    );
}

const SubProduct = (props) => {
    let key;
    const products = navItems.map((item) => {
    if (item.child) {
        const filteredProducts = item.child.filter((prod) => prod.name === props.name);
        if (filteredProducts.length > 0) {
            key = item.key;
            return filteredProducts;
        }
    }
    return null;
    });

    return(
        <div>
            <NavBar />
            <h1>{props.name}</h1>
            {products[key][0].child?products[key][0].child.map((prod)=>(
                    <ProductSkeleton 
                    img="../Images/set_1/Wallputty.jpg"
                    name={prod.name}
                    subname={prod.child?(prod.child.map((item)=><p>{item}</p>)):null}
                    desc="desc"
                    rate="rate"
                    />
            )):<h5>Nothing to show as of now!</h5>}
        </div>
    );
}

export { Product, SubProduct };

// import React from "react";
// import "../css/products.css";
// import {product_data} from "../config/product_data.js";
// const Product=()=>{
//     const list=product_data.map((e)=><div>
//     <div class="product">
// 				<img src={e.img}></img>
//                 <br></br>
// 				<div class="product-info">
// 					<h4 class="product-title"><b>{e.product_name}</b>
// 					</h4>
//                     <p>{e.description}</p>
// 					<p class="product-price">{e.currency} {e.price}</p>
// 				</div>
// 			</div>
//     </div>)
//     return(
//         <div className='body'>
//         <div className="all-products">
//             {list}
//         </div>
//         </div>
       
//     )
// }
// export default Product;

