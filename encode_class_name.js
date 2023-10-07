// TODO : Ari
// ENCODE TAILWIND CLASS NAME to SORT NAME
// From tailwind_class_name.js if class name more than 7 characters
// EXAMPLE from our class bg-oc-primary-100 to c-abcdef1

import replace from 'replace-in-file'

import tailwindClassName from './tailwind_class_name.js'

const ourClassName = [
    'oc-primary-50-tr'
] 
// we can replace class name and variable name here

const encode_js = replace.sync({
    files: 'dist/assets/*.js',
    from: /oc-primary/g,
    to: 'a-b-c',
    countMatches: true,
});

const encode_css = replace.sync({
    files: 'dist/assets/*.css',
    from: /oc-primary/g,
    to: 'a-b-c',
    countMatches: true,
});

console.log('tailwindClassName :', tailwindClassName.length, ourClassName)
console.log('console :', encode_css, encode_js);
// tailwind class length 7606, random up to 7606 uniq char : example o-1234 
// ourClassName length ? , random up to ? uniq char : example c-[?]
