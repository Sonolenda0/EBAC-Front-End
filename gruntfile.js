module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css' : 'main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['*.less'],
                tasks: ['less:development']
            }
        },
        uglify: {
            target: {
                files: {
                    'scripts/main.min.js' : 'scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch', 'less', 'uglify']);
}

