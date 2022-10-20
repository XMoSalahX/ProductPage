import TitleOption from "../TitleOption/TitleOption";
import styles from "./TotalSubmit.module.css";
import { useSelector, useDispatch } from "react-redux";
import { formatter } from "../../Hooks/formater";
import { ReactComponent as ContactUs } from "../../assets/tabler_phone-calling.svg";
import { addtoCard } from "../../store/HomeSlice";

const TotalSubmit = () => {
  const decivcesCost = useSelector(
    (state) => state.Product.selectedItem.deviceCost
  );

  const shippingCost = useSelector(
    (state) => state.Product.selectedItem.shippingCost.price
  );

  const numberofItem = useSelector(
    (state) => state.Product.selectedItem.numberOFItems
  );

  const dispatch = useDispatch();

  function AddItemToCard() {
    dispatch(addtoCard(numberofItem));
  }

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <TitleOption>Total</TitleOption>
        <span className={styles.cost}>
          {formatter.format(decivcesCost + shippingCost)}
        </span>
      </div>
      <div className={styles.actions}>
        <div className={styles.submit} onClick={AddItemToCard}>
          Place order now
        </div>
        <div className={styles.callUs}>
          <ContactUs />
          Call us
        </div>
        <div className={styles.info}>We are 24/7 available</div>
      </div>
    </div>
  );
};

export default TotalSubmit;
