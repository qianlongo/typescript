"use strict";
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
printLabel({
    label: '1'
});
var createSquare = function (config) {
    return {
        color: 'red',
        area: 1
    };
};
createSquare({
    color: 'red',
    width: 12
});
