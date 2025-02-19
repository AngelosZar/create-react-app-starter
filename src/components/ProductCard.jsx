export function ProductCard({ product }) {
  return (
    // grid layout ca 12 cards after use pagination
    <div>
      <div className="max-w-sm flex flex-row">
        <img
          src={product.image.url}
          alt={product.image?.alt}
          className="block h-48 w-48"
        />
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.discountedPrice}</p>
        </div>
        <div>
          <p>{product.rating}</p>
          {/* need to map  */}
          {/* <p>{product.reviews}</p>
          <p>{product.category}</p> */}
        </div>
      </div>
    </div>
  );
}
