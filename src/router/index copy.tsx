// 组件式的写法
import App from "@/App"
import About from "@/views/About"
import Home from "@/views/Home"
import { BrowserRouter, Route, Routes ,Navigate} from "react-router-dom"
// 两种路由模式的组件： BrowserRouter（History模式），HashRouter（Hash模式）
// const baseRouter= () =>{ return() } 可简写为下面方式（如果有逻辑就采用return）
const baseRouter= () =>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                {/* 配置用户访问 / 的时候 重定向到home */}
                <Route path="/" element={<Navigate to="/home"/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter;