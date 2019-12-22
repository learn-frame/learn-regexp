// 横向模糊匹配
// [ 'abc', 'abbc', 'abbbc', 'abbbbc' ]
console.log('abc abbc abbbc abbbbc abbbbbc'.match(/ab{1,4}c/g))

// 纵向模糊匹配
// [ 'a1c', 'a2c', 'a3c' ]
console.log('a1c a2c a3c a4c'.match(/a[123]c/g))

// 排除字符组
// [ 'AdB' ]
console.log('AaB AbB AcB AdB'.match(/A[^a-c]B/g))
