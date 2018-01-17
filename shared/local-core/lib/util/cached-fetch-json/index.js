import fetch from 'isomorphic-fetch';
import decorate from './decorate';

export { decorate };
export default decorate(fetch);
