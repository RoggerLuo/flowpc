# flow pc

每次editor/update/onchange事件都会修改两个参数,  

	global.flow.notSave  
	redux: saveStatus  
在这三个方法前面 ：
	
	moveup movedown  
	click  
	create  
都做了校验，如果发现是notSave则会先保存，再去执行操作，  
保存之后notSave就会为false


