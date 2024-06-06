import { useState } from 'react';
import { MdClose } from "react-icons/md";
import { addRestaurant } from '../services/restaurantService';

const AddEdit = ({ type, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState(null);

  const handleAddNote = async () => {
    if (!name) {
      setError("Please enter the name");
      return;
    }

    setError("");

    const restaurant = { name, address, telephone };

    if (type === "edit") {
      // editNode logic (to be implemented)
    } else {
      try {
        await onSave(restaurant);
        onClose();
      } catch (error) {
        console.error('Error adding restaurant:', error);
      }
    }
  };

  return (
    <div className='relative'>
      <button 
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label">Name</label>
        <input 
          type="text"
          className="text-xl text-slate-950 outline-none"
          placeholder="Enter Name Of Restaurant"
          value={name}
          onChange={({ target }) => setName(target.value)} 
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="input-label">Address</label>
        <input 
          type="text"
          className="text-xl text-slate-950 outline-none"
          placeholder="Enter Address Of Restaurant"
          value={address}
          onChange={({ target }) => setAddress(target.value)} 
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="input-label">Telephone</label>
        <input 
          type="number"
          className="text-xl text-slate-900 outline-none"
          placeholder="Enter Telephone Of Restaurant"
          value={telephone}
          onChange={({ target }) => setTelephone(target.value)} 
        />
      </div>

      {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}

      <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>ADD</button>
    </div>
  );
};

export default AddEdit;
