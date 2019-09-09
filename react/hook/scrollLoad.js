import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const getScrollTop = function() {
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0
    if (document.body) {
        bodyScrollTop = document.body.scrollTop
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop
    }
    scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop
    return scrollTop
}
//文档的总高度
const getScrollHeight = function() {
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight
    }
    scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight
    return scrollHeight
}
const getWindowHeight = function() {
    var windowHeight = 0
    if (document.compatMode == 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight
    } else {
        windowHeight = document.body.clientHeight
    }
    return windowHeight
}
const scrollToTop = function() {
    if (document.body) {
        document.body.scrollTop = 0
    }
    if (document.documentElement) {
        document.documentElement.scrollTop = 0
    }
}
const isBot = function() {
    return getScrollTop() + getWindowHeight() >= getScrollHeight() - 300
}
const isTop = function() {
    return getScrollTop() === 0
}

class App extends Component {
    state = {}
    refreshDataStart = () =>
        new Promise(res =>
            setTimeout(() => {
                console.log('this.refreshDataStart()')
                res(true)
            }, 300)
        )
    getData = () =>
        new Promise(res =>
            setTimeout(() => {
                console.log('this.getData(): ', 'this.getData()')
                res(true)
            }, 300)
        )
    componentDidMount() {
        let distance
        let hasInsert = false
        let hasInsertBottom = false
        let isBottom = false
        let isTop = false
        //如果是顶部或者底部才会有distance
        window.ontouchstart = e => {
            if (document.documentElement.scrollTop < 300 && document.body.scrollTop < 300) {
                isTop = true
                distance = e.changedTouches[0].pageY
            }
            if (isBot()) {
                isBottom = true
                distance = e.changedTouches[0].pageY
            }
            console.log(document.documentElement.scrollTop, distance)
        }
        window.ontouchmove = e => {
            console.log(e.changedTouches[0].pageY - distance)
            // if (e.changedTouches[0].pageY - distance < 0 && !isTop) {
            //   distance = undefined
            // }
            // if (e.changedTouches[0].pageY - distance > 0 && !isBottom) {
            //   distance = undefined
            // }
            if (e.changedTouches[0].pageY - distance > 20 && !hasInsert && isTop) {
                this.setState({ hasInsert: true })
                hasInsert = true
            }
            if (e.changedTouches[0].pageY - distance < -20 && !hasInsert && isBottom) {
                this.setState({ hasInsertBottom: true })
                hasInsertBottom = true
            }
        }
        window.ontouchend = async e => {
            if (hasInsert || hasInsertBottom) {
                distance = undefined
                if (hasInsert) {
                    await this.refreshDataStart()
                } else {
                    await this.getData()
                }
                hasInsert = false
                hasInsertBottom = false
                isBottom = isTop = false
                this.setState({ hasInsert: false, hasInsertBottom: false })
            }
        }
    }
    render() {
        const { hasInsert, hasInsertBottom } = this.state
        return (
            <React.Fragment>
                {hasInsert ? <div>下拉刷新</div> : null}
                <div>
                    {new Array(100).fill(0).map((_, index) => (
                        <div key={index}>1</div>
                    ))}
                </div>
                {hasInsertBottom ? <div>456</div> : '上滑加载更多'}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
