//Task 1
function stringLength(string) {
    return string.length;
}

//Task 2
function reverseString(string){
    return string.split('').reverse().join('');
}

test('works', ()=>{
    expect(stringLength('1')).toBe(1);
    expect(reverseString('123')).toBe('321');
})