import { CreateProduct } from './components/CreateProduct';
import { ErrorMesage } from './components/ErrorMesage';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';

function App() {
  const { products, loading, error } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMesage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <Modal title="Create new Product">
        <CreateProduct />
      </Modal>
    </div>
  );
}

export default App;
