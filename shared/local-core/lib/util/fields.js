export default fields => (...options) =>
    options.map(option => {
        let field;
        let fieldOptions;

        if (typeof option === 'string') {
            field = fields[option];
        } else {
            field = fields[option[0]];
            fieldOptions = option[1];
        }

        return Object.assign({}, field, fieldOptions);
    });
