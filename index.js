const list = require('./list.js');

/** Adding functional for list */
class Countries {
    /** Class constructor */
    constructor() {
        this.list = list;
    }

    /**
     * Get code property name
     * @param {String} code String with code for validation
     * @returns {String|Null} String with code type name or NULL
     * @private
     */
    _codeType(code) {
        if (/^[a-zA-Z]{3}$/.test(code)) {
            return 'alpha3';
        }

        if (/^\d{3}$/.test(code)) {
            return 'numeric';
        }

        if (/^[a-zA-Z]{2}$/.test(code)) {
            return 'alpha2';
        }

        throw `Incorrect code`;
    }

    /**
     * Search country in list by country code
     * @param {String} code Code for search
     * @returns {{locale:String, name:String}|Null} Object with country data or NULL
     * @private
     */
    _search(code) {
        const self = this;
        try {
            const codeType = self._codeType(code);

            let i;
            for (i = 0; i < self.list.length; i++) {
                if (self.list[i][codeType].toLowerCase() === code.toLowerCase()) {
                    return self.list[i];
                }
            }

            throw `Not found`;
        } catch (error) {
            return null;
        }
    }

    /**
     * Validate country code exist
     * @param {String} code Country code for validation
     * @returns {boolean} True if code exist or False
     */
    validate(code) {
        return !!(this._search(code));
    }

    /**
     * Get country info if exist
     * @param {String} code Code for search
     * @returns {{country: String, alpha2: String, alpha3: String, numeric: String}|Null} Object with country data or
     *     NULL
     */
    get(code) {
        return this._search(code);
    }

    /**
     * Get array of codes by code names form arguments
     * @param {String|String[]} codes Code names
     * @returns {Array|null} Array of names of code or NULL
     */
    getCodeList(...codes) {
        const self = this;

        try {
            const names = [].concat(...codes)
                .reduce((codeNames, code) => {
                    if (!self.list[0][code]) {
                        throw `Incorrect name of code`;
                    }

                    if (codeNames.indexOf(code) === -1) {
                        codeNames.push(code);
                    }
                    return codeNames;
                }, []);

            const result = names.reduce((resArr, codeName) => {
                let i;
                for (i = 0; i < self.list.length; i++) {
                    if (resArr.indexOf(self.list[i][codeName]) === -1) {
                        resArr.push(self.list[i][codeName]);
                    }
                }
                return resArr;
            }, []);

            return result.length ? result : null;
        } catch (error) {
            return null;
        }
    }
}

module.exports = new Countries();
