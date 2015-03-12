/**
 * Copy Task
 * ===============================
 */
/*jshint node:true, camelcase:false */
module.exports = {
    //dev only
    js: {
        expand: true,
        cwd: '<%= paths.assets %>/javascripts/',
        //exclude specs and config files
        src: ['**/*.js', '!**/*.{spec,conf}.js'],
        dest: '<%= paths.js %>/'
    },
    images: {
        expand: true,
        cwd: '<%= paths.assets %>/images/',
        src: '**/*.{png,jpg,gif,svg,webp}',
        dest: '<%= paths.images %>/'
    },
    fonts: {
        expand: true,
        cwd: '<%= paths.assets %>/fonts/',
        src: '**/*.{eot,svg,ttf,woff,woff2}',
        dest: '<%= paths.fonts %>/'
    },
    media: {
        expand: true,
        cwd: '<%= paths.assets %>/media/',
        src: '**/*.*',
        dest: '<%= paths.media %>/'
    }
};