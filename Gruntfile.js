module.exports = function(grunt) {
  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: ["output"]
		},
		svgmin: {
			files: {
				'/svgs/': '/svgs/'
				// 'destination': 'source'
			}

		},
		grunticon: {
			myIcons: {
				options: {
					src: "svgs/",
					dest: "output/"
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['svgmin', 'grunticon']);
};
