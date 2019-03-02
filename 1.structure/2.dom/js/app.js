class App {
    constructor() {
        this.$root_ = document.getElementById('root');

        this.sc_ = new StageController();

        this.$ball_ = document.createElement('div');
        this.$ball_.className = 'ball';
        this.$root_.appendChild(this.$ball_);

        this.ballRadius_ = 90;
        this.centerX_ = 0;
        this.centerY_ = 0;
        this.counter_ = 0;
        this.speed_ = 0.1;

        this.sc_.addResize(this, this.resize_);

        this.raf_ = window.requestAnimationFrame(this.animate_.bind(this));
    }

    resize_() {
        this.sw_ = this.sc_.stageWidth;
        this.sh_ = this.sc_.stageHeight;

        this.centerX_ = this.sw_ / 2;
        this.centerY_ = this.sh_ / 2;
        this.gapY_ = this.sh_ / 4;
        this.$ball_.style.width = (this.ballRadius_ * 2) + 'px';
        this.$ball_.style.height = (this.ballRadius_ * 2) + 'px';
    }

    animate_(timestamp) {
        this.raf_ = window.requestAnimationFrame(this.animate_.bind(this));

        let tx = (this.centerX_ - this.ballRadius_);
        let ty = (this.centerY_ - this.ballRadius_);
        ty += (Math.sin(this.counter_) * this.gapY_);
        this.counter_ += this.speed_;

        this.$ball_.style.left = tx + 'px';
        this.$ball_.style.top = ty + 'px';
    }
}

window.onload = () => {
    new App();
};
