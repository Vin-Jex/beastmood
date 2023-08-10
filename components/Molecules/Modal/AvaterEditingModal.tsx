import React, { useCallback, useContext, useState } from "react";
import Modal from "./Modal";
import { Close } from "@mui/icons-material";
import { Slider } from "@mui/material";
import { Area, Point } from "react-easy-crop/types.js";
import Cropper from "react-easy-crop";
import bg from "@/public/images/Large2.jpg";
import Button from "../Input/Button";
import { CreateAccountContext } from "@/context/Form/CreateAccount";
import getCroppedImg from "@/components/utils/cropImage";

interface AvaterEditingModalProps {
  handleModal: () => void;
  isModalOpen: boolean;
  image: string;
  setPhotoURL: any;
  setFileURL: any;
}

const AvaterEditingModal: React.FC<AvaterEditingModalProps> = ({
  handleModal,
  isModalOpen,
  image,
  setPhotoURL,
  setFileURL,
}) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1.2);
  const [rotate, setRotate] = useState(0);
  const { croppedImage, setCroppedImage } = useContext(CreateAccountContext);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedArea(croppedAreaPixels);
      console.log(croppedArea, croppedAreaPixels);
    },
    []
  );

  const handleCropImage = async () => {
      const { file, url } = await getCroppedImg(image, croppedArea, rotate);
      console.log("FILE: " + file);
      console.log("URL: " + url);

      if (!setCroppedImage) return;
      setPhotoURL(url);
      setFileURL(file);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleModal}
      className='!w-[95%] sm:!w-[30em]'
      defaultHeader={false}
    >
      <div className='flex flex-col items-center justify-center pt-5 px-0'>
        <header className='flex justify-between !items-center w-full px-4 mb-4 text-dark dark:text-light'>
          <h3 className='text-sm sm:text-base text-dark dark:text-light font-medium capitalize'>
            Edit Avater
          </h3>
          <span
            className='flex items-center justify-center text-dark dark:text-light cursor-pointer'
            onClick={handleModal}
          >
            <Close className='text-base' />
          </span>
        </header>

        <main className='bg-dark dark:bg-light h-[15.7em] w-full relative'>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            rotation={rotate}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onRotationChange={setRotate}
            onZoomChange={setZoom}
            cropShape='round'
            showGrid={false}
          />
        </main>

        <div className='space-y-5 w-full px-4 py-4'>
          <div>
            <span className='w-full text-sm'>
              Zoom: {Math.round(Number(zoom) * 100)}
            </span>
            <div className='flex flex-col w-full h-[20px] ml-1'>
              <Slider
                size='small'
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby='Zoom'
                onChange={(e, zoom) => setZoom(Number(zoom))}
                classes={{ root: "slider" }}
                className='text-main-brand'
              />
            </div>
          </div>
          <div>
            <span className='w-full text-sm'>Rotate: {Math.round(rotate)}</span>
            <div className='flex flex-col w-full h-[20px] ml-1'>
              <Slider
                size='small'
                value={rotate}
                min={0}
                max={360}
                aria-labelledby='Zoom'
                onChange={(e, rotate) => setRotate(Number(rotate))}
                classes={{ root: "slider" }}
                className='text-main-brand'
              />
            </div>
          </div>

          <div className='mr-auto !mt-12'>
            <Button
              type='button'
              onClick={(e) => {
                handleCropImage();
                handleModal();
              }}
              className='bg-main-brand text-light w-fit !px-6 ml-auto capitalize'
            >
              save
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AvaterEditingModal;
