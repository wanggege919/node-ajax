window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}
window.jQuery.ajax = function (options) {//函数名一般叫 options
    let url 
    if(arguments.lkength === 1){
        url = arguments[0]
    }else if(arguments.length === 2){
        url = arguments[0]
        options = arguments[1]
    }//如何在 options 里面传两种不同类型的参数
    let method = options.method
    let body = options.body
    let successFn = options.successFn
    let failFn = options.failFn
    let headers = options.headers
    

    let request = new XMLHttpRequest()
    request.open(method, url)//初始化 request 对象 请求方法可以随意写
    for(let key in headers){
        let value = headers[key]
        request.setRequestHeader(key,value)//每次取到一组key value ,就设置一下
    }//for in 遍历key value
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
function f1(){}
function f2(){}

myButton.addEventListener('click', function () {
    let obj = { //给参数命名,在 js 中若是想给参数 选项命名, 一般用这种方法
        url: '/xxx',
        method: 'get',
        headers: {
            'content-type': 'x-www-form-urlencoded',
            'wanggege': '18'
        },//设置 header
        successFn: (x)=>{//回调函数 callback
            f1.call(undefined,x)//成功时执行两个函数,依次调用即可
            f1.call(undefined,x)
        },
        failFn: (x)=>{
            console.log(x)
        }
    }
    window.jQuery.ajax(obj)
        
})
