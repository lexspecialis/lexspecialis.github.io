module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                options: {
                    lineNumbers: true,
                    loadPath: ['bower_components/foundation/scss']
                },
                files: {
                    '../static/style.css': 'scss/style.scss'
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    '../static/style.css': ['../static/style.css']
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/fastclick/lib/fastclick.js',
                    'bower_components/foundation/js/foundation.min.js',
                    'bower_components/foundation/js/foundation/foundation.topbar.js',
                    'bower_components/foundation/js/foundation/foundation.accordion.js',
                    'bower_components/foundation/js/foundation/foundation.interchange.js'
                ],
                dest: '../static/script.js'
            }
        },

        uglify: {
            dist: {
                files: {
                    '../static/modernizr.js': ['bower_components/modernizr/modernizr.js'],
                    '../static/script.js': ['../static/script.js']
                }
            }
        },

        watch: {
            css: {
                files: 'scss/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify', 'watch']);
};
