function rotate(matrix, direction) {
    // Your code here
}

// Uncomment below for local tests
// let matrix1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let matrix2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12]
// ];

// let matrix3 = [
//     [1, 2, 3]
// ];

// let matrix4 = [
//     [1]
// ]

// console.log('Square Matrix:')
// console.log('   original:')
// matrix1.forEach(row => {
//     console.log('   ', row)
// })
// console.log('   clockwise:')
// rotate(matrix1, 'clockwise').forEach(row => {
//     console.log('   ', row)
// })
// console.log('   counter-clockwise:')
// rotate(matrix1, 'counter-clockwise').forEach(row => {
//     console.log('   ', row)
// })
// // Square Matrix:
// //     original:
// //     [1, 2, 3]
// //     [4, 5, 6]
// //     [7, 8, 9]
// //     clockwise:
// //     [7, 4, 1]
// //     [8, 5, 2]
// //     [9, 6, 3]
// //     counter - clockwise:
// //     [3, 6, 9]
// //     [2, 5, 8]
// //     [1, 4, 7]

// console.log('\n\n')

// console.log('More rows than columns:')
// console.log('   original:')
// matrix2.forEach(row => {
//     console.log('   ', row)
// })
// console.log('   clockwise:')
// rotate(matrix2, 'clockwise').forEach(row => {
//     console.log('   ', row)
// })
// console.log('   counter-clockwise:')
// rotate(matrix2, 'counter-clockwise').forEach(row => {
//     console.log('   ', row)
// })
// // More rows than columns:
// //     original:
// //     [1, 2, 3]
// //     [4, 5, 6]
// //     [7, 8, 9]
// //     [10, 11, 12]
// //     clockwise:
// //     [10, 7, 4, 1]
// //     [11, 8, 5, 2]
// //     [12, 9, 6, 3]
// //     counter - clockwise:
// //     [3, 6, 9, 12]
// //     [2, 5, 8, 11]
// //     [1, 4, 7, 10]

// console.log('\n\n')

// console.log('More columns than rows')
// console.log('   original:')
// matrix3.forEach(row => {
//     console.log('   ', row)
// })
// console.log('   clockwise:')
// rotate(matrix3, 'clockwise').forEach(row => {
//     console.log('   ', row)
// })
// console.log('   counter-clockwise:')
// rotate(matrix3, 'counter-clockwise').forEach(row => {
//     console.log('   ', row)
// })

// // More columns than rows
// //     original:
// //     [1, 2, 3]
// //     clockwise:
// //     [1]
// //     [2]
// //     [3]
// //     counter - clockwise:
// //     [3]
// //     [2]
// //     [1]

/*

Do not modify anything below here

*/

module.exports = rotate
