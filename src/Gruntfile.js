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

        watch: {
            css: {
                files: 'scss/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'watch']);
};
