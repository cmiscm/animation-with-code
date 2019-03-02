class App {
    constructor() {
        this.$root_ = document.getElementById('root');

        this.sc_ = new StageController();
        this.sc_.addResize(this, this.resize_);

        this.model_ = new Model();

        this.raf_ = window.requestAnimationFrame(this.animate_.bind(this));
    }

    resize_() {
        const SW = this.sc_.stageWidth;
        const SH = this.sc_.stageHeight;

        console.log(SW, SH);
    }

    animate_(timestamp) {
        this.raf_ = window.requestAnimationFrame(this.animate_.bind(this));
    }
}

window.onload = () => {
    new App();
};
