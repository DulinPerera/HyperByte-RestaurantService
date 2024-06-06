import { MdAdd } from "react-icons/md";
import AddEdit from './AddEdit';
import Modal from "react-modal";
import Card from "./Card";
import { useState } from "react";

const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const closeModal = () => {
    setOpenAddEditModal({ isShown: false, type: "add", data: null });
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Card
            Name="KFC"
            Address="3rd APR 2024"
            Telephone="077665697"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
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
        />
      </Modal>
    </>
  );
};

export default Home;
