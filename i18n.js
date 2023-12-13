const Polyglot = require("./polyglot")
const polyglot = new Polyglot();

function init(e = "zh-ch") {
    if ("zh-ch" === e) {
        e = "zh";
    } else if ("tw" === e) {
        e = "tw";
    }
    return downloadJson(e).then((res) => {
        replace(res);
        return Promise.resolve()
    })
}

function t(t, e) {
    if (t === "") return ""
    return polyglot.t(t, e);
}

function has(t) {
    if (t === "") return false;
    return polyglot.has(t);
}

function replace(t) {
    if (t === "") return ""
    polyglot.replace(t);
}

function extend(e) {
    if (e === "") return
    return downloadJson(e).then((res) => {
        polyglot.extend(res);
        return Promise.resolve()
    })

}

function downloadJson(lang) {
    if (CC_EDITOR) {
        return;
    }
    return new Promise((resolve, reject) => {
        cc.loader.loadRes(`i18n/db/${lang}`, cc.JsonAsset,(err, res) => {
            resolve(res.json)
        });
    })
}

exports.init = init;
exports.t = t;
exports.has = has;
exports.replace = replace;
exports.extend = extend;


