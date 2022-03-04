import Footer from "components/Molecules/Footer/Footer";
import Header from "components/Molecules/Header/Header";
import ProductModal from "components/Molecules/Modals/ProductModal";
import { useDispatch } from "react-redux";
import { hideModal } from "redux/reducers/productReducer";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.product.showModal);
  return (
    <div>
      <ProductModal
        showModal={showModal}
        handleClose={() => dispatch(hideModal())}
      ></ProductModal>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
