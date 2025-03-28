// Product Component
import one from "../assests/images/one.jpg";
import two from "../assests/images/three.jpg";
import three from "../assests/images/two.jpg";
function Product(){
    return(
      <div className="products">
      <div class="box">
        <img src={one} alt='Products'></img>
        <p>
        Designer Club Perfume - A luxurious and captivating fragrance with a perfect blend of floral and musky notes, ideal for special occasions.
        </p>
         </div>
         <div class="box">
        <img src={two} alt='Products'></img>
        <p>
          Villain Perfume - A bold and long-lasting fragrance with a unique blend of woody and spicy notes, perfect for making a statement.
        </p>
         </div>
         <div class="box">
        <img src={three}></img>
        <p>
          Fogg Perfume - A refreshing and invigorating fragrance with a perfect balance of citrus and earthy notes, suitable for everyday wear.
        </p>
         </div>
      </div>
  
    )
  }

  export default Product;