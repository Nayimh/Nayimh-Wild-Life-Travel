import React from 'react';
import './Dashboardh.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FiLogOut } from "react-icons/fi";
import { RiAdminFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FcRating } from "react-icons/fc";


import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Pages/Firebase/Hooks/useAuth';


const drawerWidth = 240;
const DashboardHome = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

   
    const { admin, user, logout } = useAuth();
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div  className='dashbg'>
        
        

        <List className='dashbg' sx={{ boxShadow: 3 }}>
          
                <ListItem >
                
                    <h4  style={{  boxShadow: 1,  fontWeight: '600', padding: '1rem' }}> {user?.displayName}  </h4>
                </ListItem>
                   
                
            </List>
       
            {admin ? <List>
            <ListItem>
                
            <Link className='dashLink' to={`/home`}><p>Home <AiFillHome/> </p></Link>
                
            </ListItem>
            <ListItem>
            <Link className='dashLink' to={`/dashboard/makeAdmin`}><p >Make Admin <RiAdminFill/> </p></Link>
                
            </ListItem>
            <ListItem>
            <Link className='dashLink' to={`/dashboard/manageProduct`}><p >MANAGE PRODUCTS <MdManageAccounts/> </p></Link>
                
            </ListItem>
            <ListItem>
            <Link className='dashLink' to={`/dashboard/manageOrder`}><p >MANAGE All ORDERS <MdManageAccounts/> </p></Link>
                
            </ListItem>
           
            <ListItem>
            <Link className='dashLink' to={`/dashboard/addProduct`}><p >ADD NEW PODUCTS <MdAddShoppingCart/> </p></Link>
                
            </ListItem>
            
            <ListItem>
            <Link className='dashLink' to={`/dashboard/myOrder`}><p >MY ORDERS <FaShoppingBasket/> </p></Link>
                
          </ListItem>
          
          <ListItem>
            <Link className='dashLink' to={`/dashboard/rating`}><p >Ratings  <FcRating/> </p></Link>
                
            </ListItem>
        
            <ListItem>
            <Link className='dashLink' to={`/home`}><button className='btn1' onClick={logout} >LOGUT <FiLogOut/> </button></Link>
                
                </ListItem>
                </List>
                :
                
                <List>
                    <ListItem>
                
                <Link className='dashLink' to={`/home`}><p >Home <AiFillHome/> </p></Link>
                    
                </ListItem>
                    <ListItem>
            <Link className='dashLink' to={`/dashboard/myOrder`}><p >MY ORDERS <FaShoppingBasket/> </p></Link>
                
            </ListItem>
                    <ListItem>
            <Link className='dashLink' to={`/dashboard/rating`}><p >Ratings  <FcRating/> </p></Link>
                
            </ListItem>
        
            <ListItem>
            <Link className='dashLink' to={`/home`}><button className='btn1' onClick={logout} >LOGUT <FiLogOut/> </button></Link>
                
                </ListItem>
        </List>      
        }
        <Divider />
        
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
            <AppBar
                style={{backgroundColor: '#000'}}
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {admin ? <p className='maincolor'>Admin Dashboard</p> : <p>User Dashboard</p>}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Typography className='dashbg' sx={{ boxShadow: 3, padding: '3rem' }}>
         
            <h1 className=' text-center '>Welcome to Dashboard
              
            </h1>
                </Typography>
          
                <div className="col-sm-12 col-lg-12" style={{ minHeight: "100vh" }}>
                <Outlet />
        </div>
          
        </Box>
      </Box>
    );
}

DashboardHome.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default DashboardHome;