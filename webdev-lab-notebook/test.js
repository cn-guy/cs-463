const people = ['mother', 'father', 'parent', 'son', 'daughter', 'child', 'children']
const has_child = (family_list) => family_list.includes('child')
const has_letter_x = (family_list) => family_list.includes('x')

console.log(people.some(has_child))
console.log(people.some(has_letter_x))