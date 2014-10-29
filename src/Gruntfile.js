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

        concat: {
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/foundation/js/foundation.js',
                    'bower_components/foundation/js/foundation/foundation.topbar.js',
                ],
                dest: '../static/script.js'
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['sass', 'concat', 'watch']);
};
