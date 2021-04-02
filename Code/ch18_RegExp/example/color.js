let regexp = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

let colors = "#eee #etdfse #f1f1f1 #333";

let arr = colors.match(regexp);

console.log(arr);
// [ '#eee', '#f1f1f1', '#333' ]