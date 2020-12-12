import React from 'react';
import { Sidebar } from '../components';

export default function SidebarContainer() {
  return (
    <Sidebar>
      <Sidebar.Group>
        <Sidebar.Link>Home</Sidebar.Link>
        <Sidebar.Link>Transactions</Sidebar.Link>
        <Sidebar.Link>Wallet</Sidebar.Link>
      </Sidebar.Group>
    </Sidebar>
  )

}
