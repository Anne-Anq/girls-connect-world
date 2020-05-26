import React from "react"
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  IconButton,
  Badge,
  Tooltip,
} from "@material-ui/core"
import {
  Event,
  SupervisorAccount,
  FilterVintage,
  DirectionsBike,
  Fingerprint,
  Face,
  FiberNew,
  Fastfood,
  FilterHdr,
  Pets,
  Spa,
  EmojiNature,
} from "@material-ui/icons"
import tinycolor from "tinycolor2"

const menus = [
  { title: "Event", Icon: Event },
  { title: "Beauty", Icon: Spa },
  { title: "Health", Icon: DirectionsBike },
  { title: "Food", Icon: Fastfood },
  { title: "Outdoor", Icon: FilterHdr },
  { title: "Pets", Icon: Pets },
  { title: "Crafts", Icon: FilterVintage },
  { title: "Nature", Icon: EmojiNature },
]

const PRIMARY_COLOR = "#36e3e1"
const DRAWER_WIDTH = 80

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: PRIMARY_COLOR,
    color: "black",
  },
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(6),
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    backgroundColor: tinycolor(PRIMARY_COLOR).lighten(30).toString(),
  },
  drawerContainer: {
    overflow: "auto",
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  listItemIcon: {
    minWidth: 0,
  },
}))

type Props = {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Fingerprint fontSize="large" />
          <Typography variant="h6" noWrap className={classes.title}>
            GIRLS CONNECT YYC
          </Typography>
          <Tooltip title="Anouncements">
            <IconButton>
              <Badge color="secondary" variant="dot">
                <FiberNew />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Friends">
            <IconButton>
              <SupervisorAccount />
            </IconButton>
          </Tooltip>
          <Tooltip title="Account">
            <IconButton>
              <Face />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {menus.map(({ Icon, title }) => (
              <ListItem button key={title} className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <Icon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      {children}
    </div>
  )
}
