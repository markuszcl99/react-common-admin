import React, { lazy } from "react";
// import About from "@/views/About";
import Home from "@/views/Home";
import { Navigate } from "react-router-dom";
import Page1 from "@/views/page1";
import Page2 from "@/views/page2";
const About = lazy(() => import("../views/About"))
// 报错 A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.、
// 懒加载的模式组件的写法，外面需要加一层<React.Suspense fallback={<div>Loading...</div>}> <组件/> </React.Suspense>

// 组件抽取
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {/* 写活了的东西要加大括号 */}
        {comp}
    </React.Suspense>
)
const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path:"/",
        element: <Home/>,
        children:[
            {
                path:"/page1",
                element: <Page1/>
            },
            {
                path:"/page2",
                element: withLoadingComponent(<Page2/>)
            }
        ]
    }
    // {
    //     path:"/",
    //     element: <Navigate to="/home"/>
    // },
    // {
    //     path:"/home",
    //     element: <Home/>
    // },
    // {
    //     path:"/about",
    //     element: withLoadingComponent(<About/>)
    // }
]

export default routes;