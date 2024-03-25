const Gallery = ({image, details}) => {
  return (
    <div>
      <div className="relative rounded-lg">
        <img className="h-[300px] rounded-lg w-auto md:max-w-[500px]" src={image} alt="" />
        <div className="absolute p-2 text-xl font-semibold text-white bg-black bottom-3 bg-opacity-40">{details}</div>
      </div>
    </div>
  )
}

export default Gallery