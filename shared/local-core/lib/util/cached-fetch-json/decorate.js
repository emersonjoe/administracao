const cache = () => {
    const memory = {};

    return {
        get(key) {
            const item = memory[key];

            if (!item || item.expire < Date.now()) {
                Reflect.deleteProperty(memory, key);
                return null;
            }

            return item.value;
        },

        set(key, value, ttl) {
            memory[key] = { expire: Date.now() + ttl, value };
        }
    };
};

const _checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    if (response.status === 401) {
        location.reload();
    }

    const error = new Error(response.statusText);

    error.response = response;
    throw error;
};

const _fetchJson = (fetch, url, options) => () =>
    fetch(url, options).then(_checkStatus).then(response => response.json());

const _cacheResult = (cacheOptions = {}, key) => obj => {
    if (cacheOptions.cacheResult) {
        cache.set(key, obj, cacheOptions.cacheTtl);
    }
    return obj;
};

const _defaultOptions = {
    method: 'get',
    credentials: 'same-origin',
    cacheOptions: {
        cacheResult: true,
        cacheTtl: 3000
    }
};

// Decora um fetch (whatwg-fetch): tratando respostas, convertendo pra json e
// cacheando os resultados
const decorate = (fetch, defaultOptions = _defaultOptions) => {
    const fn = (url, options) => {
        const opts = Object.assign({}, defaultOptions, options);

        // Só faz sentido cachear a resposta se for um http get
        if (opts.method.toLowerCase() === 'get') {
            const cachedResult = cache.get(url);

            if (typeof cachedResult !== 'undefined') {
                return Promise.resolve(cachedResult);
            }
            return Promise.resolve()
                .then(_fetchJson(fetch, url, opts))
                .then(_cacheResult(opts.cacheOptions, url));
        }
        return Promise.resolve().then(_fetchJson(fetch, url, opts));
    };

    fn.__cache__ = cache;
    return fn;
};

export default decorate;
