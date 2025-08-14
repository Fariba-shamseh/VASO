import { useState } from "react";
import ArrowButton from "./ArrowButton.jsx";
import { X } from "lucide-react";

const OurVideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="relative h-[678px] overflow-hidden">
        {/* بک‌گراند تصویر */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://demo.templatesjungle.com/vaso/images/video-image.jpg")',
          }}
        ></div>

        {/*/!* لایه پوششی برای افکت jarallax (اگر بخوای میشه انیمیشن اسکرول اضافه کرد) *!/*/}
        {/*<div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10"></div>*/}

        {/* بخش ویدیو پلیر */}
        <div className="relative z-10 flex items-center justify-center h-full">
          {/*<button*/}
          {/*  data-src="https://www.youtube.com/embed/W_tIumKa8VY"*/}
          {/*  data-bs-target="#myModal"*/}
          {/*  className="play-btn relative inline-block cursor-pointer"*/}
          {/*  onClick={openModal}*/}
          {/*>*/}
          {/*  <svg*/}
          {/*    className="absolute top-0 bottom-0 left-0 right-0 m-auto"*/}
          {/*    width={41}*/}
          {/*    height={41}*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*    fill="currentColor"*/}
          {/*    viewBox="0 0 24 24"*/}
          {/*  >*/}
          {/*    <use xlinkHref="#play" />*/}
          {/*  </svg>*/}
          {/*  <img*/}
          {/*    src="images/text-pattern.png"*/}
          {/*    alt="pattern"*/}
          {/*    className="text-pattern"*/}
          {/*  />*/}
          {/*</button>*/}
          <ArrowButton
            onClick={openModal}
            backgroundImage="images/text-pattern.png"
            variant="filled"
            iconType="Play"
            className="w-48 h-48 absoluteStrokeWidth"
            data-bs-target="#myModal"
            data-src="https://www.youtube.com/embed/W_tIumKa8VY"
          />
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40">
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl mx-4 pt-12 p-6 aspect-video bg-white overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-1 left-4 z-10 w-10 h-10 flex items-center justify-center"
            >
              <X
                strokeWidth={2}
                className="w-6 text-black hover:text-accent transition"
              />
            </button>

            <iframe
              src="https://www.youtube.com/embed/W_tIumKa8VY?autoplay=1"
              title="Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}
    </>
  );
};

export default OurVideoSection;
