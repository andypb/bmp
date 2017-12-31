/**
 * Created by andyb on 09/10/2016.
 */
(function() {
    'use strict';
    angular.module('bestmanplanApp')
        .controller('WeddingCtrl', ['$log', function($log) {
            var self = this;
            self.myInterval = 5000;
            self.noWrapSlides = false;
            self.active = 0;
            var slides = self.slides = [];
            var photos = ['rob_umberella.jpg','men_in_blue.jpg','group_church.jpg','ring.jpg','singing.jpg','family.jpg','threlthy.jpg','tina.jpg',
                'bestman.jpg','rob_speech.jpg','rob_speech2.jpg','bestman_speech.jpg','cutting_cake.jpg','cutting_cake_argue.jpg','confetti.jpg',
                'first_dance.jpg', 'wall_sit.jpg', 'walk.jpg'];
            var currIndex = 0;

            self.addSlides = function () {
                //var newWidth = 600 + slides.length + 1;
                for (var i=0; i < photos.length; i++) {
                    slides.push({
                        // http://lorempixel.com/400/200/food
                        //image: '//unsplash.it/' + newWidth + '/300',
                        image: 'images/' + photos[i],
                        //image: 'http://lorempixel.com/400/200/',
                        text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
                        id: i
                    });
                }
                //$log.info('slides=' + slides);
            };

            self.randomize = function () {
                var indexes = generateIndexesArray();
                assignNewIndexesToSlides(indexes);
            };

            self.addSlides();

            // for (var i = 0; i < photos.length; i++) {
            //     self.addSlide();
            // }

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
}());
