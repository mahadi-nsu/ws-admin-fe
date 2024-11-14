import apiClient from '@/lib/apiClient';
import errorHandler from '@/utils/errorHandler';
import { Tooltip } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

interface IImageType {
  [id: string]: string;
}

interface IPhotoToolTipProps {
  photoUrl: string;
}

const PhotoTooltip = ({ photoUrl }: IPhotoToolTipProps) => {
  const [images, setImages] = useState<IImageType | undefined>(undefined);

  const fetchPhoto = async () => {
    if (images && images[photoUrl]) return;

    try {
      const res = await apiClient.get(photoUrl, { responseType: 'blob' });
      const imgUrl = URL.createObjectURL(res.data);
      setImages((prev) => ({
        ...prev,
        [photoUrl]: imgUrl,
      }));
    } catch (error: any) {
      errorHandler(error);
    }
  };

  return (
    <>
      <Tooltip
        overlayInnerStyle={{
          borderRadius: '1rem',
        }}
        placement="right"
        title={() => {
          if (images && images[photoUrl]) {
            return (
              <Image
                height={640}
                width={480}
                style={{
                  width: '200px',
                  height: 'auto',
                  objectFit: 'cover',
                }}
                src={images[photoUrl]}
                alt="photo"
              />
            );
          }
          return 'Loading...';
        }}
      >
        <div onMouseOver={fetchPhoto}>
          <CameraIcon />
        </div>
      </Tooltip>
    </>
  );
};

export default PhotoTooltip;

const CameraIcon = () => {
  return (
    <StyledSVg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
      />
    </StyledSVg>
  );
};

const StyledSVg = styled.svg`
  height: 1.6rem;
  width: 1.6rem;
  stroke: white;
  fill: black;
  cursor: pointer;
`;
