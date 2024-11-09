import React from "react"
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom"
import router from "@settings/router"
import store from "@settings/store"
import { Provider } from "react-redux"
import "@settings/assets/css/main.css"

// Function to render React components
const renderSettingsPage = () => {
  const root = createRoot(document.getElementById('olena-food-ordering-settings'));

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

// Call the render function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderSettingsPage)