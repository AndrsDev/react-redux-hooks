import React from 'react';
import Menu from 'components/Menu';

const Layout = ({children}: any) => (
  <>
    <Menu />
    <div className="margin">
      {children}
    </div>
  </>
);

export default Layout;