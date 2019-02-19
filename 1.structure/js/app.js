class App {
    constructor() {
        this.$root_ = document.getElementById('root');

        this.sc_ = new StageController();
        this.model_ = new Model();

        this.raf_ = window.requestAnimationFrame(this.animate_.bind(this));
    }

    animate_(timestamp) {
        this.raf_ = window.requestAnimationFrame(this.animate_.bind(this));
    }
}

window.onload = () => {
    new App();
};
