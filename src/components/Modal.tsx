"use client";
import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-purple-500/20 p-6 relative max-w-3xl w-full">
        <button
          onClick={onClose}
          className="bg-red-600 rounded absolute top-2 right-2 text-white hover:text-purple-300 cursor-pointer"
        >
          <X className="w-7 h-7" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
