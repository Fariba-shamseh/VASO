import BaseLink from "./BaseLink.jsx";
import ArrowButton from "./ArrowButton.jsx";
import ProductCarousel from "./ProductCarousel.jsx";

const Products = () => {
  return (
    <section className=" ">
      <div className="flex flex-row items-center justify-between max-w-8xl mx-auto">
        <div>
          <h2 className="font-family-italiana font-medium text-4xl">
            Best selling Items
          </h2>
        </div>
        <div className="flex flex-row items-center font-medium text-l ">
          <div>
            <BaseLink name={"View all items"} />
          </div>
          <div className="flex flex-row">
            <ArrowButton direction="left" iconType="chevron" />
            <ArrowButton direction="right" iconType="chevron" />
          </div>
        </div>
      </div>
      <ProductCarousel />
    </section>
  );
};

export default Products;
