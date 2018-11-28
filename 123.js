
    let request = new XMLHttpRequest()
    request.open('GET','http://jack.com/xxx')
    request.send()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            console.log('说明请求已经结束啦')
            if(request.status >=200 && request.status < 300){
                console.log('请求成功')
                console.log('request.responseText')
                let string = request.responseText
                let object = window.JSON.parse(string)
            }else if(request.status >= 400){
                console.log('请求失败')
            }
        }
    }
