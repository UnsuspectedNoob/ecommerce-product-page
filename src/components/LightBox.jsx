import React, { useState } from "react";
import { products, thumbnails } from "../constants";
import Thumbnail from "./Thumbnail";
import Modal from "./Modal";

function LightBox() {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  return (
    <div className="gap-8 hidden lightbox-grid md:grid md:mx-auto xl:mx-0">
      {/* Big Image Viewer */}
      <div
        className="col-span-4 row-span-4 rounded-xl cursor-pointer overflow-hidden"
        onClick={() => {
          setShowModal(true);
          setModalIndex(index);
        }}
      >
        <img
          src={products[index]}
          alt="Large Product Image"
          className="w-full object-contain"
        />
      </div>

      {/* Rest of Small Images */}
      {thumbnails.map((thumbnail, i) => (
        <Thumbnail
          key={thumbnail}
          image={thumbnail}
          index={i}
          setIndex={setIndex}
          bigIndex={index}
        />
      ))}

      <Modal
        show={showModal}
        setShow={setShowModal}
        index={modalIndex}
        setIndex={setModalIndex}
      />
    </div>
  );
}

export default LightBox;
