import { useState } from 'react';
import { CreateProduct } from './components/CreateProduct';
import { ErrorMesage } from './components/ErrorMesage';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { IProduct } from './models';

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const [modal, setModal] = useState(true);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMesage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new Product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  );
}

export default App;
