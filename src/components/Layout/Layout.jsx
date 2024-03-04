import { AppBar } from 'components/AppBar/AppBar';
import { Section } from 'components/Section/Section.styled';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Section>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Section>
    </div>
  );
};
