import fs from 'fs';
import parser from './parser';

const envFile = fs.readFileSync('./.env.example', { encoding: 'utf8' });
console.log(parser(envFile));
