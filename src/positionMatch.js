console.log('hello, world.'.replace(/^|$/g, '🔞')) // 🔞hello, world.🔞

// 🎄Merry🎄
// 🎄Christmas.🎄
console.log('Merry\nChristmas.'.replace(/^|$/gm, '🎄'))

console.log('[JS] Lesson_01.mp4'.replace(/\b/g, '#')) // [#JS#] #Lesson_01#.#mp4#

console.log('[JS] Lesson_01.mp4'.replace(/\B/g, '#')) // #[J#S]# L#e#s#s#o#n#_#0#1.m#p#4
