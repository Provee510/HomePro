// src/context/ModalContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context
const ModalContext = createContext();

// Provider component to wrap around the app
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, handleOpenModal, handleCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook for accessing the modal context easily
export const useModal = () => {
  return useContext(ModalContext);
};
