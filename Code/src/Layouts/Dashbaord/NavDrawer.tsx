import React from 'react'

import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import Drawer from '@material-ui/core/Drawer'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
    },
    drawerClose: {
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
  }),
)

const NavDrawer = (props: any): JSX.Element => {
  const classes = useStyles()

  if (props.open) {
    return (
      <Drawer
        variant="permanent"
        className={classes.drawerOpen}
        classes={{
          paper: classes.drawerOpen,
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    )
  } else {
    return <div />
  }
}

export default NavDrawer
