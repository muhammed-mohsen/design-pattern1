import Library from './creationalPatterns/proxy/Library';
import ProxyEbook from './creationalPatterns/proxy/ProxyEbook';
const fileNames = ['a', 'b', 'c'];
const library = new Library();
fileNames.forEach((fileName) => {
  library.add(new ProxyEbook(fileName));
});

library.openBook('a');
library.openBook('b');
