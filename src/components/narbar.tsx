import * as React from 'react';
import {Link} from 'react-router-dom'
import { useAppSelector } from '../app/hooks';
import '../styles/navbar.scss'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BeerState } from '../features/beer/beerSlice';
import { useAppDispatch } from '../app/hooks';
import { removeBeerFromCut } from '../features/beer/beerSlice';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ClearIcon from '@mui/icons-material/Clear';

export function NavBar() {
  const beersInCurt: BeerState[] = useAppSelector((state)=>state.beer)
  const dispatch = useAppDispatch()
  const handleRemoveBeerFromCurt = (e:React.MouseEvent<HTMLElement>)=>{
    dispatch(removeBeerFromCut(Number(e.currentTarget.id)))
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box className='nav-bar'sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar id='tool-bar'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              Beer App
            </Typography>
            <Link id='link' to='/'>
              <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                home
              </Typography>
            </Link>
            <Typography id='curt' variant="body1" component="div" sx={{ flexGrow: 1 }}>
              <ShoppingCartIcon id='curt-icon'  onClick={handleClickOpen}/>
              <p>{beersInCurt.length}</p>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          items in your curt
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <table>
              <tr>
                <th>item n#</th>
                <th>name</th>
                <th>cost/$</th>
              </tr>
              {
                beersInCurt.map((beer: BeerState, i)=>(
                  <tr key={beer.id}>
                    <td>{i}</td>
                    <td>{beer.name}</td>
                    <td>1</td>
                    <td id={String(beer.id)} onClick={handleRemoveBeerFromCurt}><ClearIcon /></td>
                  </tr>
                ))
              }
            </table>
            <hr/>
            Total cost = ${beersInCurt.length}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleClose} autoFocus>
            choose payment method
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
