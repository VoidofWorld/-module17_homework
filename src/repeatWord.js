export function repeatWord(word, count) {
    let result = [];
    
    for (let i = 1; i <= count; i++) {
        result.push(word);
    }
    
    return result.join(', ');
}