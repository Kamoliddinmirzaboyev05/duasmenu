import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";
import ProductCard from "../../components/productCard/ProductCard";
function Home() {
  return (
    <div className="homePage">
      <div className="hero">
        <div className="container">
          <h1>Bu yerda asosiy yangilik bo'lishi kerak</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            rerum animi. Rerum aliquam, itaque impedit enim cupiditate vero
            labore! Non quas quibusdam laboriosam quia delectus.
          </p>
        </div>
      </div>
      <main>
        <section>
          <div className="container">
            <h2 className="sectionTitle">Sotuv Xitlari</h2>
            <div className="topProductsBlock">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="productCard">
                    <div className="productImg">
                      <img src="/burger.png" alt="" />
                    </div>
                    <div className="productInfo">
                      <h3>Big burger</h3>
                      <div className="productMainInfo">
                        <p>
                          {" "}
                          <i className="fas fa-dollar"></i> 32.000
                        </p>
                        <p>
                          {" "}
                          <i className="fas fa-clock"></i> 10 min{" "}
                        </p>
                      </div>
                      <div className="cardBtns">
                        <button className="btn productCartBtn">
                          Savatga qo'shish
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productCard">
                    <div className="productImg">
                      <img src="/burger.png" alt="" />
                    </div>
                    <div className="productInfo">
                      <h3>Big burger</h3>
                      <div className="productMainInfo">
                        <p>
                          {" "}
                          <i className="fas fa-dollar"></i> 32.000
                        </p>
                        <p>
                          {" "}
                          <i className="fas fa-clock"></i> 10 min{" "}
                        </p>
                      </div>
                      <div className="cardBtns">
                        <button className="btn productCartBtn">
                          Savatga qo'shish
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productCard">
                    <div className="productImg">
                      <img src="/burger.png" alt="" />
                    </div>
                    <div className="productInfo">
                      <h3>Big burger</h3>
                      <div className="productMainInfo">
                        <p>
                          {" "}
                          <i className="fas fa-dollar"></i> 32.000
                        </p>
                        <p>
                          {" "}
                          <i className="fas fa-clock"></i> 10 min{" "}
                        </p>
                      </div>
                      <div className="cardBtns">
                        <button className="btn productCartBtn">
                          Savatga qo'shish
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productCard">
                    <div className="productImg">
                      <img src="/burger.png" alt="" />
                    </div>
                    <div className="productInfo">
                      <h3>Big burger</h3>
                      <div className="productMainInfo">
                        <p>
                          {" "}
                          <i className="fas fa-dollar"></i> 32.000
                        </p>
                        <p>
                          {" "}
                          <i className="fas fa-clock"></i> 10 min{" "}
                        </p>
                      </div>
                      <div className="cardBtns">
                        <button className="btn productCartBtn">
                          Savatga qo'shish
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productCard">
                    <div className="productImg">
                      <img src="/burger.png" alt="" />
                    </div>
                    <div className="productInfo">
                      <h3>Big burger</h3>
                      <div className="productMainInfo">
                        <p>
                          {" "}
                          <i className="fas fa-dollar"></i> 32.000
                        </p>
                        <p>
                          {" "}
                          <i className="fas fa-clock"></i> 10 min{" "}
                        </p>
                      </div>
                      <div className="cardBtns">
                        <button className="btn productCartBtn">
                          Savatga qo'shish
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="productCard">
                    <div className="productImg">
                      <img src="/burger.png" alt="" />
                    </div>
                    <div className="productInfo">
                      <h3>Big burger</h3>
                      <div className="productMainInfo">
                        <p>
                          {" "}
                          <i className="fas fa-dollar"></i> 32.000
                        </p>
                        <p>
                          {" "}
                          <i className="fas fa-clock"></i> 10 min{" "}
                        </p>
                      </div>
                      <div className="cardBtns">
                        <button className="btn productCartBtn">
                          Savatga qo'shish
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="newsSection">
          <div className="container">
            <h2 className="sectionTitle">Yangiliklar</h2>
            <div className="newProductsBlock">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
        <section className="newsSection">
          <div className="container">
            <h2 className="sectionTitle">Lavash</h2>
            <div className="newProductsBlock">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
        <section className="newsSection">
          <div className="container">
            <h2 className="sectionTitle">Hot Dog</h2>
            <div className="newProductsBlock">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
