function Thumbnail({ image, index, setIndex, bigIndex }) {
  return (
    <div
      className={`relative m-px rounded-xl overflow-hidden cursor-pointer group transition ${
        index === bigIndex && "ring-2 ring-primary-orange"
      }`}
      onClick={() => setIndex(index)}
    >
      <img
        src={image}
        alt="first product thumbnail"
        className="relative z-30"
      />

      <div
        className={`top-0 left-0 z-20 absolute bg-white w-full h-full group-hover:z-40 group-hover:opacity-40 ${
          index === bigIndex && "opacity-75 z-40"
        }`}
      />
    </div>
  );
}

export default Thumbnail;
