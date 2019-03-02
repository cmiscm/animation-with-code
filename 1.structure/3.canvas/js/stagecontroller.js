class StageController {
    constructor() {
        this.uid_ = 0;
        this.resizeFnArr_ = [];
        this.stageWidth = 0;
        this.stageHeight = 0;

        window.addEventListener('resize', this.onResize.bind(this), false);

        if (window.DeviceOrientationEvent) {
            window.addEventListener('orientationchange', this.onResize.bind(this), false);
        }

        this.onResize();
    }

    addResize(elm, fn) {
        const UID = this.getUniqueId_(elm),
            INDEX = this.resizeFnArr_.findIndex(i => i.id == UID);
        if (INDEX == -1) {
            this.resizeFnArr_.push({id:UID, fn:fn, elm:elm});
            fn.call(elm);
        }
    }

    removeResize(elm) {
        const UID = this.getUniqueId_(elm),
            INDEX = this.resizeFnArr_.findIndex(i => i.id == UID);
        if (INDEX > -1) {
            this.resizeFnArr_.splice(INDEX, 1);
        }
    }

    onResize(e) {
        let sw = document.body.clientWidth,
            sh = document.body.clientHeight;

        if (this.stageWidth == sw && this.stageHeight == sh) {
            return;
        }

        this.stageWidth = sw;
        this.stageHeight = sh;

        let i = this.resizeFnArr_.length;
        while (i--) {
            let tt = this.resizeFnArr_[i];
            tt.fn.call(tt.elm);
        }
    }

    getUniqueId_(elm) {
        return elm.__uniqueID || (elm.__uniqueID = 'uniqueID__' + this.uid_++);
    }
}