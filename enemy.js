class Enemy {
    constructor() {
        this.spacing = 175;
        this.top = random(height / 6, 3 / 4 * height);
        this.bottom = height - (this.top + this.spacing);
        this.x = width;
        this.w = 70;
        this.speed = 6;
        this.highlight = false;
    }
  
    hits(bird) {
        if ( // collision
            (bird.y < this.top || bird.y > height - this.bottom)
            && (bird.x > this.x && bird.x < this.x + this.w)
        ) {
            this.highlight = true;
            return true;
        }

        this.highlight = false;
        return false;
    }
    
    render() {
        this.x -= this.speed;
        
        noStroke();
        if (!this.highlight) 
            fill(255);
        else
            fill(255, 0, 0);

        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    }
    
    offscreen() {
        return this.x < -this.w;
    }
}