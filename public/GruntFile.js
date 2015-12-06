module.exports = function(grunt) {
  
grunt.initConfig({
    compass: {
        dist: {
            options: {
                config: 'config.rb',
                'output-style': 'compressed'
            }
        },
        dev: {
            options: {
                config: 'config.rb',
                'output-style': 'expanded',
                watch: true
            }
        }
    },
    requirejs: {
        compile: {
            options: {
                baseUrl: "bower_components/",
                mainConfigFile: "js/main.js",
                include: "../js/main",
                name: "almond/almond",
                out: "js/main.min.js",
                preserveLicenseComments: false
            }
        }
    },
    clean: {
        css: ['css']
    },
    bower: {
        install: {
            options: {
                targetDir: './bower_components'
            }
        }
    }
  });

  // Displays the elapsed execution time of grunt tasks
  require('time-grunt')(grunt);

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bower-task');

  // Tasks
  grunt.registerTask('default', ['clean:css','bower:install', 'compass:dev']);

  grunt.registerTask('dist', ['clean:css','compass:dist', 'requirejs:compile']);


};