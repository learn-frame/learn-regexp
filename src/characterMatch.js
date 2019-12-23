// 横向模糊匹配
// [ 'abc', 'abbc', 'abbbc', 'abbbbc' ]
console.log('abc abbc abbbc abbbbc abbbbbc'.match(/ab{1,4}c/g))

// 纵向模糊匹配
// [ 'a1c', 'a2c', 'a3c' ]
console.log('a1c a2c a3c a4c'.match(/a[123]c/g))

// 排除字符组
// [ 'AdB' ]
console.log('AaB AbB AcB AdB'.match(/A[^a-c]B/g))

// 非贪婪匹配
console.log('<main><div>test1</div>bb<div>test2</div><main/>'.match(/<div>.*<\/div>/g)) // [ '<div>test1</div>bb<div>test2</div>' ]
console.log('123 1234 12345 123456'.match(/\d{2,5}/g)) // [ '123', '1234', '12345', '12345' ]

// 贪婪匹配
console.log('<main><div>test1</div>bb<div>test2</div><main/>'.match(/<div>.*?<\/div>/g)) // [ '<div>test1</div>', '<div>test2</div>' ]
console.log('123 1234 12345 123456'.match(/\d{2,5}?/g)) // [ '12', '12', '34', '12', '34', '12', '34', '56' ]

console.log('goodbye, seishun.'.match(/good|goodbye/g))
