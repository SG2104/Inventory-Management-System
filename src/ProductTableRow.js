import style from "./Style";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import Product from "./Product";

const useStyles = createUseStyles(style);

function ProductTableRow({ content, colored, revenue }) {

  const [hovered, setHovered] = useState(false);
  const [popupVisible, setPopupVisiblity] = useState(false);

  const classes = useStyles();

  let cellBackground = colored
    ? classes.tableCellColored
    : classes.tableCellWhite;
  cellBackground = hovered ? classes.tableCellHovered : cellBackground;

  const setHoveredTrue = () => setHovered(true);
  const setHoveredFalse = () => setHovered(false);

  const setPopupTrue = () => setPopupVisiblity(true);

  const productPopup = (
    <Product setPopup={setPopupVisiblity} content={content} />
  );

  return (
    <section
      className={classes.productRow}
      key={content.id}
      onMouseOver={setHoveredTrue}
      onMouseOut={setHoveredFalse}
    >
      <div className={`${cellBackground} ${classes.leftFlex}`}>{content.title}</div>

      <div className={`${cellBackground} ${classes.leftFlex}`}>${content.price.toFixed(2)}</div>
      <div className={`${cellBackground} ${classes.leftFlex}`}>{content.category}</div>
      <div className={`${cellBackground} ${classes.leftFlex}`}>{content.rating.rate}</div>
      <div className={`${cellBackground} ${classes.leftFlex}`}>{content.inventory}</div>
      <div className={`${cellBackground} ${classes.leftFlex}`}>${(revenue * content.price / 2).toFixed(2)}</div>
      <div className={`${cellBackground} ${classes.centerFlex}`}>
        <button className={classes.learnMoreButton} onClick={setPopupTrue}>
          Learn More
        </button>
        {popupVisible ? productPopup : ""}
      </div>
    </section>
  );
}

export default ProductTableRow;
