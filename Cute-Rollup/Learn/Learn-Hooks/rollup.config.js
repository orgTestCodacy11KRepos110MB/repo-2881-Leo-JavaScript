import TestHooks from './test-hooks';
import myExample from './test-hooks-2';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    name: 'index'
  },
  plugins: [
    // TestHooks(),
    myExample(),
  ]
}