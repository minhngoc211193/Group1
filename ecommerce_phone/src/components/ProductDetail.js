import React from 'react';
import './ProductDetail.css'


const ProductDetail = () => {
  // Dữ liệu chi tiết sản phẩm
  const product = {
    id: '001',
    name: 'Smartphone XYZ',
    description: 'Smartphone XYZ với màn hình 6.5 inch, bộ vi xử lý Snapdragon 888, RAM 8GB, bộ nhớ trong 128GB, camera 48MP.',
    price: 699,
    category: 'Smartphones',
    image: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg',
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Hình ảnh sản phẩm */}
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>

        {/* Chi tiết sản phẩm */}
        <div className="col-md-6">
          <p><strong>ID:</strong> {product.id}</p>
          <h2>{product.name}</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>

          {/* Nút "Add to Cart" */}
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
