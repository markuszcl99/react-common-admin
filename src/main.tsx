import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式一般放在最前面
import "reset-css"
// UI框架的样式

// 全局样式
import "@/assets/styles/global.scss"
// 组件的样式
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import Router from "./router"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* 组件式写法 */}
    {/* <Router /> */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  
  </React.StrictMode>,
)
