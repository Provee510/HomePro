// src/context/ModalContext.js
import React, { createContext, useState, useContext } from "react";
import { act } from "react-dom/test-utils";

// Create a context
const ModalContext = createContext();

// Provider component to wrap around the app
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("register");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const toggleModal = () => {
    setActiveModal((prevModal) =>
      prevModal === "register" ? "login" : "register"
    );
  };

  console.log(activeModal);
  

  return (
    <ModalContext.Provider value={{ isModalOpen, handleOpenModal, handleCloseModal, activeModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook for accessing the modal context easily
export const useModal = () => {
  return useContext(ModalContext);
};
