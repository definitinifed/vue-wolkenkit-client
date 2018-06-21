import connect from './connect';
import disconnect from './disconnect';
import reconnect from './reconnect';
import state from './state';

export default {
  state,
  disconnect,
  reconnect,
  init: async function (conf) {
    if (!conf.host) {
      throw new Error('conf.host missing');
    }
    if (!conf.port) {
      throw new Error('conf.port missing');
    }
    state.status = 'connecting';
    await connect({state: state, host: conf.host, port: conf.port});
    state.status = 'ready';
  }
};
