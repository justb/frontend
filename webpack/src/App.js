import echarts from "echarts"
import React, { Component } from "react"
import { hot } from 'react-hot-loader'


class App extends Component {
	componentDidMount() {
			document.querySelector("#launch").style.display = "none"
		
	}
	render() {
		return <div>this is root</div>
	}
}

// export default hot(module)(App)
export default App
