module.exports = function(grunt)
{
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.initConfig({
	compile_dir: 'build',
    src: {
      dropfrenzy: ['js/boot.js','js/PreLoader.js','js/Menu.js','js/Levels.js','js/Game.js','js/GameOver.js']
	  },
	pkg: grunt.file.readJSON('package.json'),
	clean: ['<%= compile_dir %>'],
	concat: {
			dropfrenzy: {
				options: {
					process: {
						data: {
						version: '<%= pkg.version %>',
						buildDate: '<%= grunt.template.today() %>'
						}
					},
					banner: '/*! DropFrenzy v<%= pkg.version %> | (c) 2013 Oscar Morales. */\n'
        },
        src: ['<%= src.dropfrenzy %>'],
        dest: '<%= compile_dir %>/dropfrenzy.js'
      }
    },
	umd: {
      dropfrenzy: {
        src: '<%= concat.dropfrenzy.dest %>',
        dest: '<%= umd.dropfrenzy.src %>'
      }
    },
	uglify: {
      dropfrenzy: {
        options: {
          banner: '/*! DropFrenzy v<%= pkg.version %> | (c) 2013 Oscar Morales. */\n'
        },
        src: ['<%= concat.dropfrenzy.dest %>'],
        dest: '<%= compile_dir %>/dropfrenzy.min.js'
      }
    },
	connect: {
       root: {
        options: {
          keepalive: true
        }
      }
    }
    
  });
  
  grunt.registerTask('default', ['clean','concat','uglify']);

  
};