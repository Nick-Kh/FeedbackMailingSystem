let config = null;

if(process.env.NODE_ENV === 'production') {
  config = await import('./prod.js');;
} else {
  config = await import('./dev.js');
}

export default config.default;