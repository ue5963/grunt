module.exports = function(grunt) {

  grunt.initConfig({

    // sass: {                              // Task
    //   dist: {                            // Target
    //     options: {                       // Target options
    //       style: 'expand'              // nested, expanded, compact, compressed
    //     },
    //     files: {                         // Dictionary of files
    //       'style.css': 'style.scss'      // 'destination': 'source'
    //     }
    //   }
    // },

    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          outputStyle: 'expanded'
        }
      }
    },

    coffee: {
      compile: {
        files: [{ expand: true,
                  cwd: 'coffee/',
                  src: '*.coffee',
                  dest: 'js/',
                  ext: '.js'
                }]
        }
    },

    watch: {
      css: {
        files: [ 'sass/*.scss', 'coffee/*.coffee'],
        //tasks: ['sass']
        tasks: ['compass', 'coffee']
      }
    },

    // brower
    browserSync: {
        server: {
            bsFiles: {
                src : [
                    'css/*.css',  // localhost からの相対パス
                    'js/*.js',    // localhost からの相対パス
                    'html/*.html' // localhost からの相対パス
                ]
            },
            options: {
                debugInfo: false,
                watchTask: true, // 編集されたらbrowserもリロード
                ghostMode: {
                    scroll: true,
                    links: false,
                    forms: true
                },
                https: true,
                server: {
                    baseDir: ["./"] // ルートとなるディレクトリを指定 ここにindex.htmlが必要
                }//,
                /*ports: { // portを任意に変更する
                    min: 2000,
                    max: 2100
                }*/
            }
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

 // grunt.registerTask('default', [ 'watch' ]);
  grunt.registerTask('default', [ "browserSync", 'watch' ]);

}