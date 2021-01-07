import antlr4 from 'antlr4';
import MmLexer from './grammar/MmLexer.js';
import MmParser from './grammar/MmParser.js';
//import MmListener from './grammar/MmParserListener.js';
import ManuscriptManager from './js/ManuscriptManager.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs');

let fileName = process.argv[2] || 'input.mm';
fs.readFile(fileName, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);

  let fs = require('fs')
  // move removing after input read in
  const path = './tmp/'
  let regex = /[.](mp3|wav)$/
  fs.readdirSync(path)
    .filter(f => regex.test(f))
    .map(f => fs.unlinkSync(path + f));
  
  const input = data;
  const chars = new antlr4.InputStream(input);
  const lexer = new MmLexer(chars);
  const tokens  = new antlr4.CommonTokenStream(lexer);
  const parser = new MmParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.mm() // only repeated here for reference
  const manager = new ManuscriptManager();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(manager, tree);
});