import React from "react";
import Spinner from 'react-bootstrap/Spinner';

export function LoadingAnimation () {
  return (
    <div style={{}}>
      <Spinner animation="border" variant="primary" />
    </div>
  )
}
