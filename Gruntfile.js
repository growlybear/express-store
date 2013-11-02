'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // compile sass files into css
    compass: {
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'public/stylesheets',
          outputStyle: 'compact',
          require: 'zurb-foundation'
        }
      }
    },

    // watch changes on these files
    watch: {
      server: {
        files: ['sass/**/*.scss'],
        tasks: ['compass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.task.run('compass:dev');

};
