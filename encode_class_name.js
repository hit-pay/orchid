// TODO : Ari
// ENCODE TAILWIND CLASS NAME to SORT NAME
// From tailwind_class_name.js if class name more than 7 characters
// EXAMPLE from our class bg-oc-primary-100 to c-abcdef1

import replace from 'replace-in-file'

const encode_js = replace.sync({
    files: 'dist/assets/*.js',
    from: /oc-btn-primary/g,
    to: 'a-b-c',
    countMatches: true,
});

const encode_css = replace.sync({
    files: 'dist/assets/*.css',
    from: /oc-btn-primary/g,
    to: 'a-b-c',
    countMatches: true,
});

console.log('console :', encode_css, encode_js);