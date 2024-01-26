import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../redux/store";

// const ErrorFallback = () => {
//   return (
//     <div
//       className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
//       role="alert"
//     >
//       <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
//       <Button
//         className="mt-4"
//         onClick={() => window.location.assign(window.location.origin)}
//       >
//         Refresh
//       </Button>
//     </div>
//   );
// };

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          Loading...
        </div>
      }
    >
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
      {/* <HelmetProvider> */}
      {/* <QueryClientProvider client={queryClient}> */}
      {/* {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />} */}
      {/* <AuthProvider> */}
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
      {/* </AuthProvider> */}
      {/* </QueryClientProvider> */}
      {/* </HelmetProvider> */}
      {/* </ErrorBoundary> */}
    </React.Suspense>
  );
};
