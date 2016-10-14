/**
 * Created by andyb on 09/10/2016.
 */
//(function() {
    'use strict';
    angular.module('bestmanplanApp')
        .controller('WeddingCtrl', ['$log', function ($log) {
            var self = this;
            self.myInterval = 5000;
            self.noWrapSlides = false;
            self.myActive = 0;
            var slides = self.slides = [];
            var currIndex = 0;

            self.addSlide = function () {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    // http://lorempixel.com/400/200/food
                    //image: '//unsplash.it/' + newWidth + '/300',
                    //image: 'images/radacina_men_in_black.svg.hi.png',
                    image: 'http://lorempixel.com/400/200/',
                    text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
                    id: currIndex++
                });
                $log.info('slides=' + slides);
                $log.info('Hello');
            };

            self.randomize = function () {
                var indexes = generateIndexesArray();
                assignNewIndexesToSlides(indexes);
            };

            for (var i = 0; i < 4; i++) {
                self.addSlide();
            }

            // Randomize logic below

            function assignNewIndexesToSlides(indexes) {
                for (var i = 0, l = slides.length; i < l; i++) {
                    slides[i].id = indexes.pop();
                }
            }

            function generateIndexesArray() {
                var indexes = [];
                for (var i = 0; i < currIndex; ++i) {
                    indexes[i] = i;
                }
                return shuffle(indexes);
            }

            // http://stackoverflow.com/questions/962802#962890
            function shuffle(array) {
                var tmp, current, top = array.length;

                if (top) {
                    while (--top) {
                        current = Math.floor(Math.random() * (top + 1));
                        tmp = array[current];
                        array[current] = array[top];
                        array[top] = tmp;
                    }
                }
                return array;
            }
        }]);
//}());
