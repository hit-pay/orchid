// ONLY WORKING WITH UNIQUE CLASS NAME
// Class Name not used in Javascript Function or Variable

import replace from 'replace-in-file'

const ourColorName = [
    // text
    'oc-text-100',
    'oc-text-200',
    'oc-text-300',
    'oc-text-400',
    'oc-text-500',
    // bg
    'oc-bg-light',
    'oc-bg-dark',
    // orchid colors
    'oc-primary-50-tr',
    'oc-primary-50',
    'oc-primary-100',
    'oc-primary-200',
    'oc-primary-300',
    'oc-primary-400',
    'oc-primary-500',
    // accent 1
    'oc-accent-2-50-tr',
    'oc-accent-2-50',
    'oc-accent-2-100',
    'oc-accent-2-200',
    'oc-accent-2-300',
    'oc-accent-2-400',
    'oc-accent-2-500',
    // accent 2
    'oc-accent-3-50-tr',
    'oc-accent-3-50',
    'oc-accent-3-100',
    'oc-accent-3-200',
    'oc-accent-3-300',
    'oc-accent-3-400',
    'oc-accent-3-500',
    // dark blue 
    'oc-accent-1-50-tr',
    'oc-accent-1-50',
    'oc-accent-1-100',
    'oc-accent-1-200',
    'oc-accent-1-300',
    'oc-accent-1-400',
    'oc-accent-1-500',
    // gray
    'oc-gray-50',
    'oc-gray-100',
    'oc-gray-200',
    'oc-gray-300',
    'oc-gray-400',
    'oc-gray-500',
    'oc-gray-600',
    'oc-gray-700',
    'oc-gray-800',
    'oc-gray-900',
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

const replacedClassName = [

    'oc-btn-primary',
    'oc-btn-secondary',
    'oc-btn-error',
    // Tailwind Unique Class Name

    /* Justify Content */
    "justify-normal","justify-start","justify-end","justify-center","justify-between","justify-around","justify-evenly","justify-stretch",

     /* Justify Items */
    "justify-items-start","justify-items-end","justify-items-center","justify-items-stretch",
    
    /* Justify Self */
    "justify-self-auto","justify-self-start","justify-self-end","justify-self-center","justify-self-stretch",
    
    /* Align Content */
    "content-normal","content-center","content-start","content-end","content-between","content-around","content-evenly","content-baseline","content-stretch",
    
    /* Align Items */
    "items-start","items-end","items-center","items-baseline","items-stretch",
]

ourColorName.forEach((color) => {
    // TAILWIND UTILITY PREFIX CLASS
    replacedClassName.push('bg-' + color)
    replacedClassName.push('text-' + color)
    replacedClassName.push('text-decoration-' + color)
    replacedClassName.push('ring-' + color)
    replacedClassName.push('ring-offset-' + color)
    replacedClassName.push('outline-' + color)
    replacedClassName.push('devide-' + color)
    replacedClassName.push('border-' + color)
    replacedClassName.push('from-' + color)
    replacedClassName.push('to-' + color)
    replacedClassName.push('via-' + color)
    replacedClassName.push('caret-' + color)
    replacedClassName.push('accent-' + color)
    replacedClassName.push('shadow-' + color)
})


console.log('obsucator unique string length :',replacedClassName.length)

const uniqChar = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

let uniqClassName = [] // up to 10656

uniqChar.forEach(char => {
    uniqClassName.push('o-' + char)
    uniqClassName.push('r-' + char)
    uniqClassName.push('c-' + char)
    uniqClassName.push('h-' + char)
    uniqClassName.push('i-' + char)
    uniqClassName.push('d-' + char)
    uniqClassName.push('u-' + char)
    uniqClassName.push('i-' + char)
    uniqChar.forEach((char2) => {
        uniqClassName.push('o-' + char + '' + char2)
        uniqClassName.push('r-' + char + '' + char2)
        uniqClassName.push('c-' + char + '' + char2)
        uniqClassName.push('h-' + char + '' + char2)
        uniqClassName.push('i-' + char + '' + char2)
        uniqClassName.push('d-' + char + '' + char2)
        uniqClassName.push('u-' + char + '' + char2)
        uniqClassName.push('i-' + char + '' + char2)
    })
});


replacedClassName.forEach((className, index) => {
    let to = `${uniqClassName[index]}`
    let from = new RegExp(className, 'gi')
    replace.sync({
        files: 'dist/assets/*.js',
        from: from,
        to: to,
        countMatches: true,
    });
    replace.sync({
        files: 'dist/assets/*.css',
        from: from,
        to: to,
        countMatches: true,
    });
})
