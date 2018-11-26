myButton.addEventListener('click',function(){
//    let script = document.createElement('script')
//    script.src = '/xxx'
//    document.body.appendChild(script) 

let request = new XMLHttpRequest()
request.onreadystatechange = ()=>{
    if(request.readyState === 4){
        console.log('请求响应都完毕啦')
        if(request.status >= 200 && request.status < 300){
            console.log('说明请求成功')
            console.log(request.responseText)
            let string = request.responseText
            //把符合 JSON 语法的字符串,转换成 JS 对应的值
            let object = window.JSON.parse(string)
            // JSON.parse 这个函数是浏览器提供的
            // 就像 document.getElementById() 是浏览器提供的一样
            console.log(object)
            console.log('object.node')
            console.log(object.node)
            console.log('object.node.from')
            console.log(object.node.from)

        }else if(request.status >= 400){
            console.log('说明请求失败')
        }
    }
}
request.open('GET','http://jack.com:8002/xxx')//初始化 request 对象 请求方法可以随意写
request.send()

})
