import React, { useState } from "react";
import RegisterModal from "../components/RegisterPage";
import LoginModal from "../components/Login";
import { useModal } from "../contexts/ModalContext";

const AuthModal = () => {
  const { isModalOpen, activeModal } = useModal();

  if (!isModalOpen) {
    return null;
  }

  return { isModalOpen } ? (
    <div className="">
      {activeModal === "registered" ? (
        <div className="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
          <LoginModal />
        </div>
      ) : (
        <div className="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
          <RegisterModal />
        </div>
      )}
    </div>
  ) : null;
};

export default AuthModal;
