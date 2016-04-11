/**
 *
 * webpack.config.
 *
 * @project     localhost_insta360
 * @datetime    18:22 - 15/9/10
 * @author      Thonatos.Yang <thonatos.yang@gmail.com>
 * @copyright   Thonatos.Yang <https://www.thonatos.com>
 *
 */

'use strict';

module.exports = {
    entry: {
        'public': './src/js/js-page/public.js',
        'retina': './src/js/js-page/retina.js',
        'user-signup': './src/js/js-page/user-signup.js',
        'user-login': './src/js/js-page/user-login.js',
        'user-binding': './src/js/js-page/user-binding.js',
        'user-channel': './src/js/js-page/user-channel.js',
        'user-edit': './src/js/js-page/user-edit.js',
        'user-profile': './src/js/js-page/user-profile.js',
        'user-getpassword': './src/js/js-page/user-getpassword.js',
        'index-index': './src/js/js-page/index-index.js',
    },
    output: {
        path: __dirname + "/public/js/dev",
        filename: '[name].js'
    }
};