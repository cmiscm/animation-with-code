var CMUtils = CMUtils || {};

/**
 * Get distance from x1,y1 to x2,y2
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
CMUtils.distance = function(x1, y1, x2, y2) {
    const a = (x2 - x1),
        b = (y2 - y1),
        distance = Math.sqrt(a * a + b * b);
    return distance;
};

/**
 * Get the fullscreen size for stageW, stageH
 * @param {number} stageW
 * @param {number} stageH
 * @param {number} imgW
 * @param {number} imgH
 * @return {!Object}
 */
CMUtils.getFullSize = function(stageW, stageH, imgW, imgH) {
    let sPer = stageW / stageH,
        imgPer = imgW / imgH,
        tw = stageW,
        th = stageH,
        tx = 0,
        ty = 0, scale;

    if (imgPer > sPer) {
        tw = (0.5 + (imgW * (stageH / imgH))) | 0;
        tx = (0.5 + ((stageW - tw) / 2)) | 0;
    } else {
        th = (0.5 + (imgH * (stageW / imgW))) | 0;
        if (stageW > stageH && imgH > (imgW * 1.2)) {
            ty = (0.5 + ((stageH - th) / 5)) | 0;
        } else {
            ty = (0.5 + ((stageH - th) / 2)) | 0;
        }
    }

    scale = tw / imgW;

    if (tx > 0) {
        tx = 0;
    } else if (tx < stageW - tw) {
        tx = stageW - tw;
    }

    if (ty > 0) {
        ty = 0;
    } else if (ty < stageH - th) {
        ty = stageH - th;
    }

    return {w: tw, h: th, x: tx, y: ty, scale: scale};
};

/**
 * Get the fit size for stageW, stageH
 * @param {number} stageW
 * @param {number} stageH
 * @param {number} imgW
 * @param {number} imgH
 * @return {!Object}
 */
CMUtils.getFitSize = function(stageW, stageH, imgW, imgH) {
    let sPer = stageW / stageH,
        imgPer = imgW / imgH,
        tw = stageW,
        th = stageH,
        tx = 0,
        ty = 0,
        scale;

    if (imgPer < sPer) {
        scale = stageH / imgH;
        tw = (0.5 + (imgW * scale)) | 0;
        tx = (0.5 + ((stageW - tw) / 2)) | 0;

    } else {
        scale = stageW / imgW;
        th = (0.5 + (imgH * scale)) | 0;
        ty = (0.5 + ((stageH - th) / 2)) | 0;
    }

    return {w:tw, h:th, x:tx, y:ty, scale:scale};
};

/**
 * Degrees to radians
 * @param {number} degrees
 * @return {number}
 */
CMUtils.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

/**
 * Radians to degrees
 * @param {number} radians
 * @return {number}
 */
CMUtils.degrees = function(radians) {
    return radians * 180 / Math.PI;
};

/**
 * Get the Int random value
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
CMUtils.randomInteger = function(low, high) {
    return (0.5 + (Math.random()*(high-low) + low)) | 0;
};

/**
 * Get a or b
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
CMUtils.randomTwo = function(a, b) {
    const R = Math.random();
    if (R < 0.5) return a;
    else return b;
};

/**
 * Get the Float random value
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
CMUtils.randomFloat = function(low, high) {
    return low + Math.random() * (high - low);
};

/**
 * Get the number in the total
 * @param {number} no
 * @param {number} total
 * @return {number}
 */
CMUtils.getInsideMax = function(no, total) {
    return (no + (total * (Math.abs((no / 10) | 0) + 1))) % total;
};

/**
 * Shuffle Array
 * @param {!Array} arr
 * @return {!Array}
 */
CMUtils.shuffle = function(arr) {
    return arr.sort(() => Math.random() - 0.5);
};

/**
 * Add Zeros
 * @param {number} num Number
 * @param {number} no Total zero
 * @return {string}
 */
CMUtils.addZeros = function(num, no) {
    let str = num.toString(),
        zero = "",
        len = str.length,
        total = no + 1;
    if (len < total) {
        let zeroTotal = total - len, i;
        for (i = 1; i <= zeroTotal; i++) {
            zero += "0";
        }
        str = zero + str;
    }
    return str;
};

/**
 * @param {number} cur
 * @param {number} top
 * @param {number} bottom
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
CMUtils.getCurrent = function(cur, top, bottom, min, max) {
    let value = (max - min) / (bottom - top) * (cur - top) + min;
    if (min < max) {
        if (value < min) {
            value = min;
        } else if (value > max) {
            value = max;
        }
    } else {
        if (value > min) {
            value = min;
        } else if (value < max) {
            value = max;
        }
    }
    return value;
};

/**
 * getWallPosition
 * @param {number} index
 * @param {number} xNum
 * @param {number} xGap
 * @param {number} yGap
 * @return {!Object}
 */
CMUtils.getWallPosition = function(index, xNum, xGap, yGap) {
    const TX = (index % xNum) * xGap,
        TY = ((index / xNum) | 0) * yGap;
    return {x: TX, y: TY};
};

/**
 * remove DOM element
 * @param {elem} DOM element
 */
CMUtils.removeDom = function(elem) {
    if (!elem) return;
    var parent = elem.parentNode;
    if (parent) parent.removeChild(elem);
};