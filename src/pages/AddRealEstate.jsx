import { Sidebar, TopBar } from '../components'

const AddRealEstate = () => {
  return (
    <div className="flex text-base md:text-xl">
      <Sidebar/>

      <div className="w-full p-5">
        <TopBar/>

        <div className="flex flex-col items-center md:items-baseline md:flex-row ">
          <div className="min-w-[300px] mb-10">
            <h2 className="relative py-3 text-xl font-semibold w-fit">Add Property Images
              <span className="block bg-primary absolute left-3 right-3 h-0.5"></span>
            </h2>
            <div className="flex flex-wrap gap-6">
              <div className="p-5 m-5 mx-10 text-xs scale-150 bg-green-200 border border-dashed rounded-lg border-primary w-fit">
                + Add Image
              </div>
              </div>
          </div>
          
          <div className="flex-1">
            <h2 className="relative font-semibold w-fit">Property Details
              <span className="block bg-primary absolute left-3 right-3 h-0.5"></span>
            </h2>
            
            <form action="">
              <div className="flex flex-col gap-4 py-4 w-[350px]">
                <div className="flex flex-col">
                  <label htmlFor="property-name">Property Name</label>
                  <input type="text" id="property-name" className="p-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="property-location">Property Location</label>
                  <input type="text" id="property-location" className="p-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="property-rooms">Number of Rooms</label>
                  <input type="number" id="property-rooms" className="p-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="property-bathrooms">Number of Bathrooms</label>
                  <input type="number" id="property-bathrooms" className="p-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="property-parking">Number of Parking Spaces</label>
                  <input type="number" id="property-parking" className="p-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="property-price">Property Price</label>
                  <input type="text" id="property-price" className="p-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="flex justify-end">
                <button className="p-3 mt-5 text-white rounded-lg bg-primary">Upload Property</button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRealEstate