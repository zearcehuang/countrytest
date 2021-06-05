

/**
* 設定行顏色
* @param {obj} row row物件
* @param {int} index 順序
* @returns {obj} css樣式
*/
function rowStyle(row, index) {
    if (index % 2 === 0) {
        if (row.worksla === "A") {
            return {
                //classes: 'text-nowrap alter-class',
                classes: 'danger-class',
                css: { "background-color": "yellow", "color": "red" }
            };
        }
        else {
            return {
                //classes: 'text-nowrap default-class',
                classes: 'default-class',
                css: { "background": "#FFF" }
            };
        }
    }
    else {
        if (row.worksla === "A") {
            return {
                //classes: 'text-nowrap alter-class',
                classes: 'danger-class',
                css: { "background-color": "yellow", "color": "red" }
            };
        }
        else {
            return {
                //classes: 'text-nowrap alter-class',
                classes: 'alter-class',
                css: { "background": "#99ccff" }
            };
        }
    }
}

//}
/**
 * 標題style
 * @param {obj} column 物件
 * @returns {obj} css樣式
 */
function headerStyle(column) {
    //return { classes: "active" };
    return {
        //classes: 'text-nowrap another-class',
        classes: 'another-class',
        css: { "color": "white", "background-color": "#538ed5", "height": "35px", "word-break": "break-all" }
    };
}

/**
 * Grid 功能按鈕
 * @param {string} value 值
 * @param {object} row  行物件
 * @param {int} index   第幾筆
 * @param {string} btn_name   按鈕名稱
 * @returns {object} 功能物件html tag
 */
function operateFormatter(value, row, index, btn_name) {
    return '<input type="button" style=" cursor: pointer;" id="btn_Edit" value="檢視" class="btn-custom" />';
}

/**
 * 視窗參數
 * @param {string} strTitle 標題
 * @param {string} OpenDialog 要開啟的dialog ID
 * @param {int} intWidth dialog寬度
 * @param {int} intHeight dialog高度
 */
function getDialogOpt(strTitle, OpenDialog, intWidth, intHeight) {
    //好像無用,這應該是jquery ui dialog ,預設似乎無此套件
    //intWidth = (typeof (intWidth) === 'undefined') ? 800 : intWidth;
    //intHeight = (typeof (intHeight) === 'undefined') ? 450 : intHeight;
    $("#" + OpenDialog).find('.modal-title').text(strTitle);

    //bootstrap modal ,只有三個參數backdrop,keyboard,show
    //請見 https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
    opt = {
        backdrop: 'static',
        keyboard: false
    };
    //opt = {
    //    autoOpen: false,
    //    width: intWidth,
    //    height: intHeight,
    //    resizable: false,
    //    modal: true,
    //    title: strTitle,
    //    close: function (event, ui) {
    //        $('#' + OpenDialog).empty();       //ie dialog才不會暫存

    //    }
    //};
}


/*ajax共用設定*/
$(function () {
    $.ajaxSetup({
        type: "post",
        cache: false,       //ie 會cache要清掉
        datatype: "json",
        beforeSend: function () {       //增加ajax前打開block ui
            //blockWaiting();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('查無資料!');
            $('#table').bootstrapTable('destroy');
        }        
    });

    
});

/**
 * string format
 * @returns {string} 取代結果
 * */
String.prototype.format = String.prototype.f = function () {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};
