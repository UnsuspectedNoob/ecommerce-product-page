function Thumbnail({ image, index, setIndex, bigIndex }) {
  return (
    <div
      className={`relative m-px rounded-xl overflow-hidden cursor-pointer hover:opacity-75 transition ${
        index === bigIndex ? "ring-2 ring-primary-orange" : ""
      }`}
      onClick={() => setIndex(index)}
    >
      <img src={image} alt="first product thumbnail" />

      {index === bigIndex ? (
        <div className="top-0 left-0 z-20 absolute bg-white opacity-70 w-full h-full" />
      ) : (
        ""
      )}
    </div>
  );
}

export default Thumbnail;
