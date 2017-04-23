const {
  about
} = require('../website/static/resume.json');

module.exports = function(grunt) {
  ['grunt-contrib-watch',
   'grunt-compile-handlebars',
   'grunt-contrib-clean',
   'grunt-shell'].forEach(grunt.loadNpmTasks);

   const resumeJSONFile = '../website/static/resume.json'

  function getPhantomCmd(lang) {
    return `node_modules/phantomjs-prebuilt/bin/phantomjs ./rasterize.js ./cv_${lang}.html ../website/static/${about.cvName}_${lang}.pdf "827px*1169px"`;
  }

  grunt.initConfig({
    watch: {
      handlebars: {
        files: ['./*.hbs', resumeJSONFile, './css/*.css'],
        tasks: ['compile-handlebars', 'clean:templates'],
        options: {
          interrupt: true
        }
      },
    },
    'compile-handlebars': {
      cv: {
        template: './*.hbs',
        templateData: resumeJSONFile,
        output: './*.html'
      }
    },
    clean: {
      build: ["./*.html"],
      templates: "templates/*.html"
    },
    shell: {
      options: {
        stderr: false
      },
      // cvEN: {
      //   command: getPhantomCmd('en')
      // },
      cvENPhoto: {
        command: getPhantomCmd('en_photo')
      }
    }
  });

  grunt.registerTask('build', ['compile-handlebars', 'shell', 'clean:templates']);
  grunt.registerTask('dev', ['watch']);
};
