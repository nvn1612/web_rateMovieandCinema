import React from "react";
import { ImageContent } from "../../../components/image-content/ImageContent";
import { ContentModalRate } from "../../../layouts/content-modal-rate/ContentModalRate";
import { BtnConfirm } from "../../../components/btn-confirm/BtnConfirm";
export const ModalRateMovie = ({ isOpen, onClose,movieName, posterUrl }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-lg">
        <div className="p-3 bg-slate-400 flex space-x-1 items-center justify-between">
          <div className="flex space-x-1">
            <p className="font-bold">Đáng Giá Phim</p>
            <p className="font-bold text-red-600">{movieName}</p>
          </div>

          <button onClick={onClose} className=" text-black text-2xl">
            &times;
          </button>
        </div>
        <div className="flex p-4">
          <div className="w-2/4 flex justify-center">
            <ImageContent
              width="w-[200px]"
              height="h-[290px]"
              size_rounded="xl"
              image={posterUrl}
            />
          </div>
          <div className="w-2/4">
            <ContentModalRate
              label_1="Nội dung phim"
              label_2="Diễn xuất"
              label_3="Kỹ xảo"
              label_4="Âm thanh"
              label_5="Đạo diễn"
              label_6="Tính giải trí"
            />
          </div>
        </div>
        <div className="flex justify-center mt-2 mb-4">
          <BtnConfirm label="Hoàn tất đánh giá" />
        </div>
      </div>
    </div>
  );
};
