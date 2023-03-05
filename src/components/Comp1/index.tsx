// import "./comp1.scss" // 全局引入

// 模块化引入
import styles from "./comp1.module.scss"

function Comp(){
    return (
        <div className={styles.box}>
            <p>这是Comp1的内容</p>
        </div>
    )
}
export default Comp