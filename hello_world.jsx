// ウィンドウを作成
var w = new Window("dialog", "Hello World", undefined);
w.orientation = "column";
w.alignChildren = ["center","top"];
// ウィンドウのサイズを設定
w.preferredSize = [300, 100];
// Hello World テキストを追加
var myText = w.add("statictext", undefined, "Hello World");
myText.alignment = ["center","top"];
// OK ボタンを追加
var myButton = w.add("button", undefined, "OK");
myButton.onClick = function() {
    // クリックされたらウィンドウを閉じる
    w.close();
};
// ウィンドウを表示
w.show();