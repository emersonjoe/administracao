export default {
    localeCompareSort(collection, key) {
        return collection.sort((c0, c1) => {
            if (!c0[key] || !c1[key]) {
                return false;
            }

            return c0[key]
                .toLocaleLowerCase()
                .localeCompare(c1[key].toLocaleLowerCase());
        });
    }
};
