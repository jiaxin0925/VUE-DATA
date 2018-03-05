/**
 * 
 * @authors heinan
 * @email hei-nan@hotmail.com
 * @date    2018-02-01 16:23:11
 * @discribe 
 */

class Dialog {
    //构造函数
    constructor(title = "标题党", content = "今天是美好的第一天!") {
        //es5
        // this.title = title || "标题党";
        // this.content = content || "今天是美好的第一天!";
        // es6
        this.title = title;
        this.content = content;
        this.init();
    }
    //实例方法
    init() {
        this.createWrap();
    }
    addEvent() {
        let span = document.querySelectorAll(".float-right")[0];
        let btn = document.querySelectorAll(".success")[0];
        // let _this = this;
        // span.addEventListener("click", function() {
        // 	_this.hide();
        // });
        //箭头函数的指向对象本身
        span.addEventListener("click", (event) => {
            this.hide();
        });
        btn.addEventListener("click", (event) => {
            this.hide();
        });
    }
    show() {

    }
    hide() {
        let oDiv = document.querySelectorAll(".dialog")[0];
        oDiv.style.display = "none";
    }
    createButton(txt, cls) {
        let btn = document.createElement("button");
        btn.innerHTML = txt;
        btn.className = cls
        return btn;
    }
    createTitle() {
        let ol = document.createElement("ol");
        let span = document.createElement("span");

        ol.className = "dialog-title";
        ol.innerHTML = this.title;
        span.className = "float-right mr15";
        span.innerHTML = "X";
        ol.append(span);
        return ol;
    }
    createContent() {
        let ul = document.createElement("ul");
        let btnSuccess = this.createButton("确定", "success");
        ul.className = "dialog-content";
        ul.innerHTML = this.content;
        ul.append(btnSuccess);

        return ul;
    }
    createWrap() {
        let oDiv = document.createElement("div");
        let oTit = this.createTitle();
        let oCon = this.createContent();

        oDiv.append(oTit);
        oDiv.append(oCon);
        oDiv.className = "dialog";

        document.body.append(oDiv);
        this.addEvent();
    }
}

export default Dialog;