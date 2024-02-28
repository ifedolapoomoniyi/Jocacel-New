const Gallery = ({image, details}) => {
  return (
    <div>
      <div className="relative rounded-lg">
        <img className="h-[400px] rounded-lg w-auto max-w-[600px]" src={image} alt="" />
        <div className="absolute bottom-3 text-white text-2xl p-2 bg-black bg-opacity-40 font-semibold">{details}</div>
      </div>
    </div>
  )
}

export default Gallery