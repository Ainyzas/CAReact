import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthHeader() {
  return (
    <div>
      AuthHeader
      <Outlet />
    </div>
  );
}
