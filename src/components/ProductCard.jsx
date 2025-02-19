export function ProductCard() {
  return (
    // grid layout ca 12 cards after use pagination
    <div>
      {' '}
      <div className="max-w-sm flex flex-row">
        <img
          src="https://images.unsplash.com/photo-1469105692624-86ae1dbf4c23?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="a man on a mountain"
        />
        <div>
          {' '}
          <h2>Product title</h2>
          <p>Product description</p>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
}
