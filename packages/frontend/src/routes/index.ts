import { useRoutes } from "react-router-dom";

// import { Landing } from "@/features/misc";
// import { useAuth } from "@/lib/auth";

import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";

export const AppRoutes = () => {
    // const auth = useAuth();

    // const commonRoutes = [{ path: "/", element: <Landing /> }];

    // const routes = auth.user ? protectedRoutes : publicRoutes;

    const element = useRoutes([...routes, ...commonRoutes]);

    return <>{element}</>;
};
