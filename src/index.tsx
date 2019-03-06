import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { create } from 'jss';
import { jssPreset } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';

import './index.scss';

const jss = create({
   ...jssPreset(),
   insertionPoint: document.getElementById('jss-insertion-point') || 'jss-insertion-point',
});
const Index: React.FunctionComponent = () => (
   <JssProvider jss={jss}>
      <NestedList/>
   </JssProvider>
);

const NestedList: React.FunctionComponent = () => {
   const [open, setOpen] = useState(true);
   return (
      <List
         subheader={<ListSubheader>Nested List Items</ListSubheader>}
         className='list'
      >
         <ListItem button>
            <ListItemIcon>
               <SendIcon/>
            </ListItemIcon>
            <ListItemText inset primary="Sent mail"/>
         </ListItem>
         <ListItem button>
            <ListItemIcon>
               <DraftsIcon/>
            </ListItemIcon>
            <ListItemText inset primary="Drafts"/>
         </ListItem>
         <ListItem button onClick={() => {setOpen(!open)}}>
            <ListItemIcon>
               <InboxIcon/>
            </ListItemIcon>
            <ListItemText inset primary="Inbox"/>
            {open ? <ExpandLess/> : <ExpandMore/>}
         </ListItem>
         <Collapse 
            in={open}
            timeout='auto'
            unmountOnExit
         >
            <List
               disablePadding
               className='list'
            >
               <ListItem button>
                  <ListItemIcon>
                     <StarBorder/>
                  </ListItemIcon>
                  <ListItemText primary="Starred"/>
               </ListItem>
            </List>
         </Collapse>
      </List>
   );
}

ReactDOM.render(<Index/>, document.getElementById('root'));
