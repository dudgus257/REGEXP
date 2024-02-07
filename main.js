const str = `
010-1234-5678
thegus257@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// const regexp = new RegExp('the', 'gi')
// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'aaa'))
// str = str.replace(regexp, 'aaa')
// console.log(str)

// const regexp = /\.$/gi

console.log(str.match(/\b\w{2,3}\b/g))
console.log(str.match(/\bf\w{1,}\b/g))

console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))