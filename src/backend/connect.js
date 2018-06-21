// import state from './state';
import wolkenkit from 'wolkenkit-client';

const connect = async function ({state, host, port}) {
  if (host === undefined) {
    throw new Error('Host is missing.');
  }
  if (port === undefined) {
    throw new Error('Port is missing.');
  }

  let api;

  try {
    api = await wolkenkit.connect({ host, port });
  } catch (ex) {
    state.error = 'Lost connection to the backend.';
    state.isConnected = false;

    return;
  }
  state['api'] = api;

  api.on('disconnected', () => {
    state.isConnected = false;
    state.error = 'Lost connection to the backend.';
  });
};

export default connect;
