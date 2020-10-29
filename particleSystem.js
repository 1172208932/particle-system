;Hilo.ParticleSystem = (function(){
	var Bitmap = Hilo.Bitmap;
	var Container = Hilo.Container;
	var Class = Hilo.Class;
	var View = Hilo.View;
	var Drawable = Hilo.Drawable;

	var props = ['x', 'y', 'vx', 'vy', 'ax', 'ay', 'rotation', 'rotationV', 'scale', 'scaleV', 'alpha', 'alphaV', 'life', 'gx', 'gy'];
	var PROPS = [];
	props.forEach(function(p){
		PROPS.push(p);
		PROPS.push(p + "Var");
	});

	var PROPS_DEFAULT = {
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		ax: 0,
		ay: 0,
		scale:1,
		scaleV:0,
		alpha:1,
		alphaV:0,
		rotation: 0,
		rotationV: 0,
		life: 1,
		gx: 0,
		gy: 0		
	};

	var diedParticles = [];

	var Particle = Class.create({
		Extends:View,
		constructor:function Particle0(properties){
			this.id = this.id || properties.id || Hilo.getUid("Particle");
			Particle.superclass.constructor.call(this, properties);
			this.init(properties);
		},
		onUpdate: function(dt) {
			dt *= .001;
			if(this.died){
				return;
			}
			var ax = this.ax + this.gx;
			var ay = this.ay + this.gy;

			this.vx += ax * dt;
			this.vy += ay * dt;
			this.x += this.vx * dt;
			this.y += this.vy * dt;

			this.rotation += this.rotationV;

			if (this.time > .0) {
				this.alpha += this.alphaV;
			}

			this.scale += this.scaleV;
			this.scaleX = this.scaleY = this.scale;

			this.time += dt;
			if (this.time >= this.life || this.alpha < 0) {
				this.destroy();
			}
		},
		setImage: function(img, frame) {
			this.drawable = this.drawable||new Drawable();
			var frame = frame || [0, 0, img.width, img.height];

			this.width = frame[2];
			this.height = frame[3];
			this.drawable.rect = frame;
			this.drawable.image = img;
		},
		destroy: function() {
			this.died = true;
			this.removeFromParent();
			diedParticles.push(this);
		},
		init: function(cfg) {
			this.died = false;
			this.time = 0;
			this.alpha = 1;
			for (var i = 0, l = PROPS.length; i < l; i++) {
				var p = PROPS[i];
				var v = cfg[p] === undefined ? PROPS_DEFAULT[p] : cfg[p];
				this[p] = getRandomValue(v, cfg[p + 'Var']);
			}

			if(this.life <= 0){
				this.life = Infinity;
			}

			if (cfg.image) {
				var frame = cfg.frame;
				if(frame && KISSY.isArray(frame[0])){
					frame = frame[(Math.random() * frame.length) >> 0];
				}
				this.setImage(cfg.image, frame);
			}
		},
		Statics:{
			create:function(cfg) {
				if (diedParticles.length > 0) {
					var particle = diedParticles.pop();
					particle.init(cfg);
					return particle;
				} else {
					return new Particle(cfg);
				}
			}
		}

	});

	function getRandomValue(value, variances){
		return variances ? value + (Math.random() - .5) * 2 * variances : value;
	}

	/*
	 * properties:{
	 * 		particle:{
	 * 	},
	 * 	emitTime:1,
	 *	emitNum:4,
	 	runTime:2
	 *	}
	 */
	var ParticleSystem = Hilo.Class.create({
		Extends:Hilo.Container,
		constructor:function ParticleSystem0(properties){
			this.id = this.id || properties.id || Hilo.getUid("ParticleSystem");
	    	ParticleSystem.superclass.constructor.call(this, properties);
			this.init(properties);
		},
		Statics:{
			PROPS:PROPS,
			PROPS_DEFAULT:PROPS_DEFAULT
		},
		init: function(cfg) {

			this.time = 0;
			this.runTime = 0;
			this.totalTime = cfg.totalTime > 0?cfg.totalTime:Infinity;
			this.isRun = false;
			
			this.emitNum = cfg.emitNum || 10;
			this.emitNumVar = cfg.emitNumVar||0;
			
			this.emitTime = cfg.emitTime || .2;
			this.emitTimeVar = cfg.emitTimeVar || 0;
			
			this.particleCfg = cfg.particle;
		},
		onUpdate: function(dt) {
			dt *= .001;
			if (this.isRun) {
				this.runTime += dt;
				this.time += dt;
				if (this.time >= this._emitTime) {
					this.time = 0;
					this._emitTime = getRandomValue(this.emitTime, this.emitTimeVar);
					this.emit();
				}

				if (this.runTime >= this.totalTime) {
					this.stop();
				}
			}
		},
		emit: function() {
			var num = getRandomValue(this.emitNum, this.emitNumVar)>>0;
			for (var i = 0; i < num; i++) {
				this.addChild(Particle.create(this.particleCfg));
			}
		},
		start: function() {
			this.stop(true);
			this.time = 0;
			this.runTime = 0;
			this.isRun = true;
			this._emitTime = getRandomValue(this.emitTime, this.emitTimeVar);
		},
		stop: function(clear) {
			this.isRun = false;
			if (clear) {
				for (var i = this.children.length - 1; i >= 0; i--) {
					this.children[i].destroy();
				}
			}
		}
	});

	return ParticleSystem;
})();