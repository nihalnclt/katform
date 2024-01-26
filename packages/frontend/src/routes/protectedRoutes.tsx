import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { FormBuilderPage } from "../features/formBuilder";

// const { Users } = lazyImport(() => import("@/features/users"), "Users");

// const App = () => {
//     return (
//         <MainLayout>
//             <Suspense
//                 fallback={
//                     <div className="h-full w-full flex items-center justify-center">
//                         <Spinner size="xl" />
//                     </div>
//                 }
//             >
//                 <Outlet />
//             </Suspense>
//         </MainLayout>
//     );
// };

export const protectedRoutes = [
  // {
  //     path: "/app",
  //     element: <App />,
  //     children: [
  //         { path: "/discussions/*", element: <DiscussionsRoutes /> },
  //         { path: "/users", element: <Users /> },
  //         { path: "/profile", element: <Profile /> },
  //         { path: "/", element: <Dashboard /> },
  //         { path: "*", element: <Navigate to="." /> },
  //     ],
  // },
  {
    path: "/forms/:id/edit",
    element: <FormBuilderPage />,
  },
];
