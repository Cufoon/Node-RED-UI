export const generateImportation = () => {
  return `
  import React, { createContext, useReducer } from 'react';
  import { createRoot } from 'react-dom/client';
  import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
  import { Card } from '@arco-design/web-react';
  // import "@arco-design/web-react/dist/css/arco.css";

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

  darkThemeMq.addListener(e => {
  if (e.matches) {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
      document.body.removeAttribute('arco-theme');
    }
  });

  const Utils = {
    isFunction: (data) => {
      return {}.toString.call(data) === '[object Function]';
    }
  };

  const Button = ({children}) => {
    return <Card>{children}</Card>;
  }
  `;
};
