import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const LazyShoppingCartPage = lazy(() => import('../pages/ShoppingCartPage'));
const LazyStorePage = lazy(() => import('../pages/ShopPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyStorePage />} />
        <Route path="/cart" element={<LazyShoppingCartPage />} />
      </Route>
    </Routes>
  );
};
