function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing(line) {
  if (!line.length) {
    return 'There is nobody waiting to be served!'
  }
  return `Currently serving ${line.shift(name)}.`
}
function currentLine(line) {
   if (!line.length) {
     return 'The line is currently empty.'
   }
   var arr = [];
   for (let i = 0; i < line.length; i++) {
     arr.push(`${i}. ${line[i]}`)
   }
   return `The line is currently: ${arr.join(', ')}`
}