import React, { lazy } from "react";
// import About from "@/views/About";
import Home from "@/views/Home";
import { Navigate } from "react-router-dom";
import Login from "@/views/Login";
import Page1 from "@/views/page1";
import Page2 from "@/views/page2";
import Page301 from "@/views/page301";
import Page302 from "@/views/page302";
import Page303 from "@/views/page303";
import Page401 from "@/views/page401";
import Page402 from "@/views/page402";
import Page5 from "@/views/page5";
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
    // 嵌套路由开始
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
            },
            {
                path:"/page3/page301",
                element: withLoadingComponent(<Page301/>)
            },
            {
                path:"/page3/page302",
                element: withLoadingComponent(<Page302/>)
            },
            {
                path:"/page3/page303",
                element: withLoadingComponent(<Page303/>)
            },
            {
                path:"/page4/page401",
                element: withLoadingComponent(<Page401/>)
            },
            {
                path:"/page4/page402",
                element: withLoadingComponent(<Page402/>)
            },
            {
                path:"/page5",
                element: withLoadingComponent(<Page5/>)
            }
        ]
    },
    {
        path:"/login",
        element: <Login/>
    },
    // 嵌套路由结束
    {
        path:"*",
        element:<Navigate to="/page1"/>
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