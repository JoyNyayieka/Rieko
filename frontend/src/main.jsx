import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import '@mantine/core/styles.css'
import "@mantine/notifications/styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={{
          components: {
            Notification: {
              defaultProps: {
                color: "#3A5B22"
              },
            },
          },
          fontFamily: "CrimsonPro, sans-serif",
        }}
      >
        <Notifications position='top-right' />
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
