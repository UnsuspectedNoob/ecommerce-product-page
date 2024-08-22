import React, { useState } from "react";
import { products, thumbnails } from "../constants";
import Thumbnail from "./Thumbnail";

function LightBox() {
  const [index, setIndex] = useState(0);

  return (
    <div className="gap-8 hidden lightbox-grid md:grid mx-auto">
      {/* Big Image Viewer */}
      <div className="col-span-4 row-span-4 rounded-xl overflow-hidden">
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
    </div>
  );
}

export default LightBox;
