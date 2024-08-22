import Thumbnail from "./Thumbnail";
import { products, thumbnails } from "../constants";

function Modal({ show, setShow, index, setIndex }) {
  return (
    show && (
      <>
        <div className="top-1/2 left-1/2 z-[60] absolute flex flex-col -translate-x-1/2 -translate-y-1/2">
          {/* Close Button */}
          <div
            onClick={() => setShow(false)}
            className="mb-6 cursor-pointer self-end"
          >
            <svg
              width="16"
              height="16"
              className="scale-150 hover:fill-primary-orange fill-white"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fillRule="evenodd"
              />
            </svg>
          </div>

          {/* Big Image Viewer */}
          <div className="relative w-[552px] h-[552px]">
            <img
              src={products[index]}
              alt="Large Product Image"
              className="rounded-xl w-full object-contain"
            />

            {/* Left Button */}
            <div
              onClick={() => {
                if (index === 0) {
                  setIndex(3);
                  return;
                }

                setIndex(index - 1);
              }}
              className="top-1/2 absolute flex justify-center items-center bg-white rounded-full w-[56px] h-[56px] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            >
              <svg
                width="12"
                height="18"
                className="group-hover:stroke-primary-orange stroke-[#1D2026]"
              >
                <path
                  d="M11 1 3 9l8 8"
                  strokeWidth="4"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>

            {/* Right Button */}
            <div
              onClick={() => {
                if (index == 3) {
                  setIndex(0);
                  return;
                }
                setIndex(index + 1);
              }}
              className="top-1/2 right-0 absolute flex justify-center items-center bg-white rounded-full w-[56px] h-[56px] -translate-y-1/2 translate-x-1/2 cursor-pointer group"
            >
              <svg
                width="13"
                height="18"
                className="group-hover:stroke-primary-orange stroke-[#1D2026]"
              >
                <path
                  d="m2 1 8 8-8 8"
                  strokeWidth="4"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Rest of Small Images */}
          <div className="flex justify-center items-center mt-[40px]">
            <div className="gap-x-[28px] modal-grid">
              {thumbnails.map((thumbnail, i) => (
                <Thumbnail
                  key={thumbnail}
                  image={thumbnail}
                  index={i}
                  setIndex={setIndex}
                  bigIndex={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="top-0 left-0 z-50 fixed bg-black opacity-75 w-screen h-screen"
          onClick={() => setShow(false)}
        />
      </>
    )
  );
}

export default Modal;
