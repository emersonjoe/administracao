import $ from 'jquery';

const translate = $.i18n
    ? (key, filling) => {
          if (filling) {
              let message = $.i18n.prop(key);

              for (const searchKey in filling) {
                  if (filling.hasOwnProperty(searchKey)) {
                      const value = filling[searchKey];

                      message = message.replace(
                          new RegExp(`%${searchKey}%`, 'g'),
                          value
                      );
                  }
              }

              return message;
          }

          return $.i18n.prop(key);
      }
    : key => key;

export default translate;
