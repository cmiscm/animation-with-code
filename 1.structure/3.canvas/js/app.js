class App {
    constructor() {
        this.$root_ = document.getElementById('root');

        this.sc_ = new StageController();

        this.$canvas_ = document.getElementsByTagName('canvas')[0];
        this.ctx_ = this.$canvas_.getContext('2d');

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

        this.$canvas_.width = this.sw_;
        this.$canvas_.height = this.sh_;

        this.centerX_ = this.sw_ / 2;
        this.centerY_ = this.sh_ / 2;
        this.gapY_ = this.sh_ / 4;
    }

    animate_(timestamp) {
        this.raf_ = window.requestAnimationFrame(this.animate_.bind(this));

        let tx = this.centerX_;
        let ty = this.centerY_;
        ty += (Math.sin(this.counter_) * this.gapY_);
        this.counter_ += this.speed_;

        this.ctx_.clearRect(0, 0, this.sw_, this.sh_);

        this.ctx_.fillStyle = "#13887c";
        this.ctx_.beginPath();
        this.ctx_.arc(tx, ty, this.ballRadius_, 0, 2 * Math.PI);
        this.ctx_.fill();
    }
}

window.onload = () => {
    new App();
};
