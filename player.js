class Player {
    constructor() {
        this.y = height/2;
        this.x = 64;
        this.size = 64;
        this.gravity = 0.7;
        this.gravityFactor = 0.9;
        this.elevation = -12;
        this.yVelocity = 0;
        this.image = this.getImage();
    }

    render() {
        this.update();
        this.image.position(this.x, this.y);
    }

    update() {
        this.yVelocity += this.gravity;
        this.yVelocity *= this.gravityFactor;
        this.y += this.yVelocity;
    
        if (this.y > height - this.size) { // floor touch
            this.y = height - this.size;
            this.yVelocity = 0;
        }
    
        if (this.y < 0) { // ceiling touch
            this.y = 0;
            this.yVelocity = 0;
        }
    }
  
    up() {
         this.yVelocity += this.elevation;
    }

    getImage() {
        var result = createImg('assets/player.gif');
        result.size(this.size, this.size);

        return result;
    }
}