import React from 'react';
import './loading.css';

interface Props {
  className?: string;
}

export default function index({ className }: Props) {
  return (
    <div className={`${className} d-flex item-center`}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
