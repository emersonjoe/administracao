import $ from 'jquery';

const cache = {};

const getCsrf = () =>
    new Promise(resolve => {
        const tryToGet = () => {
            const csrfHeader = document.querySelector(
                'meta[name="_csrf_header"]'
            ).content;
            const csrf = document.querySelector('meta[name="_csrf"]').content;

            if (!csrf) {
                setTimeout(() => tryToGet(), 100);
                return;
            }

            resolve({ csrfHeader, csrf });
        };

        tryToGet();
    });

const WebAPI = {
    ajax(options) {
        return getCsrf().then(({ csrfHeader, csrf }) => {
            return new Promise((resolve, reject) =>
                $.ajax(
                    Object.assign(
                        {
                            method: 'GET'
                            //contentType: 'application/json; charset=UTF-8',
                            //  beforeSend: xhr => {
                            //      xhr.setRequestHeader(csrfHeader, csrf);
                            //  }
                        },
                        options
                    )
                ).then(
                    (data, textStatus, xhr) =>
                        resolve({
                            url: options.url,
                            data: data,
                            textStatus: textStatus,
                            getResponseHeader: xhr.getResponseHeader
                        }),
                    (xhr, textStatus, errorThrown) => {
                        if (xhr.status === 401) {
                            location.reload();
                        }

                        return reject({
                            url: options.url,
                            textStatus: textStatus,
                            errorThrown: errorThrown,
                            xhr: xhr
                        });
                    }
                )
            );
        });
    },

    isCached(key) {
        if (!cache.hasOwnProperty(key)) {
            return false;
        }

        const item = cache[key];

        if (item.expires < Date.now()) {
            this.purge(key);
            return false;
        }

        return true;
    },

    getCached(key) {
        return cache[key].payload;
    },

    setCacheItem(key, payload, expires = Date.now() + 1000) {
        cache[key] = { payload, expires };

        return payload;
    },

    purge(key) {
        if (Array.isArray(key)) {
            return key.forEach(k => Reflect.deleteProperty(cache, k));
        }

        return Reflect.deleteProperty(cache, key);
    }
};

export default api => Object.assign({}, WebAPI, api);
