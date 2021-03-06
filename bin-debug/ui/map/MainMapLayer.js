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
     * 主线地图场景
     */
    var MainMapLayer = (function (_super) {
        __extends(MainMapLayer, _super);
        function MainMapLayer() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        /**
         * 初始化
         */
        MainMapLayer.prototype.init = function () {
            var mainMapFrame = new map.MapFight();
            var fightScean = new map.FightScane();
            fightScean.init(map.MapConst.fightSlot_X, map.MapConst.fightSlot_Y, 600, 600);
            mainMapFrame.addChild(fightScean);
            var moveItemLayer = new map.MoveBagItemLayer();
            moveItemLayer.init(map.MapConst.bg_width, map.MapConst.bg_height);
            //皮肤加载完成后调用
            mainMapFrame.addEventListener(egret.Event.COMPLETE, function (event) {
                map.MapCtl.initMap(mainMapFrame, fightScean, moveItemLayer);
            }, mainMapFrame);
            this.addChildAt(moveItemLayer, 10);
            this.addChildAt(mainMapFrame, 0);
        };
        MainMapLayer.prototype.getId = function () {
            return frame.FrameType.main_frame;
        };
        return MainMapLayer;
    }(frame.MapBaseLayer));
    map.MainMapLayer = MainMapLayer;
    __reflect(MainMapLayer.prototype, "map.MainMapLayer");
})(map || (map = {}));
//# sourceMappingURL=MainMapLayer.js.map