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

// 多选分支
console.log('goodbye, seishun.'.match(/good|goodbye/g))

// 匹配 16 进制颜色
const hexRegExp = /\#[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/g
console.log('#ffbbad #Fc01DF #FFF #ffE skr 鸡你太美'.match(hexRegExp)) // [ '#ffbbad', '#Fc01DF', 'FFF', 'ffE' ]

// 匹配 24 小时时间
const timeRegExp = /^(0?[\d]|1[\d]|2[0-3]):(0?[\d]|[1-5][\d])$/
console.log(timeRegExp.test('23:59')) // true
console.log(timeRegExp.test('02:07')) // true
console.log(timeRegExp.test('2:7')) // true
console.log(timeRegExp.test('42:37')) // false

// 匹配日期
const dateRegExp = /^([\d]{4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][\d]|3[01])$/
console.log(dateRegExp.test('2019-03-08')) // true
console.log(dateRegExp.test('2019-3-2')) // true
console.log(dateRegExp.test('2019-3-92')) // false

// 匹配路径

const pathRegExp = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/
console.log(pathRegExp.test('F:\\study\\javascript\\regex\\regular expression.pdf')) // true
console.log(pathRegExp.test('F:\\study\\javascript\\regex\\')) // true
console.log(pathRegExp.test('F:\\study\\javascript')) // true
console.log(pathRegExp.test('F:\\')) // true

// 匹配 html 标签的 id 属性
const idRegExp = /id="[^"]*"/
console.log(idRegExp.test('<div id="container" class="main"></div>')) // true
