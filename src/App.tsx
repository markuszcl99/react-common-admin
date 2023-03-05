import { useState } from 'react'
import {Outlet,useRoutes,Link} from "react-router-dom"
import router from "./router"

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)

  return (
    <div className="App">
      {/* <Link to="/home">Home</Link> | 
      <Link to="/about">About</Link> */}
      {/* 占位符组件 类似于窗口 组件写法*/}
      {/* <Outlet></Outlet> */}
      {/* 新方式的写法 */}
      {outlet}
    </div>
  )
}

export default App
