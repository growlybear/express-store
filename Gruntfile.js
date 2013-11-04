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
          outputStyle: 'nested',
          noLineComments: true,
          require: 'zurb-foundation'
        }
      },

      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'public/stylesheets',
          outputStyle: 'compact',
          noLineComments: true,
          require: 'zurb-foundation',
          environment: 'production'
        }
      },

      // bower set up for foundation with icons
      // cf. https://gist.github.com/xseignard/5663623
      foundation: {
        options: {
          sassDir: 'public/components/foundation/scss',
          cssDir: 'public/stylesheets/foundation'
        }
      },

      icons: {
        options: {
          sassDir: 'public/components/foundation-icons/foundation_icons_general/sass',
          cssDir: 'public/stylesheets/foundation'
        }
      },

      social: {
        options: {
          sassDir: 'public/components/foundation/foundation-icons/foundation_icons_social/sass',
          cssDir: 'public/stylesheets/foundation'
        }
      }
    },

    copy: {
      foundation: {
        files: [{
          expand: true,
          flatten: true,
          src: [
            'public/components/foundation-icons/foundation_icons_general/fonts/*',
            'public/components/foundation-icons/foundation_icons_social/fonts/*'
          ],
          dest: 'public/stylesheets/foundation/fonts'
        }]
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

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('foundation-dev', [
    'compass:foundation', 'compass:icons', 'compass:social', 'copy:foundation'
  ]);

  grunt.task.run('compass:dev');

};
