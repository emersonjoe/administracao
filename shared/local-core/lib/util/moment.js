import translate from 'visto-web-core/lib/util/translate';

import moment from 'moment-business-days';

const MomentUtils = {
    formatMoment(time, format) {
        switch (typeof time) {
            case 'string':
                return isNaN(time) ? time : moment(Number(time)).format(format);

            case 'number':
                return moment(time).format(format);
        }

        return '';
    },

    formatDate(time) {
        return this.formatMoment(
            time,
            translate('visto.global.formatter.pattern.date.moment')
        );
    },

    formatDateTime(time) {
        return this.formatMoment(
            time,
            translate('visto.global.formatter.pattern.datetime.moment')
        );
    },

    parseMoment(time, format) {
        return moment(time, format);
    },

    parseDate(time) {
        return this.parseMoment(
            time,
            translate('visto.global.formatter.pattern.date.moment')
        );
    },

    parseDateTime(time) {
        return this.parseMoment(
            time,
            translate('visto.global.formatter.pattern.datetime.moment')
        );
    },

    moment: moment
};

export default MomentUtils;
