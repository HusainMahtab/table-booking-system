import React, { useEffect, useState } from "react";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast"
function AllBookingsOrders() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/bookings/orders`
      );
      console.log("order response", response);
      setData(response?.data?.data);
    } catch (error) {
      console.error("Error while fetching all orders", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0"); 
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
    const year = date.getFullYear().toString().slice(-2); 
    return `${day}-${month}-${year}`;
  };

  const handleDelete=async(_id)=>{
    try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/bookings/delete/${_id}`)
        toast.success("deleted successfully")
        setData((prev)=>prev.filter((e)=>e._id!==_id))
    } catch (error) {
        console.error("error whilte deleting bookings!",error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        All Bookings & Orders (ADMIN)
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((table, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {table?.name || "N/A"}
            </h2>
            <p className="text-gray-600 mb-1">
              <strong>Guests:</strong> {table?.guests || "N/A"}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Date:</strong> {formatDate(table?.date || "N/A")}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Contact:</strong> {table?.contactNumber || "N/A"}
            </p>
            <button onClick={()=>handleDelete(table._id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
              Delete 
              <Toaster/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBookingsOrders;
