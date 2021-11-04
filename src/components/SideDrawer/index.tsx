import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ScreenSizeDetector from 'screen-size-detector';

enum EnumScreen {
  phone,
  desktop,
}

const SideDrawer = () => {
  const [showDrawer, toggleDrawer] = useState<boolean>(false);
  const [screenType, setScreenType] = useState<EnumScreen>(EnumScreen.desktop);

  useEffect(() => {
    const screen = new ScreenSizeDetector();
    if (screen.width < 500) {
      setScreenType(EnumScreen.phone);
    }
  }, []);

  return (
    <>
      {screenType === EnumScreen.desktop ? (
        <Collapse
          orientation="horizontal"
          in={showDrawer}
          collapsedSize={80}
          sx={{ boxShadow: 3 }}
        >
          <Box
            sx={{
              width: 300,
              height: '93vh',
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                // flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <Button onClick={() => toggleDrawer(!showDrawer)}>
                {showDrawer ? (
                  <>
                    <KeyboardArrowLeftIcon fontSize="large" />
                    <Typography variant="body1" component="div">
                      Hide
                    </Typography>
                  </>
                ) : (
                  <KeyboardArrowRightIcon fontSize="large" />
                )}
              </Button>
            </Box>
            {showDrawer ? 'content' : null}
          </Box>
        </Collapse>
      ) : (
        <Collapse in={showDrawer} collapsedSize={40} sx={{ boxShadow: 3 }}>
          <Box
            sx={{
              height: showDrawer ? 300 : 40,
              boxShadow: 1,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Button onClick={() => toggleDrawer(!showDrawer)}>
                {showDrawer ? (
                  <KeyboardArrowUpIcon fontSize="large" />
                ) : (
                  <KeyboardArrowDownIcon fontSize="large" />
                )}
              </Button>
            </Box>

            {showDrawer ? 'content' : null}
          </Box>
        </Collapse>
      )}
    </>
  );
};

export default SideDrawer;
