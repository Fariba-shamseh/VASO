import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard.jsx";

const products = [
  {
    id: 1,
    img: "images/product-item1.jpg",
    alt: "product-item",
    title: "Matt Black",
    price: 870,
    link: "single-product.html",
  },
  {
    id: 2,
    img: "images/product-item2.jpg",
    alt: "product-item",
    title: "Oldie Off-White",
    price: 680,
    link: "single-product.html",
  },
  {
    id: 3,
    img: "images/product-item3.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    price: 750,
    link: "single-product.html",
  },
  {
    id: 4,
    img: "images/product-item4.jpg",
    alt: "product-item",
    title: "Opposite Pattern",
    price: 650,
    link: "single-product.html",
  },
  {
    id: 5,
    img: "images/product-item5.jpg",
    alt: "product-item",
    title: "Shell Shape",
    price: 750,
    link: "single-product.html",
  },
  {
    id: 6,
    img: "images/product-item2.jpg",
    alt: "product-item",
    title: "Oldie Off-White",
    price: 750,
    link: "single-product.html",
  },
  {
    id: 7,
    img: "images/product-item4.jpg",
    alt: "product-item",
    title: "Opposite Pattern",
    price: 750,
    link: "single-product.html",
  },
  {
    id: 8,
    img: "images/product-item3.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    price: 750,
    link: "single-product.html",
  },
];
const ProductCarousel = () => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        spaceBetween={18}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="product-swiper"
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            style={{ width: "295px" }}
            role="group"
            aria-label={`${product.id} / ${products.length}`}
          >
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
