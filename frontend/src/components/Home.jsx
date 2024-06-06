import { MdAdd } from "react-icons/md";
import AddEdit from './AddEdit';
import Modal from "react-modal";
import Card from "./Card";
import { useState, useEffect } from "react";
import { getAllRestaurants, addRestaurant, getRestaurantById } from '../services/restaurantService';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getAllRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleSelectRestaurant = async (id) => {
    try {
      const data = await getRestaurantById(id);
      setSelectedRestaurant(data);
    } catch (error) {
      console.error('Error fetching restaurant by ID:', error);
    }
  };

  const handleAddRestaurant = async (restaurant) => {
    try {
      const newRestaurant = await addRestaurant(restaurant);
      setRestaurants([...restaurants, newRestaurant]);
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  const closeModal = () => {
    setOpenAddEditModal({ isShown: false, type: "add", data: null });
  };

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          {restaurants.map((item) => (
            <Card
              key={item._id}
              Name={item.name}
              Address={item.address}
              Telephone={item.telephone}
              tags="#Meeting"
              isPinned={true}
              onEdit={() => {}}
              onDelete={() => {}}
              onPinNote={() => {}}
            />
          ))}
        </div>
      </div>

      <button
        className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10'
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel="Add/Edit Modal"
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEdit
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={closeModal}
          onSave={handleAddRestaurant} 
        />
      </Modal>
    </>
  );
};

export default Home;
