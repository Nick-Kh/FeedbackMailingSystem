import devKeys from './dev.js';
import prodKeys from './prod.js';

let config = null;

if(process.env.NODE_ENV === 'production') {

} else {
  config = devKeys;
}

export default config;