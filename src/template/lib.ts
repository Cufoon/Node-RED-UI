export const generateImportation = () => {
  return `
  import React, { createContext, useReducer } from 'react';
  import { createRoot } from 'react-dom/client';
  import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

  const Utils = {
    isFunction: (data) => {
      return {}.toString.call(data) === '[object Function]';
    }
  };
  `;
};
