import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IoMdClose } from "react-icons/io";


interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string
}

const Modal = ({ children, isOpen, onClose, title }: ModalProps) => {
  const modalRoot = document.getElementById('root'); // 'root' 대신 일반적으로 사용되는 'modal-root'를 추천합니다.

  useEffect(() => {
    // 모달이 열릴 때 body의 스크롤을 방지합니다.
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    // Cleanup 함수: 모달이 닫힐 때 body의 스크롤을 다시 활성화합니다.
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]); // isOpen 상태가 변경될 때마다 실행됩니다.

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '15px', width: '90%', height: '90%', overflowY: 'auto' }}>
        <div style={{ 
          width: '100%',display: 'flex', justifyContent: 'space-between', borderBottom:'1px solid #000',
          alignItems:'center',
          paddingBottom:'10px' 
          }}>
          <h1 style={{fontSize:'1.5rem', fontWeight:300}}>{title}</h1>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none' }}
          >
            <IoMdClose
              size={30}
            />
          </button>
        </div>
        {children}

      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
