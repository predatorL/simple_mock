## cmd curl
>curl -h来查看请求参数的含义
>     -v 显示请求的信息
>     -X 选项指定其它协议
```yml
 get:
     curl -v 192.168.33.1:8080/girls/age/18
 post:
     curl -v 192.168.33.1:8080/girls -d 'age=14&cupSize=C'
     curl -v -X POST 192.168.33.1:8080/girls -d 'age=14&cupSize=C'
 put:
     curl -v -X PUT -d "age=19&cupSize=C" 192.168.33.1:8080/girls/3
 delete:
     curl -v -X DELETE 192.168.33.1:8080/girls/3
```
## borwser fetch
```js
fetch('/aaaa/asdas?test=232', {
	method: 'POST',
	headers: {
    	'Content-Type': 'application/json;charset=UTF-8'
  	},
	body: JSON.stringify({111: 22})
})
.then(res => res.json())
.then(data => {console.log(data)})
```
