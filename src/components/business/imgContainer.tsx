import React from 'react';
import useImageLoaded from 'hooks/useImageLoad';
import Loading from 'components/loading';

interface Props {
  imgSrc: string;
}

export default function ImgContainer({ imgSrc }: Props) {
  const [ref, loaded, onLoad] = useImageLoaded();
  return (
    <div className="img-container d-flex item-center">
      <img ref={ref} onLoad={onLoad} src={imgSrc} alt=""></img>
      {!loaded && <Loading className="absolute" />}
    </div>
  );
}
