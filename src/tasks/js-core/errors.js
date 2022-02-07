const errorsTasks = {
    safeSyncWrapper(fn) {
        return function() {
            try {
                fn.call(this, arguments.slice());
            } catch (err) {

            } finally {

            }
        };
    },

    safeAsyncWrapper(fn) {
        return function() {
            return new Promise((resolve, reject) => {
                fn.call(this, arguments.slice()).then((result) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                }).finally(() => {

                });
            });
        }
    }
};