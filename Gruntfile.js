module.exports = function(grunt) {
  ['grunt-contrib-watch',
   'grunt-compile-handlebars',
   'grunt-contrib-concat',
   'grunt-contrib-uglify',
   'grunt-contrib-less',
   'grunt-contrib-clean',
   'grunt-shell'].forEach(grunt.loadNpmTasks);

  // Works but not a big fan
  function getConcatFilesOrder() {
    var maxFile = 20,
        fileOrder = [];

    for (var i = 0; i < maxFile; i++) {
      fileOrder[i] = 'templates/' + i + '_*.html';
    }
    return fileOrder;
  }

  function getPhantomCmd(lang) {
    return 'node_modules/phantomjs-prebuilt/bin/phantomjs cv/rasterize.js cv/arnaud_babol_' + lang + '.html cv/arnaud_babol_' + lang + '.pdf "827px*1169px"';
  }

  grunt.initConfig({
    watch: {
      handlebars: {
        files: ['templates/*.hbs', 'cv/*.hbs', 'resume.json', 'cv/css/*.css'],
        tasks: ['compile-handlebars', 'concat:html', 'clean:templates'],
        options: {
          interrupt: true
        }
      },
      less: {
        files: 'assets/styles/*.less',
        tasks: 'less'
      },
      js: {
        files: ['js/libs/*.js', 'js/*.js', '!js/bundle.min.js'],
        tasks: 'uglify'
      }
    },
    'compile-handlebars': {
      html: {
        template: 'templates/*.hbs',
        templateData: 'resume.json',
        output: 'templates/*.html'
      },
      cv: {
        template: 'cv/*.hbs',
        templateData: 'resume.json',
        output: 'cv/*.html'
      }
    },
    concat: {
      html: {
        src: getConcatFilesOrder(),
        dest: 'index.html',
      }
    },
    less: {
      production: {
        options: {
          cleancss: true,
          compress: true
        },
        files: {
          'assets/styles/bundle.min.css': ['assets/styles/*.less']
        }
      }
    },
    uglify: {
      production: {
        files: {
          'js/bundle.min.js': ['js/libs/*.js', 'js/*.js', '!js/bundle.min.js', '!js/libs/modernizr.min.js']
        }
      }
    },
    clean: {
      build: ["assets/styles/bundle.min.css", "js/bundle.min.js", "templates/*.html", "cv/*.html"],
      templates: "templates/*.html"
    },
    shell: {
      options: {
        stderr: false
      },
      cvEN: {
        command: getPhantomCmd('en')
      },
      cvENPhoto: {
        command: getPhantomCmd('en_photo')
      },
      cvFR: {
        command: getPhantomCmd('fr')
      }
    }
  });

  grunt.registerTask('build', ['uglify', 'less', 'compile-handlebars', 'concat', 'shell', 'clean:templates']);
  grunt.registerTask('dev', ['watch']);
};
