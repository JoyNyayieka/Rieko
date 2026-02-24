import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import '@mantine/core/styles.css'
import "@mantine/notifications/styles.css";
import Router from './routes/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MantineProvider
        theme={{
          components: {
            Notification: {
              defaultProps: {
                color: "#3A5B22"
              },
            },
          },
          
        }}
      >
        <Notifications position='top-right' />
        <RouterProvider router={Router} />
      </MantineProvider>
  </React.StrictMode>
);
