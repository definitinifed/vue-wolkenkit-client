import wolkenkit from 'wolkenkit-client';

export default {
    install: function (Vue, options) {
        console.log('installing wolkenkit');
        console.log(options);
        if (!options.host) {
            throw new Error('Host is missing.');
        }
        if (!options.port) {
            throw new Error('Port is missing.');
        }
        if (!Vue.prototype.$state) {
            Vue.prototype.$state = 'notready';
        }
        // Vue.prototype.$api = {};
        // try {
        //     Vue.prototype.$api = wolkenkit.connect(
        //         {
        //             host: options.host,
        //             port: options.port
        //         })
        //         .then(wolk => {
        //             // Vue.prototype.$state = 'connected';
        //             Vue.prototype.$wolkclient = wolk;
        //             // wolk.on('connected', () => {
        //             //     Vue.prototype.$state = 'connected';
        //             //      = wolky;
        //             // });
        //             // wolk.on('disconnected', () => {
        //             //     Vue.prototype.$state = 'disconnected';
        //             //     Vue.prototype.$wolkclient = null;
        //             // });
        //         });
        // } catch (err) {
        //     throw err;
        // }
        Vue.prototype.$connectApi = connect;
        function connect(host, port) {
            console.log('connecting wolkenkit');
            try {
                return wolkenkit.connect(
                    {
                        host: options.host,
                        port: options.port
                    });
            } catch (err) {
                throw err;
            }
        }
    }
};
