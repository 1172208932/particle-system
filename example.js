var starCfg = {
    "emitTime": 0.1,
    "emitNum": 10,
    "totalTime": 0,
    "x": 275,
    "id": "star",
    "particle": {
        "gy": 500,
        "gyVar": 100,
        "x": 0,
        "y": 400,
        "scale": 0.3,
        "scaleVar": 0.4,
        "vy": -550,
        "vxVar": 100,
        "angleV": 0,
        "angleVVar": 0.2,
        "axVar": 150,
        "life": 0,
        "alphaV": -0.005,
        "pivotX": 22.5,
        "pivotY": 24,
        "xVar": 0,
        "frame": [
            [
                0,
                0,
                45,
                48
            ]
        ],
        "scaleV": 0.001
    }
};

var smokeCfg = {
    "emitTime": 0.1,
    "emitNum": 8,
    "totalTime": 0,
    "x": 275,
    "id":"texture",
    "particle": {
        "gy": 100,
        "gyVar": 100,
        "x": 0,
        "y": -20,
        "scale": 2.88,
        "scaleVar": 0.4,
        "vy": 400,
        "vxVar": 100,
        "angleV": 0,
        "angleVVar": 0.2,
        "axVar": 150,
        "life": 0,
        "alphaV": -0.01,
        "pivotX": 16,
        "pivotY": 16,
        "xVar": 0,
        "scaleV": 0.08,
        "alpha": 0.6201,
        "vx": 800,
        "ax": -2200
    }
};

var fireCfg = {
	emitTime: .01,
	emitNum: 2,
	totalTime: 5,
	x:canvasWidth * .5,
	y:-50,
	id:"fire",
	particle:{
		frame:[
			[75, 236, 7, 11],
			[119, 223, 7, 17],
			[90, 223, 22, 17],
			[51, 202, 17, 46],
			[94, 59, 34, 59],
			[60, 160, 34, 42],
			[30, 99, 30, 99],
			[7, 240, 7, 11],
			[119, 206, 7, 17],
			[90, 206, 22, 17],
			[111, 160, 17, 46],
			[60, 59, 34, 59],
			[94, 118, 34, 42],
			[30, 0, 30, 99],
			[68, 236, 7, 11],
			[112, 223, 7, 17],
			[68, 219, 22, 17],
			[94, 160, 17, 46],
			[94, 0, 34, 59],
			[60, 118, 34, 42],
			[0, 99, 30, 99],
			[0, 240, 7, 11],
			[112, 206, 7, 17],
			[68, 202, 22, 17],
			[34, 198, 17, 46],
			[60, 0, 34, 59],
			[0, 198, 34, 42],
			[0, 0, 30, 99]
		],
		scale:.8,
		gy: 200,
		gyVar: 200,
		x: 0,
		y: 0,
		vy: 200,
		rotationV: 0,
		rotationVVar: 3,
		axVar: 300,
		xVar: canvasWidth * .5,
		life: 0,
		alphaV: -.02,
		scaleVar:.1
	}
};

var snowCfg = {
    "emitTime": 0.01,
    "emitNum": 2,
    "totalTime": 0,
    "x": 275,
    "y": -50,
    "id":"texture",
    "particle": {
        "frame": [
            [
                0,
                0,
                32,
                32
            ]
        ],
        "scale": 0.8,
        "gy": 200,
        "gyVar": 200,
        "x": 0,
        "y": 0,
        "vy": 200,
        "rotationV": 0,
        "rotationVVar": 3,
        "axVar": 50,
        "xVar": 400,
        "life": 0,
        "alphaV": -0.01,
        "scaleVar": 0.1,
        "ax": -13.09,
        "alphaVVar": 0.005
    }
};

var mouseCfg = {
    "emitTime": 0.01,
    "emitNum": 4,
    "totalTime": 0,
    "x": 275,
    "id": "texture",
    "particle": {
        "gy": 100,
        "gyVar": 100,
        "x": 0,
        "y": 400,
        "scale": 0.6,
        "scaleVar": 0.4,
        "vy": -400,
        "vxVar": 100,
        "angleV": 0,
        "angleVVar": 0.2,
        "axVar": 150,
        "life": 0,
        "alphaV": -0.01,
        "pivotX": 22.5,
        "pivotY": 24,
        "xVar": 0,
        "frame": [
            [
                0,
                0,
                32,
                32
            ]
        ],
        "scaleV": 0.05
    }
};

var mouseCfg2 = {
    "emitTime": 0.016,
    "emitNum": 10,
    "totalTime": 0,
    "x": 275,
    "id": "texture",
    "particle": {
        "gy": 1000,
        "gyVar": 2600,
        "x": 0,
        "y": 275.05,
        "scale": 0.4,
        "scaleVar": 0.4,
        "vy": -400,
        "vxVar": 100,
        "angleV": 0,
        "angleVVar": 0.2,
        "axVar": 150,
        "life": 0,
        "alphaV": -0.01,
        "pivotX": 22.5,
        "pivotY": 24,
        "xVar": 0,
        "frame": [
            [
                0,
                0,
                32,
                32
            ]
        ],
        "scaleV": 0.1,
        "alpha": 0.3,
        "vx": 800,
        "ax": -2800,
        "alphaVar": 0.1,
        "alphaVVar": 0.005,
        "scaleVVar": 0.05
    }
}