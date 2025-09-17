import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from './Icons';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
        console.error("The element with id 'modal-root' was not found in the DOM.");
        return null;
    }

    return ReactDOM.createPortal(
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" 
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
            <div 
              className="bg-white p-6 rounded-xl shadow-2xl relative max-w-md w-full transform transition-all animate-fade-in-scale" 
              onClick={(e) => e.stopPropagation()}
            >
                <button 
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors" 
                  onClick={onClose} 
                  aria-label="Fechar modal"
                >
                    <CloseIcon />
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;