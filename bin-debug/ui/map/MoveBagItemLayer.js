var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var map;
(function (map) {
    /**
     * 滑动背包的道具到战斗场景中
     */
    var MoveBagItemLayer = (function (_super) {
        __extends(MoveBagItemLayer, _super);
        function MoveBagItemLayer() {
            return _super.call(this) || this;
        }
        /**
         * 初始化
         */
        MoveBagItemLayer.prototype.init = function (bgWidth, bgHeight) {
            this.graphics.beginFill(0, 0);
            this.graphics.drawRect(0, 0, bgWidth, bgHeight);
            this.graphics.endFill();
            this.touchEnabled = false;
            //this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,Services.getMapService().moveFightBagBegin,this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, Services.getMapService().moveFightBagMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, Services.getMapService().moveBagItemEnd, this);
        };
        return MoveBagItemLayer;
    }(egret.Sprite));
    map.MoveBagItemLayer = MoveBagItemLayer;
    __reflect(MoveBagItemLayer.prototype, "map.MoveBagItemLayer");
})(map || (map = {}));
//# sourceMappingURL=MoveBagItemLayer.js.map