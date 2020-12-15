import React, { Fragment, useState } from 'react';
import { Sidebar } from '../components';

export default function SidebarContainer() {
  const [ open, setOpen ] = useState(false);

  return (
    <Fragment>
    <Sidebar.Icon
      open={open}
      onClick={() => setOpen(!open)}
    />
    <Sidebar open={open}>
      <Sidebar.Avatar src={'avatar'} />
      <Sidebar.Group>
        <Sidebar.Link>Home</Sidebar.Link>
        <Sidebar.Link>Transactions</Sidebar.Link>
        <Sidebar.Link>Wallet</Sidebar.Link>
        <Sidebar.Link>Sign Out</Sidebar.Link>
      </Sidebar.Group>
    </Sidebar>
    </Fragment>
  )

}
