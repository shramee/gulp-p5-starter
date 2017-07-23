/**
 * Inits our p5 sketch
 * @param {p5} p P5 instance
 */
let initP5 = function (p) {

	let canvas, cW, cH;
	p.setup = function () {
		canvas = p.createCanvas( p.windowWidth, p.windowHeight, 'webgl' );
		canvas.parent( $('#canvas-wrap')[0] );
	};

	p.draw = function () {
		p.background( 7, 50 );
	};
};
let myp5 = new p5( initP5 );