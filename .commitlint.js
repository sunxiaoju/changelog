/*
 * Copyright By ZATI
 * Copyright By 3a3c88295d37870dfd3b25056092d1a9209824b256c341f2cdc296437f671617
 * All rights reserved.
 *
 * If you are not the intended user, you are hereby notified that any use, disclosure, copying, printing, forwarding or
 * dissemination of this property is strictly prohibited. If you have got this file in error, delete it from your system.
 */

/*
 * @Author: xiaoju.sun
 * @Date: 2021-04-05 21:42:30
 * @LastEditors: xiaoju.sun
 * @LastEditTime: 2021-04-05 21:43:27
 * @Description: 
 */

module.exports = Object.assign({}, require('jimi-web-changelog/lib/lint'), {
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always',
      [
        '新功能',
        '修复',
        '文档'
      ],
    ]
  }
});
