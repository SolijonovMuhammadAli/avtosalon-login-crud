import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { store } from "./states/store";
import { loading } from "./components/Loading/Loading";

const ErrorBoundry = lazy(() => import("./components/ErrorBoundry"));
const RouterApp = lazy(() => import("./RouterApp"));

function App() {
  return (
    <Suspense fallback={loading}>
      <Provider store={store}>
        <ErrorBoundry>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<RouterApp />} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundry>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Provider>
    </Suspense>
  );
}

export default App;
