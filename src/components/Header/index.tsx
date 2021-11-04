/* eslint-disable object-curly-newline */
import React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '7vh' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h2" component="div">
            顺Routes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
