import sum from './calc.js';
import Heading from './components/heading.js';

console.log('Testando o webpack!');
sum(2,4);
sum(10,20);

// Loaders
const heading = new Heading();
heading.create('Titulo dinâmico');
heading.create('Titulo dinâmico2');