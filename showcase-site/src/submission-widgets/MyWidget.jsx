import React, { useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes/routes.jsx';

const MyWidget = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default MyWidget;
