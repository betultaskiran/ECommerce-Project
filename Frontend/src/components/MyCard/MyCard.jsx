import styles from "./MyCard.module.css";
import { useContext } from "react";
import { Context } from "../../App";
export default function MyCard() {
  const ctx = useContext(Context);
  const calculate = () => {
    let totalValue = 0;
    if (ctx.basket.length > 0) {
      ctx.basket.forEach((item) => {
        let totalPrice = item.price * item.quantity;
        totalValue += totalPrice;
      });
    }

    return totalValue;
  };
  return (
    <div className={styles.myCard}>
      <div className={styles.productsGrid}>
        <div className={styles.gridItemHeader}>
          <div>Image</div>
          <div>Title</div>
          <div>Quantity</div>
          <div>Price</div>
        </div>
        {ctx.basket.map((item) => (
          <div className={styles.gridItem}>
            <img
              className={styles.gridItemImage}
              src={"http://localhost:3000" + item.productImage}
              width={50}
            />
            <div className={styles.gridItemTitle}>{item.productName}</div>
            <div className={styles.gridItemQuantity}>{item.quantity}</div>
            <div className={styles.gridItemPrice}>{item.price}</div>
          </div>
        ))}
        <div className={styles.gridItemFooter}>
          <b>TOTAL:</b> ${calculate()}
        </div>
      </div>
    </div>
  );
}
