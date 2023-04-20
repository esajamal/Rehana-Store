import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
export default function LoadingBox() {
  return (
    <Spinner Animation="border" role="status">
      <span className="visually-hidden">loading</span>
    </Spinner>
  );
}
