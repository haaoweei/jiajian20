const fs = require('fs');
const html = fs.readFileSync('C:/Users/Administrator/.codex/visualizations/2026/07/17/019f6d92-b409-7000-8264-28ef885971d7/math-adventure.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new Function(script);
console.log('JavaScript syntax OK');
