const ProductCard = ({ image, title, description, price, actionLabel = 'Mostrar Artículo', actionHref = '#' }) => {
  return (
    <div className="card product-card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        {description ? <p className="card-text flex-grow-1">{description}</p> : null}
        {price ? (
          <p className="card-text">
            <strong>Precio:</strong> {price}
          </p>
        ) : null}
        <a href={actionHref} className="btn btn-primary mt-auto">
          {actionLabel}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

