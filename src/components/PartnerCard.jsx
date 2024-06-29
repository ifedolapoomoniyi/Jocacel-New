
const PartnerCard = ({image, title, address} ) => {
  return (
    <div className="flex flex-col w-[300px] h-[400px] rounded-xl shadow-xl ">
      <div className="w-full"><img src={image} alt="" className=" object-cover object-center w-full rounded-t-xl"/></div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm">{address}</p>
      </div>
    </div>
  )
}

export default PartnerCard