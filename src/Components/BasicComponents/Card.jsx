
import  thumbnail  from '../../assets/thumbnail.jpg'
const Card = ({product}) => {
  return (
    <div key={product.id} className="col-md-3 mb-3">
    <div className="card" style={{ width: "100%" }}>
      <img
        src={ thumbnail}
        className="card-img-top h-100"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold">Price: ₹{product.unitPrice}</p>
        <a href="#" className="btn btn-primary">
          Buy Now
        </a>
      </div>
    </div>
  </div>
  )
}

export default Card