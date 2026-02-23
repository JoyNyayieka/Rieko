import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';


export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    
   return (
    <Box pb={0}>
      <header className={`${classes.header} `}>
        <Group justify="space-between" h="100%">
          
          <div
            style={{
              fontSize: 30,
              fontFamily: 'Outfit',
              color: '#e5f0ff',
            }}
          >
            Rieko
          </div>
          
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link} style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#e5f0ff'}}>
              Home
            </a>
            <a href="#" className={classes.link} style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#e5f0ff'}}>
              About
            </a>            
            <a href="#" className={classes.link} style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#e5f0ff'}}>
              Contact Us
            </a>
            <a href="#" className={classes.link} style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#e5f0ff'}}>
              Find an Expert
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button 
              variant="default" 
              style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#001433', backgroundColor: '#e5f0ff'}}
              radius="xl"
            >
              Log In
            </Button>
              
            <Button 
              style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#001433', backgroundColor: '#66A3FF'}}
              radius="xl"
            >
              Sign Up
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" color='#e5f0ff' />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link} style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#001433'}}>
            Home
          </a>
          <a href="#" className={classes.link} style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#001433'}}>
            About
          </a>          
          <a href="#" className={classes.link} style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#001433'}}>
            Contact Us
          </a>
          <a href="#" className={classes.link} style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#001433'}}>
            Find an Expert
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default"
              style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#001433', backgroundColor: '#e5f0ff'}}
              radius="xl"
            >
              Log In
            </Button>
            <Button
              style={{ fontFamily: 'ZillaSlab-SemiBold', color: '#001433', backgroundColor: '#3385FF'}}
              radius="xl"
            >
              Sign Up
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}