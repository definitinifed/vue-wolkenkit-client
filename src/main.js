import wolkenkit from 'wolkenkit-client';

export default {
    install: async function (Vue, options) {
        if (options.host) {
            throw new Error('Host is missing.');
        }
        if (options.port) {
            throw new Error('Port is missing.');
        }
        if (Vue.prototype.$state) {
            Vue.prototype.$state = 'notready';
        }
        Vue.prototype.$api = {};
        try {
            Vue.prototype.$api = await wolkenkit.connect(
                {
                    host: options.host,
                    port: options.port
                });
            Vue.prototype.$api.on('disconnected', () => {
                Vue.prototype.$state = 'notconnected'
            })
        } catch (err) {
            throw err;
        }
    }
};
