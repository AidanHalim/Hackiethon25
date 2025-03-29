import React, { useState } from 'react';
import { RouterProvider } from 'react-router';
import { createRouter } from './routes/routes.jsx';

const MyWidget = () => {
  const router = createRouter();

  return (
    <RouterProvider router={router} />
  );
};

export default MyWidget;
