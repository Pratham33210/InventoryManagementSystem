import { Outlet, useNavigate } from "react-router-dom";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Button, Typography } from "@mui/material";

function RootComponent() {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Home", path: "/home" },
    { text: "Inventory", path: "/inventory" },
    { text: "Orders", path: "/orders" },
    { text: "Customers", path: "/customers" },
    { text: "Revenue", path: "/revenue" },
    { text: "Growth", path: "/growth" },
    { text: "Reports", path: "/reports" },
    { text: "Settings", path: "/settings" },   
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">My App</Typography>
        </Box>
        <List>
          {/* Login Button at the top */}
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ m: 1 }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </ListItemButton>
          </ListItem>
          {/* Menu items below the Login button */}
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default RootComponent;