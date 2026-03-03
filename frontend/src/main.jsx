import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import '@mantine/core/styles.css'
import "@mantine/notifications/styles.css";
import Router from './routes/Router';

const digitalBlue = [
  "var(--color-digital-blue-50)",
  "var(--color-digital-blue-100)",
  "var(--color-digital-blue-200)",
  "var(--color-digital-blue-300)",
  "var(--color-digital-blue-400)",
  "var(--color-digital-blue-500)",
  "var(--color-digital-blue-600)",
  "var(--color-digital-blue-700)",
  "var(--color-digital-blue-800)",
  "var(--color-digital-blue-900)",
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MantineProvider
        theme={{
          fontFamily: "var(--font-family-outfit)",
          headings: {
            fontFamily: "var(--font-family-zilla-semibold)",
          },
          colors: {
          digitalBlue,
        },
          primaryColor: "digitalBlue",
          primaryShade: 5,
          components: {
            Notification: {
              defaultProps: { color: "digitalBlue" },
            },
          },
          
        }}
      >
        <Notifications position='top-right' />
        <RouterProvider router={Router} />
      </MantineProvider>
  </React.StrictMode>
);
