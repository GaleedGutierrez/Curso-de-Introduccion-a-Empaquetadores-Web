/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA4VBMVEUAAAD///8FBQX8/Pz7+/sXFxcVFRUjIyMgICDb29slJSX6+voKCgodHR0ODg5VVVX39/coKCgaGhoSEhIICAjo6Ojj4+N2dnbHx8fy8vLv7+/V1dXQ0NC1tbU8PDz09PTAwMBZWVlEREQ6Ojrq6urn5+fd3d28vLynp6eampqWlpaFhYVJSUk0NDQrKyvz8/PJycmkpKSioqKenp6BgYF6enrMzMy5ubmwsLCrq6t+fn5zc3NmZmZjY2NhYWFeXl5OTk4/Pz8wMDDf39/CwsKRkZGJiYlra2suLi4vLy9tbW2kdFjXAAADkElEQVRYw+2V2XLaQBBF7wgJLUgCCRmz2iwxJGC2EO+7HS/J/39Qbo/Kil8skao8cgFVI02f6enpaWGnnXb6TH7g2YHj2WWkcjzP8zPTNlAgJxuRItK/IagEonyCYQOzSWfsrtZVoAzDwFn39KeHOgwfve5pc4gwz9/Cy5FKVVkdw4KBFu0mPCQhvtAcwMoBBOgpVSopyiTiFrGBI2WW1AYRQjypUq3KuD6VjQul6L7XcZdkdBi2IdPy5g1sHw1C8wAxbsS/NaP9tqkd6SRgT5X42QOsQoCHJiOvDRDYATCoIoChAYJtYlEEMIA2R/YwB+AvgAgaQC+T97+hCGBhUOFyrxAIANBXDWivZRk3RYAY1wzWvIMl9g+3474i1oAa+qqijvCUDyijKhHsSwQ2NjRnsFPAMRok9N2CHHDLGOoZ5gYB35jPSzgp4B63ptRW4S70CTB/w48XeKb54x0wTAjk+goAzKKkuzblkGGTo7MIjvELTSHkA2BjrSuxPW5UWNFpDr5oQADWdKkIAAfnJHC5mlO7Ts+COhyi7jANUmb5AIPb11CpWn0Zm55GOZcR01B4GmUVuOx1O92zl0fQn4CLyaT3iBCIse5Pegc0c+XUs02xACFkVyszc2UEke3YkeO/xxRFnvHRzJUfhqGf8Pfhlp/4for2k8RPsJ1ir/wxYL2ucIslzB8ORKOYdhqtczw6eAiEEGL0MHoYwshrqd1K65Batt3ze1g+jDo6Zqv2hb04wlez1TKncPCZkhhjlalyLo04wKuiunjEnZSyi3KSF4ErFaxlSjO3DHBiactTYMx7hwewUABQP2fT6dlSSBewuatwpYTJIfqZwAKAyeZHzRtyLrl0xOwztN0lH63goRiwxtyZ4168vopDhI1Mzl/bQX0LwHfYwC+c0uyKCQcdelMz8rYFeLigOZY0ctbRUkly8IZ/AHyl+YQyAQFuaorai1DfGrBAn2YHDsDyl4zyu9p2CY/WAmjTPEcEfid01nreahc2oHQPLd2hDBs/ZPaeRHE4glUM6FWvXl9cRWtC7zociaWhMXpbCisxK2UX8GHr/SzdQl4a8oqNtgNQTaAMD1OlK2oBeW/JSyrOA4zf52+v9unPz6Cmz2AAGydKm/WcEHB9si+6ugsB6YohqpdX+ycj8SrrpydveT0pQSYvgCjMWpoQinta7AQOFcRZVw2dIHDCv08DAzvt9N/1BxguQ8mPjXVuAAAAAElFTkSuQmCC";

var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var RESPONSE, PRODUCTS, OUTPUT, TEMPLATES, NEW_ITEM, NEW_HEADER, NEW_IMAGE;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(API)];
            case 1:
                RESPONSE = _a.sent();
                return [4 /*yield*/, RESPONSE.json()];
            case 2:
                PRODUCTS = _a.sent();
                OUTPUT = PRODUCTS.map(function (product) {
                    var images = product.images, title = product.title, price = product.price;
                    var TEMPLATE = "<article class=\"Card\">\n\t\t\t<figure>\n\t\t\t\t<img src=\"".concat(images[0], "\" />\n\t\t\t</figure>\n\t\t\t<h2>").concat(title, " <small>$").concat(price, "</small></h2>\n\t\t</article>");
                    return TEMPLATE;
                });
                TEMPLATES = OUTPUT.join('');
                NEW_ITEM = document.createElement('section');
                NEW_HEADER = document.createElement('header');
                NEW_IMAGE = document.createElement('img');
                NEW_ITEM.classList.add('Items');
                NEW_ITEM.innerHTML = TEMPLATES;
                NEW_IMAGE.src = img;
                NEW_HEADER.appendChild(NEW_IMAGE);
                BODY.append(NEW_HEADER, NEW_ITEM);
                return [2 /*return*/];
        }
    });
}); };
var BODY = document.querySelector('body');
var API = 'https://api.escuelajs.co/api/v1/products/?offset=5&limit=10';
main();
//# sourceMappingURL=bundle.js.map
