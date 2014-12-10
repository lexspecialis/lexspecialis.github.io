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
            header: {
                src: [
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/yepnope/dist/yepnope-2.0.0.min.js'
                ],
                dest: '../static/header.js'
            },
            vendors: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/fastclick/lib/fastclick.js',
                    'bower_components/foundation/js/foundation.min.js',
                    'bower_components/foundation/js/foundation/foundation.topbar.js',
                    'bower_components/foundation/js/foundation/foundation.accordion.js',
                    'bower_components/foundation/js/foundation/foundation.interchange.js'
                ],
                dest: '../static/vendors.js'
            },
            content: {
                src: [
                    '../src/js/content.js'
                ],
                dest: '../static/content.js'
            }
        },

        uglify: {
            dist: {
                files: {
                    '../static/header.js': ['../static/header.js'],
                    '../static/vendors.js': ['../static/vendors.js'],
                    '../static/content.js': ['../static/content.js']
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
