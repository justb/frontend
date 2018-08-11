import a from "./a"
import b from "./b"
import React, { Component } from "react"
import ReactDOM from "react-dom"
a()
b()

class Launcher extends Component {
	render() {
		return <div>this is launch</div>
	}
}
import('./App').then(App => ReactDOM.render(<App.default />, document.getElementById("root")))
ReactDOM.render(<Launcher />, document.getElementById("launch"))

// if (module.hot) {
//     module.hot.accept('./App', function(App) {
//       // 使用更新过的 library 模块执行某些操作...
//       ReactDOM.render(<App.default />, document.getElementById("root"))
//     })
//   }
