import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import NavDrawer from './NavDrawer'
import TopBar from './TopBar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
)

export default function MiniDrawer({ children }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <TopBar open={open} handleDrawerOpen={toggleDrawer} />
      <NavDrawer open={open} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}
