module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['jquery.livequery.js']
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                preserveComments: 'some',
                report: 'gzip'
            },
            build: {
                src: 'jquery.livequery.js',
                dest: 'jquery.livequery.min.js'
            }
        },
        connect: {
            server: {
                options: {
                    hostname: '*',
                    keepalive: true,
                    middleware: function(connect, options) {
                        return [
                            connect.static(options.base),
                            connect.directory(options.base)
                        ];
                    }
                }
            }
        }
    });

    // Load the plugin that provides the 'uglify' task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify']);

};
