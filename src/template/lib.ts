export const generateImportation = () => {
  return `
  import React, { createContext, useReducer, useContext, useEffect } from 'react';
  import { createRoot } from 'react-dom/client';
  import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
  import { Card, Layout, Button } from '@arco-design/web-react';

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

  darkThemeMq.addListener(e => {
  if (e.matches) {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
      document.body.removeAttribute('arco-theme');
    }
  });

  const PlainObject = {};
  if (Object.hasOwn !== undefined && Object.hasOwn !== null) {
    PlainObject.hasOwnProperty = function(property){
      return Object.hasOwn(this, property);
    }
  }

  const Utils = {
    isFunction: (data) => {
      return PlainObject.toString.call(data) === '[object Function]';
    },
    hasOwn: (data, property) => {
      return PlainObject.hasOwnProperty.call(data, property);
    }
  };

  `;
};
