window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}
window.jQuery.ajax = function (url, method, body, successFn, failFn) {
    let request = new XMLHttpRequest()
    request.open(method, url)//初始化 request 对象 请求方法可以随意写
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
               successFn.call(undefined,request.responseText) 
            } else if (request.status >= 400) {
               failFn.call(undefined,request) 
            }
        }
    }
    request.send(body)

}

window.$ = window.jQuery

myButton.addEventListener('click', function () {
    window.jQuery.ajax(
        '/xxx',
        'POST',
        'a=1&b=2', //null/undefined
        (responseText)=>{console.log(1)},
        (request)=>{console.log(2)})
        //这种形式是非常傻的,比如是get方法,往往没有第四部分,但是它的位置已经限制死啦,
        //就必须用 null/undefined 占位置,失败函数不想要,还得用 null/undefined 占位置
        //非常不灵活
        // 最好传一个有结构的参数,  所以是数组,只有数组才有结构嘛
})
