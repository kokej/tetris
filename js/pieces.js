var p = [];

var Piece = function(){
	this.width = tileW;
	this.height = tileH;
	this.color = "yellow";
	this.xo = Random(0, tilesX)*this.width;
	this.yo = 0;
	this.x = this.xo;
	this.y = this.yo;
	this.moving = true;
	this.left = false; 
	this.right = false;
}

Piece.prototype = {
	autoMove: function(obj) {
		console.log("automove");
		//debugger;
		if(obj.getStart()){
			if(this.moving){
				this.y = this.y + this.height;
			}
		}
	}, 
	draw: function() {

		//render piece function
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.width,this.height);
	},
	move: function(obj, e) {
		if(obj.getStart()){
			console.log("move");
			//keyboard controls if piece is moving
			if(this.moving){
				switch (e.keyCode) {

					case 40: //arrow down
						this.y = this.y + this.height;
						console.log("down");
						break;

					case 39: //arrow right
						if(!this.right){
							this.x = this.x + this.width;
						}
						break;

					case 37: //arrow left
						if(!this.left){
							this.x = this.x - this.width;
						}
						break;

				}
			}
		}

	},
	getCell: function() {

		//gettter method to get cell where piece is
		var x = this.x;
		var y = this.y;

		return bgs.filter(function(obj){
			return obj.x == x && obj.y == y ;	
		});

	},
	checkEndRows: function() {

		//get cell where piece is
		var cell = this.getCell()[0];

		//check if piece is at borders and stop keyboard controls if so
		if(cell.x <= 0){
			this.left = true;
		} else if(cell.x >= ctxW-tileW){
			this.right = true;
		} else {
			this.left = this.right = false;
		}

		//check if piece reached bottom 
		if(cell.full){
			if(this.moving){
				var id = cell.id-tilesX;
				
				//generate new piece and attach listeners to it
				var n = new Piece;
				p.push(n);
				$body.addEventListener("keydown", n.move.bind(n, game));
				setInterval(n.autoMove.bind(n, game), 1000);
				
				//stop piece movement
				this.moving = false;
				
				//get above cell 
				var a = bgs.filter(function(obj){
					return obj.id == id;	
				});
				if(a==undefined){
					alert("game over");
				} else{
					//above cell set to full
					a[0].full = true;
				}

			}
		}
	}

}