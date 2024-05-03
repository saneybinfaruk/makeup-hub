import { useParams } from "react-router-dom";
import ProductDetails from "../component/common/ProductDetails";
import useProduct from "../hooks/useProduct";
import { Product } from "./HomePage";
import InfoSection2 from "../component/common/InfoSection2";
import GridContainer from "../component/common/GridContainer";
import useSuggestedProduct from "../hooks/useSuggestedProduct"; 

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useProduct(id as string);

  const { data: suggested, isLoading: suggestedIsLoading } =
    useSuggestedProduct(data as Product);

  return (
    <div>
      <ProductDetails product={data!} isLoading={isLoading} />
      <InfoSection2 />
      <section style={{ padding: "1rem 4.5rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "4rem" }}>For you</h1>
        <GridContainer
          datas={suggested?.slice(1, 5) as Product[]}
          isLoading={suggestedIsLoading}
        />
      </section>
    </div>
  );
};

export default ProductDetailsPage;
