"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const generate = document.getElementById("generate");
const cards = document.getElementById("cards");
let page = 1;
function generateGallery() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://picsum.photos/v2/list?page=${page}&limit=100`);
        const data = yield response.json();
        const randomOrder = data.slice(0, 10).sort(() => 0.5 - Math.random());
        page++;
        const images = randomOrder.map((image) => {
            const img = document.createElement("img");
            img.src = image.download_url;
            img.className = "w-full aspect-square object-cover rounded-lg";
            img.alt = "Couldn't display😭";
            return img.outerHTML;
        });
        cards.innerHTML = images.join("");
    });
}
generate === null || generate === void 0 ? void 0 : generate.addEventListener("click", generateGallery);
//# sourceMappingURL=index.js.map