import React from "react";
import styles from "./Shipping.module.css";
import TitleOption from "../TitleOption/TitleOption";
import { formatter } from "../../Hooks/formater";
import { useSelector, useDispatch } from "react-redux";
import { setShippinPlan } from "../../store/ProductSlice";

const Shipping = () => {
  const shippingCost = useSelector(
    (state) => state.Product.selectedItem.shippingCost
  );

  const ShippingPlans = useSelector((state) => state.Product.shippingPlan);
  const dispatch = useDispatch();

  function changeShippingPlan(e) {
    dispatch(setShippinPlan({ title: e.target.classList[0] }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.shippingHeader}>
        <TitleOption>Shipping</TitleOption>
        <span className={styles.cost}>
          {formatter.format(shippingCost.price)}
        </span>
      </div>
      <div className={styles.shippingPlanText}>
        {ShippingPlans.map((data, index) => {
          return (
            <div
              onClick={(e) => {
                changeShippingPlan(e);
              }}
              className={`${data.title} ${styles.shippingItems} ${
                data.title === shippingCost.title && styles.addBackgroud
              } `}
              key={index}
              id={data.title}
            >
              <span className={`${data.title} ${styles.title}`}>
                {data.title}
              </span>
              <span className={`${data.title} ${styles.desc}`}>
                {data.desc}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shipping;
