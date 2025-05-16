import React, { useRef } from 'react';
import styles from "../css/manufacturerRegistration.module.css"

const ManufacturerRegistration = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const cityRef = useRef();
  const gradeRef = useRef();
  const countryRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      city: cityRef.current.value,
      grade: gradeRef.current.value,
      country: countryRef.current.value,
    };

    console.log('Submitted data:', formData);
    // You can now send formData to your API or handle it further
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" ref={nameRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea ref={descriptionRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">City</label>
        <input type="text" ref={cityRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Grade</label>
        <input type="text" ref={gradeRef} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Country</label>
        <input type="text" ref={countryRef} className="form-control" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ManufacturerRegistration;
