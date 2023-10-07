// TODO : Ari
// ENCODE TAILWIND CLASS NAME to SORT NAME
// From tailwind_class_name.js if class name more than 7 characters
// EXAMPLE from our class bg-oc-primary-100 to c-abcdef1

import replace from 'replace-in-file'

// import tailwindClassName from './tailwind_class_name.js'

const ourColorName = [
    // orchid colors
    'oc-primary-50-tr',
    'oc-primary-50',
    'oc-primary-100',
    'oc-primary-200',
    'oc-primary-300',
    'oc-primary-400',
    'oc-primary-500',
    // accent 1
    'oc-accent-1-50-tr',
    'oc-accent-1-50',
    'oc-accent-1-100',
    'oc-accent-1-200',
    'oc-accent-1-300',
    'oc-accent-1-400',
    'oc-accent-1-500',
     // accent 2
     'oc-accent-2-50-tr',
     'oc-accent-2-50',
     'oc-accent-2-100',
     'oc-accent-2-200',
     'oc-accent-2-300',
     'oc-accent-2-400',
     'oc-accent-2-500',
      // grey
      'oc-grey-50',
      'oc-grey-100',
      'oc-grey-200',
      'oc-grey-300',
      'oc-grey-400',
      'oc-grey-500',
      'oc-grey-600',
      'oc-grey-700',
      'oc-grey-800',
      'oc-grey-900',
       // success
      'oc-success-50-tr',
      'oc-success-50',
      'oc-success-100',
      'oc-success-200',
      'oc-success-300',
      'oc-success-400',
      'oc-success-500',
       // warning
       'oc-warning-50-tr',
       'oc-warning-50',
       'oc-warning-100',
       'oc-warning-200',
       'oc-warning-300',
       'oc-warning-400',
       'oc-warning-500',
        // error
        'oc-error-50-tr',
        'oc-error-50',
        'oc-error-100',
        'oc-error-200',
        'oc-error-300',
        'oc-error-400',
        'oc-error-500',
] 

const ourClassName = []

ourColorName.forEach((color) => {
    ourClassName.push('bg-'+color)
    ourClassName.push('text-'+color)
    ourClassName.push('text-decoration-'+color)
    ourClassName.push('ring-'+color)
    ourClassName.push('ring-offset-'+color)
    ourClassName.push('outline-'+color)
    ourClassName.push('devide-'+color)
    ourClassName.push('border-'+color)
    ourClassName.push('from-'+color)
    ourClassName.push('to-'+color)
    ourClassName.push('via-'+color)
    ourClassName.push('caret-'+color)
    ourClassName.push('accent-'+color)
    ourClassName.push('shadow-'+color)
})

const uniqChar = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

let uniqClassName = [] // up to 10656
uniqChar.forEach(char => {
    uniqClassName.push('o-'+char)
    uniqClassName.push('r-'+char)
    uniqClassName.push('c-'+char)
    uniqClassName.push('h-'+char)
    uniqClassName.push('i-'+char)
    uniqClassName.push('d-'+char)
    uniqClassName.push('u-'+char)
    uniqClassName.push('i-'+char)
    uniqChar.forEach((char2) => {
        uniqClassName.push('o-'+char+''+char2)
        uniqClassName.push('r-'+char+''+char2)
        uniqClassName.push('c-'+char+''+char2)
        uniqClassName.push('h-'+char+''+char2)
        uniqClassName.push('i-'+char+''+char2)
        uniqClassName.push('d-'+char+''+char2)
        uniqClassName.push('u-'+char+''+char2)
        uniqClassName.push('i-'+char+''+char2)
    })
});



// we can replace class name and variable name here

ourClassName.forEach((className, index) => {
    replace.sync({
        files: 'dist/assets/*.js',
        from: new RegExp(className, 'gi'),
        to: `${uniqClassName[index]}`,
        countMatches: true,
    });
    replace.sync({
        files: 'dist/assets/*.css',
        from: new RegExp(className, 'gi'),
        to: `${uniqClassName[index]}`,
        countMatches: true,
    });
})

// console.log(ourClassName)

//  tailwindClassName.forEach((className, index) => {
//     replace.sync({
//         files: 'dist/assets/*.js',
//         from: `${className}`,
//         to: `${uniqClassName[index]}`,
//         countMatches: true,
//     });
// })




// console.log('uniqClassName :', uniqClassName.length, uniqClassName)
// console.log('tailwindClassName :', tailwindClassName.length, ourClassName)
// tailwind class length 7606, random up to 7606 uniq char : example oc-1 to oc-9999 
// ourClassName length ? , random up to ? uniq char : example oc-a to oc-z
