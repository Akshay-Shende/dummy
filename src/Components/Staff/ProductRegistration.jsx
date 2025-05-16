import React, { useEffect, useRef, useState } from "react";
import styles from "../css/productRegistration.module.css";
import { getAllManufacturer } from "../../Services/manufacturerServices";
import { addNewProduct } from "../../Services/productServices";
import { SubCategories } from "../../Enumerations/SubCategories";
import { Currency } from "../../Enumerations/Currency";

const ProductRegistration = () => {
  const [manufacturerList, setManufacturerList] = useState([]);
  const [manufacturer, setManufacturer] = useState(null);
  const [selectedValue, setSelectedValue] = useState(0);
  const [currencyValue, setCurrencyValue] = useState(0);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const featureRef = useRef();
  const sizeRef = useRef();
  const unitRef = useRef();
  const inventoryLevelRef = useRef();
  const unitPriceRef = useRef();
  const currencyRef = useRef();
  const thresholdRef = useRef();
  const imageUrlRef = useRef();

  useEffect(() => {
    (async () => {
      let result = await getAllManufacturer();
      setManufacturerList(result);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      feature: featureRef.current.value,
      manufacturerId: Number(manufacturer),
      size: sizeRef.current.value,
      subCategory:Number(selectedValue),
      unit: Number(unitRef.current.value),
      enventoryLevel: Number(inventoryLevelRef.current.value),
      unitPrice: Number(unitPriceRef.current.value),
      currency: Number(currencyValue),
      threshold: Number(thresholdRef.current.value),
      imageUrl: imageUrlRef.current.value,
    };

    console.log("Submitted product data:", productData);
    // You can now send `productData` to your API or server

   const productResultData = await addNewProduct(productData);

   console.log(productResultData);
  };
 

  const handleSubCategoriesChange = (event) => {
    setSelectedValue(event.target.value);  
  };

  const handleCurrencyChange = (event) => {
    setCurrencyValue(event.target.value);  
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" ref={nameRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea ref={descriptionRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Feature</label>
        <input type="text" ref={featureRef} className="form-control" />
      </div>

      <div className="mb-3">
      <label className="form-label">Manufacturer</label>
        <select
          class="form-select"
          aria-label="Default select example"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        >
          <option disabled selected>
            Open this select menu
          </option>
          {manufacturerList.map((manufacturer) => (
            <option key={manufacturer.id} value={manufacturer.id}>
              {manufacturer.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Size</label>
        <input type="text" ref={sizeRef} className="form-control" />
      </div>

      <div className="mb-3">
      <label className="form-label">Sub Category</label>
        <select
          id="subCategory"
          className="form-select"
          aria-label="Default select example"
          onChange={handleSubCategoriesChange} value={selectedValue}
        >
          <option disabled selected>
            Select SubCategory
          </option>

          {Object.entries(SubCategories).map(([key, value]) => (
            <option key={value} value={value}>
              {key}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Unit</label>
        <input type="number" ref={unitRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Inventory Level</label>
        <input type="number" ref={inventoryLevelRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Unit Price</label>
        <input
          type="number"
          step="0.01"
          ref={unitPriceRef}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Currency</label>
        <select
          id="subCategory"
          className="form-select"
          aria-label="Default select example"
           onChange={ handleCurrencyChange } value={ currencyValue }
        >
          <option disabled selected>
            Select Currency
          </option>

          {Object.entries(Currency).map(([key, value]) => (
            <option key={value} value={value}>
              {key}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Threshold</label>
        <input type="number" ref={thresholdRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input type="text" ref={imageUrlRef} className="form-control" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ProductRegistration;
