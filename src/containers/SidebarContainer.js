import React, { Fragment, useContext, useState } from 'react';
import { FirebaseContext } from '../context/firebase';
import { Sidebar } from '../components';
import { useAuthListener } from '../hooks';

export default function SidebarContainer() {
  const [ open, setOpen ] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const { user } = useAuthListener();

  const handleSignOut = e => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  return (
    <Fragment>
    <Sidebar.Icon
      open={open}
      onClick={() => setOpen(!open)}
    />
    <Sidebar open={open}>
      <Sidebar.Avatar src={'avatar'} />
      <Sidebar.DisplayName>Hi {user && user.displayName}!</Sidebar.DisplayName>
      <Sidebar.Group>
        <Sidebar.Link>Home</Sidebar.Link>
        <Sidebar.Link>Transactions</Sidebar.Link>
        <Sidebar.Link>Wallet</Sidebar.Link>
        <Sidebar.Link onClick={handleSignOut}>Sign Out</Sidebar.Link>
      </Sidebar.Group>
    </Sidebar>
    </Fragment>
  )

}
