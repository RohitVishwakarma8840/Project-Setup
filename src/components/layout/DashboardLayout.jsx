import React, { useEffect, useState } from 'react';
import Sidebar from './SideBar.jsx';
import { AppBar, Toolbar, IconButton, Typography, Box, Avatar, Stack, TextField, useTheme, useMediaQuery } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { fetchUsers, setSearch } from '../../store/slices/userSlice';
import { useSelector } from 'react-redux';
// import { fetchBeneficiaries } from '../../store/slices/beneficiarySlice';
// import { fetchTransactionFileItems, fetchTransactionFiles} from '../../store/slices/transactionSlice.js';

// import {font} from '../../utils/font.js'


const DashboardLayout = ({ children }) => {
  console.log('children', children)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
//   console.log("location",location);
  
//   const dispatch = useDispatch();


//   const [searchText, setSearchText] = useState("");

//   Custom debounce logic
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       dispatch(setSearch(searchText));
//     }, 500); // 500ms debounce time

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [searchText]);

  
//   useEffect(() => {
//     setSearchText(search)
//   }, [search])

  useEffect(() => {
    // setSearchText("");              // reset local searchText
    // dispatch(setSearch(""));       // reset search in Redux too, if needed 
  }, [location.pathname]);

    const { fileId } = useParams();
  

  // Dispatch when debounced value changes
//   useEffect(() => {
//     if (location.pathname === "/users") {
//       dispatch(fetchUsers({ page: page, size: rowsPerPage, search: search }));
//     }else if(location.pathname === "/beneficiaries"){
//       dispatch(fetchBeneficiaries({page : 1, size : 10, search : search}))
//     }else if(location.pathname === "/transactions"){
//       dispatch(fetchTransactionFiles({page : page, size : rowsPerPage, search : search}))
//     }
//     else if(location.pathname === "/reverse"){
//       // dispatch(fetchTransactionFiles({page : page, size : rowsPerPage, search : search}))
//     }else if(location.pathname.includes("/transactions/file")){
//             dispatch(fetchTransactionFileItems({ fileId, page: 1, size: 10 ,search:search}));
//     }
    
   
//   }, [search, location.pathname]);

  return (
    <Box minHeight="100vh" display="flex" flexDirection={{ xs: 'column', md: 'row' }}
    //  bgcolor="#F8F7FA"
     bgcolor="#532ca0ff"
     >
      {!isMobile && <Sidebar />}

      <Box flex={1} display="flex" flexDirection="column" sx={{overflow:'auto'}}>
      <Box px={{ xs: 2, sm: 3, md: 4 }} pt={2} pb={3} width="100%">
        {/* <AppBar
          position="static"
          color="default"
          elevation={1}
          sx={{
            bgcolor: '#fff',
            boxShadow: '0px 5px 11px #F2F0F4CC',
            borderRadius : "4px"

          }}
        >
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
              minHeight: 70,
              px: { xs: 2, sm: 3, md: 2 },
            }}
          >
            <Box display="flex" alignItems="center" flex={1} maxWidth={isMobile ? '100%' : 340}>
              <SearchIcon sx={{ color: '#A3AED0', mr: 1 }} />
              <TextField
                variant="standard"
                placeholder="Search"
                value={searchText}
                onChange={(val) => {setSearchText(val.target.value)}}
                size="small"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    pl: 1,
                    '& input::placeholder': {
                      fontSize: '14px',
                      opacity: 1,
                      color: 'grey'
                     
                    },
                  },
                }}
                sx={{marginTop : "5px"}}
              />
            </Box>

            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton color="inherit">
                <NotificationsIcon sx={{ color: '#A3AED0' }} />
              </IconButton>
              <Avatar
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                sx={{ width: 44, height: 44, border: '2px solid #EEEEEE' }}
              />
            </Stack>
          </Toolbar>
        </AppBar> */}
      </Box>
      
        <Box flex={1} p={{ xs: 2, md: 2, sm:1 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout; 