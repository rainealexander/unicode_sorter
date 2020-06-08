console.log('javacript loaded');
const width = 11;
const height = 15;

const codePointStart = 32; // start of visible characters
const codePointMax = 131071; // end of supplementary multilingual plane

//set up for drawing characters to canvas
let charWidth = 31;
let charHeight = 32;
let borderPad = 10;
//let charPadBottom = 1;
let cHeight = borderPad * 2 + (charHeight * height);
let cWidth = borderPad * 2 + (charWidth * width);

let c = document.getElementById('myCanvas');
//let ctx = c.getContext('2d');

function setupCanvas(canvas) {
    // Get the device pixel ratio, falling back to 1.
    let dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    //let rect = canvas.getBoundingClientRect();
    //console.log('rect: ', rect);
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width *= dpr; //= rect.width * dpr;
    canvas.height *= dpr;//= rect.height * dpr;
    //console.log('canvas.height: ', canvas.height);
    //console.log('canvas.width: ', canvas.width);
    //rect = canvas.getBoundingClientRect();
    //console.log('rect again: ', rect);
    let ctx = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    return ctx;
}

let ctx = setupCanvas(c);
ctx.font = '32px Ariel Unicode';
ctx.textBaseline = 'top';

let charArray = [];
let badChars = [];
let emojis = [];
let coolChars = [];
let tempChars = [];
let cats = {
    arrows: [],
    latin: [],
    punc: [],
    stars: [],
    runeish: [],
    blocks: [],
    planty: [],
    storage: [],
    shapes: [],
    spooky: [],
    symbols: [],
    braille: [],
    omega: [],
    letterz: [],
    lines: [],
    numbers: [],
    alchemy: [],
    windows: [],
    lighting: [],
    doors: [],
    favs: []
};
let meh = [];

let currentCat = -1;

let setCat = () => {
    console.log('selectedIndex: ', document.getElementById('categorize').selectedIndex);
    currentCat = document.getElementById('categorize').selectedIndex;
};

//function to filter unique values in array
const unique = (value, index, self) => {
    return self.indexOf(value) === index;
};

const numeric_sort = (a, b) => {
    return a - b;
};

let catize = () => {
    switch(currentCat) {
        case 1:
            cats.arrows.push(...tempChars.filter(unique));
            cats.arrows = cats.arrows.filter(unique);
            tempChars = [];
            console.log('added to arrows');
            break;
        case 2:
            cats.latin.push(...tempChars.filter(unique));
            cats.latin = cats.latin.filter(unique);
            tempChars = [];
            console.log('added to latin letters');
            break;
        case 3:
            cats.punc.push(...tempChars.filter(unique));
            cats.punc = cats.punc.filter(unique);
            tempChars = [];
            console.log('added to punctuation');
            break;
        case 4:
            cats.stars.push(...tempChars.filter(unique));
            cats.stars = cats.stars.filter(unique);
            tempChars = [];
            console.log('added to stars');
            break;
        case 5:
            cats.runeish.push(...tempChars.filter(unique));
            cats.runeish = cats.runeish.filter(unique);
            tempChars = [];
            console.log('added to runeish');
            break;
        case 6:
            cats.blocks.push(...tempChars.filter(unique));
            cats.blocks = cats.blocks.filter(unique);
            tempChars = [];
            console.log('added to blocks');
            break;
        case 7:
            cats.planty.push(...tempChars.filter(unique));
            cats.planty = cats.planty.filter(unique);
            tempChars = [];
            console.log('added to planty');
            break;
        case 8:
            cats.storage.push(...tempChars.filter(unique));
            cats.storage = cats.storage.filter(unique);
            tempChars = [];
            console.log('added to storage');
            break;
        case 9:
            cats.shapes.push(...tempChars.filter(unique));
            cats.shapes = cats.shapes.filter(unique);
            tempChars = [];
            console.log('added to shapes');
            break;
        case 10:
            cats.spooky.push(...tempChars.filter(unique));
            cats.spooky = cats.spooky.filter(unique);
            tempChars = [];
            console.log('added to spooky');
            break;
        case 11:
            cats.symbols.push(...tempChars.filter(unique));
            cats.symbols = cats.symbols.filter(unique);
            tempChars = [];
            console.log('added to symbols');
            break;
        case 12:
            cats.braille.push(...tempChars.filter(unique));
            cats.braille = cats.braille.filter(unique);
            tempChars = [];
            console.log('added to braille');
            break;
        case 13:
            cats.omega.push(...tempChars.filter(unique));
            cats.omega = cats.omega.filter(unique);
            tempChars = [];
            console.log('added to omega');
            break;
        case 14:
            cats.letterz.push(...tempChars.filter(unique));
            cats.letterz = cats.letterz.filter(unique);
            tempChars = [];
            console.log('added to letterz');
            break;
        case 15:
            cats.lines.push(...tempChars.filter(unique));
            cats.lines = cats.lines.filter(unique);
            tempChars = [];
            console.log('added to lines');
            break;
        case 16:
            cats.numbers.push(...tempChars.filter(unique));
            cats.numbers = cats.numbers.filter(unique);
            tempChars = [];
            console.log('added to numbers');
            break;
        case 17:
            cats.alchemy.push(...tempChars.filter(unique));
            cats.alchemy = cats.alchemy.filter(unique);
            tempChars = [];
            console.log('added to alchemy');
            break;
        case 18:
            cats.windows.push(...tempChars.filter(unique));
            cats.windows = cats.windows.filter(unique);
            tempChars = [];
            console.log('added to windows');
            break;
        case 19:
            cats.lighting.push(...tempChars.filter(unique));
            cats.lighting = cats.lighting.filter(unique);
            tempChars = [];
            console.log('added to lighting');
            break;
        case 20:
            cats.doors.push(...tempChars.filter(unique));
            cats.doors = cats.doors.filter(unique);
            tempChars = [];
            console.log('added to doors');
            break;
        case 21:
            cats.favs.push(...tempChars.filter(unique));
            cats.favs = cats.favs.filter(unique);
            tempChars = [];
            console.log('added to favs');
            break;
        default:
            alert('error: no category');
            break;
    }
};


let getCharClicked = function(x, y) {
    let r = Math.floor((y - borderPad) / (charHeight));// + charPadBottom));
    let c = Math.floor((x - borderPad - 2) / (charWidth));

    let x1 = x - ((x - borderPad - 2) % (charWidth)) - 1;
    let y1 = y - ((y - borderPad) % (charHeight)) - 1;//+ charPadBottom)) - 1;
    let xWidth = charWidth;
    let yWidth = charHeight;// + charPadBottom;

    ctx.globalAlpha = 0.2;
    ctx.fillStyle = 'red';
    ctx.fillRect(x1, y1, xWidth, yWidth);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
    console.log('r: ' + r + ' c: ' + c);
    console.log('Code: ' + charArray[r][c] + ' ' + String.fromCodePoint(charArray[r][c]));
    return charArray[r][c];
};

//click event for canvas
function canvasClick(c, e) {
    let dpr = window.devicePixelRatio || 1;
    let rect = c.getBoundingClientRect();

    let x = (e.clientX - rect.left) / dpr;
    let y = (e.clientY - rect.top) / dpr;
    //let x = e.clientX / dpr - rect.left;
    //let y = e.clientY / dpr - rect.top;

    console.log('x: ' + x + ' y: ' + y);

    tempChars.push(getCharClicked(x, y));
}

c.addEventListener('click', function(e) {
    canvasClick(c, e)
}, false);

//generate random number in apprx. current Unicode range
let codePoint = function() {
    return Math.floor(Math.random() * (codePointMax - codePointStart)) + codePointStart;
};

//get unicode character, check if in flagged list
let getChar = function() {
    let code = codePoint();
    let tries = 100;
    let attempts = 0;
    let sorted = [];
    sorted.push(...badChars);
    sorted.push(...emojis);
    sorted.push(...coolChars);
    sorted.push(...meh);
    //prevent sorted chars from printing
    while ((sorted.includes(code)) && attempts < tries) {
        code = codePoint();
        attempts++;
        if(attempts > 0) {
            console.log('char skip working');
        }
        if (attempts >= tries) {
            alert(`Max attempts (${attempts}) reached on bad code loop.`);
        }
    }

    return code;
};

//fill charArray with characters
let fillCharArray = function(arr) {
    console.log('filling Char Array');
    for (let row = 0; row < height; row++) {
        arr.push([]);
        for (let col = 0; col < width; col++) {
            arr[row].push(getChar());
        }
    }
    console.log('Char Array filled');
};
fillCharArray(charArray);

//save flagged character codes
function save() {
    console.log('badCharsCanvas:', badChars);//.toString());
    localStorage.setItem('badCharsCanvas', JSON.stringify(badChars));
    console.log('emojisCanvas:', emojis);//.toString());
    localStorage.setItem('emojisCanvas', JSON.stringify(emojis));
    console.log('coolCharsCanvas:', coolChars);//.toString());
    localStorage.setItem('coolCharsCanvas', JSON.stringify(coolChars));
    console.log('charCategories', cats);
    localStorage.setItem('charCategories', JSON.stringify(cats));
    console.log('mediocreChars', meh);
    localStorage.setItem('mediocreChars', JSON.stringify(meh));
}
//load flagged character codes if they exist
function load() {
    if (localStorage.getItem('badCharsCanvas') !== null) {
        console.log('badCharsCanvas:');
        console.log(JSON.parse(localStorage.getItem('badCharsCanvas')));
        badChars = JSON.parse(localStorage.getItem('badCharsCanvas'));
    }
    if (localStorage.getItem('emojisCanvas') !== null) {
        console.log('emojisCanvas:');
        console.log(JSON.parse(localStorage.getItem('emojisCanvas')));
        emojis = JSON.parse(localStorage.getItem('emojisCanvas'));
    }
    if (localStorage.getItem('coolCharsCanvas') !== null) {
        console.log('coolCharsCanvas:');
        console.log(JSON.parse(localStorage.getItem('coolCharsCanvas')));
        coolChars = JSON.parse(localStorage.getItem('coolCharsCanvas'));
    }
    if (localStorage.getItem('mediocreChars') !== null) {
        console.log('mediocreChars:');
        console.log(JSON.parse(localStorage.getItem('mediocreChars')));
        meh = JSON.parse(localStorage.getItem('mediocreChars'));
    }
    if (localStorage.getItem('charCategories') !== null) {
        let storedCats = JSON.parse(localStorage.getItem('charCategories'));
        if (storedCats.arrows)
            cats.arrows = storedCats.arrows;
        if (storedCats.latin)
            cats.latin = storedCats.latin;
        if (storedCats.punc)
            cats.punc = storedCats.punc;
        if (storedCats.stars)
            cats.stars = storedCats.stars;
        if (storedCats.runeish)
            cats.runeish = storedCats.runeish;
        if (storedCats.blocks)
            cats.blocks = storedCats.blocks;
        if (storedCats.planty)
            cats.planty = storedCats.planty;
        if (storedCats.storage)
            cats.storage = storedCats.storage;
        if (storedCats.shapes)
            cats.shapes = storedCats.shapes;
        if (storedCats.spooky)
            cats.spooky = storedCats.spooky;
        if (storedCats.symbols)
            cats.symbols = storedCats.symbols;
        if (storedCats.braille)
            cats.braille = storedCats.braille;
        if (storedCats.omega)
            cats.omega = storedCats.omega;
        if (storedCats.letterz)
            cats.letterz = storedCats.letterz;
        if (storedCats.lines)
            cats.lines = storedCats.lines;
        if (storedCats.numbers)
            cats.numbers = storedCats.numbers;
        if (storedCats.alchemy)
            cats.alchemy = storedCats.alchemy;
        if (storedCats.windows)
            cats.windows = storedCats.windows;
        if (storedCats.lighting)
            cats.lighting = storedCats.lighting;
        if (storedCats.doors)
            cats.doors = storedCats.doors;
        if (storedCats.favs)
            cats.favs = storedCats.favs;
    }
}

//load from local storage on page load
window.onload = function() {
    load();
};


//fill canvas with characters from charArray
let fillCanvas = function() {
    console.log('fillingCanvas');
    let i = 0;
    let j = 0;
    //loop over height & width to fill table cells
    for (let x = borderPad; x < cWidth - borderPad; x = x + charWidth) {
        //console.log('x:' + x);
        i = 0;
        for (let y = borderPad; y < cHeight - borderPad; y = y + charHeight) {
            //console.log('y:' + y);
            ctx.fillText(String.fromCodePoint(charArray[i][j]), x, y);
            i++;
        }
        j++;
    }
    console.log('canvas filled \n ----------');
};

fillCanvas();

function getCurrentCatArr() {
    let tempArr = [];
    switch(currentCat) {
        case 1:
            tempArr = cats.arrows;
            break;
        case 2:
            tempArr = cats.latin;
            break;
        case 3:
            tempArr = cats.punc;
            break;
        case 4:
            tempArr = cats.stars;
            break;
        case 5:
            tempArr = cats.runeish;
            break;
        case 6:
            tempArr = cats.blocks;
            break;
        case 7:
            tempArr = cats.planty;
            break;
        case 8:
            tempArr = cats.storage;
            break;
        case 9:
            tempArr = cats.shapes;
            break;
        case 10:
            tempArr = cats.spooky;
            break;
        case 11:
            tempArr = cats.symbols;
            break;
        case 12:
            tempArr = cats.braille;
            break;
        case 13:
            tempArr = cats.omega;
            break;
        case 14:
            tempArr = cats.letterz;
            break;
        case 15:
            tempArr = cats.lines;
            break;
        case 16:
            tempArr = cats.numbers;
            break;
        case 17:
            tempArr = cats.alchemy;
            break;
        case 18:
            tempArr = cats.windows;
            break;
        case 19:
            tempArr = cats.lighting;
            break;
        case 20:
            tempArr = cats.doors;
            break;
        case 21:
            tempArr = cats.favs;
            break;
        default:
            alert('error: no category');
            break;
    }
    return tempArr;
}

function badCharacters() {
    badChars.push(...tempChars.filter(unique));
    badChars = badChars.filter(unique);
    tempChars.forEach(c => {
        if(emojis.includes(c)){
        let i = emojis.indexOf(c);
        emojis.splice(i,1);
        }
        if(coolChars.includes(c)){
            let i = coolChars.indexOf(c);
            coolChars.splice(i,1);
            console.log('removed from coolChars');
        }
        if(meh.includes(c)){
            let i = meh.indexOf(c);
            meh.splice(i,1);
            console.log('removed from mediocre');
        }
        switch(currentCat) {
            case 1:
                if(cats.arrows.includes(c)){
                    let i = cats.arrows.indexOf(c);
                    cats.arrows.splice(i,1);
                    console.log('removed from arrows');
                }
                break;
            case 2:
                if(cats.latin.includes(c)){
                    let i = cats.latin.indexOf(c);
                    cats.latin.splice(i,1);
                    console.log('removed from letters');
                }
                break;
            case 3:
                if(cats.punc.includes(c)){
                    let i = cats.punc.indexOf(c);
                    cats.punc.splice(i,1);
                    console.log('removed from punc');
                }
                break;
            case 4:
                if(cats.stars.includes(c)){
                    let i = cats.stars.indexOf(c);
                    cats.stars.splice(i,1);
                    console.log('removed from stars');
                }
                break;
            case 5:
                if(cats.runeish.includes(c)){
                    let i = cats.runeish.indexOf(c);
                    cats.runeish.splice(i,1);
                    console.log('removed from runeish');
                }
                break;
            case 6:
                if(cats.blocks.includes(c)){
                    let i = cats.blocks.indexOf(c);
                    cats.blocks.splice(i,1);
                    console.log('removed from blocks');
                }
                break;
            case 7:
                if(cats.planty.includes(c)){
                    let i = cats.planty.indexOf(c);
                    cats.planty.splice(i,1);
                    console.log('removed from planty');
                }
                break;
            case 8:
                if(cats.storage.includes(c)){
                    let i = cats.storage.indexOf(c);
                    cats.storage.splice(i,1);
                    console.log('removed from storage');
                }
                break;
            case 9:
                if(cats.shapes.includes(c)){
                    let i = cats.shapes.indexOf(c);
                    cats.shapes.splice(i,1);
                    console.log('removed from shapes');
                }
                break;
            case 10:
                if(cats.spooky.includes(c)){
                    let i = cats.spooky.indexOf(c);
                    cats.spooky.splice(i,1);
                    console.log('removed from spooky');
                }
                break;
            case 11:
                if(cats.symbols.includes(c)){
                    let i = cats.symbols.indexOf(c);
                    cats.symbols.splice(i,1);
                    console.log('removed from symbols');
                }
                break;
            case 12:
                if(cats.braille.includes(c)){
                    let i = cats.braille.indexOf(c);
                    cats.braille.splice(i,1);
                    console.log('removed from braille');
                }
                break;
            case 13:
                if(cats.omega.includes(c)){
                    let i = cats.omega.indexOf(c);
                    cats.omega.splice(i,1);
                    console.log('removed from omega');
                }
                break;
            case 14:
                if(cats.letterz.includes(c)){
                    let i = cats.letterz.indexOf(c);
                    cats.letterz.splice(i,1);
                    console.log('removed from letter combo');
                }
                break;
            case 15:
                if(cats.lines.includes(c)){
                    let i = cats.lines.indexOf(c);
                    cats.lines.splice(i,1);
                    console.log('removed from lines');
                }
                break;
            case 16:
                if(cats.numbers.includes(c)){
                    let i = cats.numbers.indexOf(c);
                    cats.numbers.splice(i,1);
                    console.log('removed from numbers');
                }
                break;
            case 17:
                if(cats.alchemy.includes(c)){
                    let i = cats.alchemy.indexOf(c);
                    cats.alchemy.splice(i,1);
                    console.log('removed from alchemy');
                }
                break;
            case 18:
                if(cats.windows.includes(c)){
                    let i = cats.windows.indexOf(c);
                    cats.windows.splice(i,1);
                    console.log('removed from windows');
                }
                break;
            case 19:
                if(cats.lighting.includes(c)){
                    let i = cats.lighting.indexOf(c);
                    cats.lighting.splice(i,1);
                    console.log('removed from lighting');
                }
                break;
            case 20:
                if(cats.doors.includes(c)){
                    let i = cats.doors.indexOf(c);
                    cats.doors.splice(i,1);
                    console.log('removed from doors');
                }
                break;
            case 21:
                if(cats.favs.includes(c)){
                    let i = cats.favs.indexOf(c);
                    cats.favs.splice(i,1);
                    console.log('removed from favs');
                }
                break;
            default:
                break;
        }
    });
    tempChars = [];
    console.log('added to badChars');
    badChars.sort(numeric_sort);
}

function cool() {
    coolChars.push(...tempChars.filter(unique));
    coolChars = coolChars.filter(unique);
    tempChars.forEach(c => {
        if(badChars.includes(c)){
            let i = badChars.indexOf(c);
            badChars.splice(i,1);
        }
    });
    tempChars = [];
    console.log('added to coolChars');
    coolChars.sort(numeric_sort);
}

function refresh() {
    console.log('-----------\n refreshing');
    tempChars = [];
    charArray = [];
    fillCharArray(charArray);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'black';
    fillCanvas();
}

function emoji() {
    emojis.push(...tempChars.filter(unique));
    emojis = emojis.filter(unique);
    tempChars = [];
    console.log('added to emojis');
    console.log(emojis);
    emojis.sort(numeric_sort);
}

function mehCat() {
    meh.push(...tempChars.filter(unique));
    meh = meh.filter(unique);
    tempChars.forEach(c => {
        if(emojis.includes(c)){
            let i = emojis.indexOf(c);
            emojis.splice(i,1);
        }
        if(coolChars.includes(c)){
            let i = coolChars.indexOf(c);
            coolChars.splice(i,1);
        }
    });
    meh.sort(numeric_sort);
    tempChars = [];
    console.log('added to mediocreChars');
}

function getEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

//fill charArray with emojis
let fillEmojis = function(arr) {
    console.log('filling Emoji Array');
    for (let row = 0; row < height; row++) {
        arr.push([]);
        for (let col = 0; col < width; col++) {
            arr[row].push(getEmoji());
        }
    }
    console.log('Emoji Array filled');
};

function onlyEmoji() {
    tempChars = [];
    charArray = [];
    fillEmojis(charArray);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'black';
    fillCanvas();
}

function getRandIndex(max) {
    return Math.floor(Math.random() * max);
}

let fillCool = function(arr) {
    console.log('filling Cool Array');
    let coolArr = [];
    coolArr.push(...coolChars);
    //coolArr.push(...emojis);
    let len = coolArr.length;
    for (let row = 0; row < height; row++) {
        arr.push([]);
        for (let col = 0; col < width; col++) {
            arr[row].push(coolArr[getRandIndex(len)]);
        }
    }
    console.log('Cool Array filled');
};

let fillMediocre = function(arr) {
    console.log('filling mediocre Array');
    let mehArr = [];
    mehArr.push(...meh);
    //coolArr.push(...emojis);
    let len = mehArr.length;
    for (let row = 0; row < height; row++) {
        arr.push([]);
        for (let col = 0; col < width; col++) {
            arr[row].push(mehArr[getRandIndex(len)]);
        }
    }
    console.log('Mediocre Array filled');
};

let mediocre = function() {
    tempChars = [];
    charArray = [];
    fillMediocre(charArray);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'black';
    fillCanvas();
};

let fillUncatz = function() {
    console.log('filling uncat array');
    let uncatzArr = [];
    uncatzArr.push(...cats.arrows);
    uncatzArr.push(...cats.latin);
    uncatzArr.push(...cats.punc);
    uncatzArr.push(...cats.stars);
    uncatzArr.push(...cats.runeish);
    uncatzArr.push(...cats.blocks);
    uncatzArr.push(...cats.planty);
    uncatzArr.push(...cats.storage);
    uncatzArr.push(...cats.shapes);
    uncatzArr.push(...cats.spooky);
    uncatzArr.push(...cats.symbols);
    uncatzArr.push(...cats.braille);
    uncatzArr.push(...cats.omega);
    uncatzArr.push(...cats.letterz);
    uncatzArr.push(...cats.lines);
    uncatzArr.push(...cats.numbers);
    uncatzArr.push(...cats.alchemy);
    uncatzArr.push(...cats.windows);
    uncatzArr.push(...cats.lighting);
    uncatzArr.push(...cats.doors);
    uncatzArr = uncatzArr.filter(unique);

    let len = coolChars.length;
    document.getElementById('catnum').textContent = (len - uncatzArr.length).toString();

    for (let row = 0; row < height; row++) {
        charArray.push([]);
        for (let col = 0; col < width; col++) {
            let code = coolChars[getRandIndex(len)];
            while (uncatzArr.includes(code)) {
                code = coolChars[getRandIndex(len)];
            }
            charArray[row].push(code);
        }
    }
    console.log('Uncatz Array filled');
};

function interesting() {
    tempChars = [];
    charArray = [];
    fillCool(charArray);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'black';
    fillCanvas();
}

function uncatz() {
    tempChars = [];
    charArray = [];
    fillUncatz();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'black';
    fillCanvas();
}

function fillCat(arr) {
    let len = arr.length;
    for (let row = 0; row < height; row++) {
        charArray.push([]);
        for (let col = 0; col < width; col++) {
            charArray[row].push(arr[getRandIndex(len)]);
        }
    }
}

function showCat() {
    tempChars = [];
    charArray = [];
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'black';
    fillCat(getCurrentCatArr());
    fillCanvas();
}

function clearSave() {
    localStorage.removeItem('badCharsCanvas');
    localStorage.removeItem('emojisCanvas');
    localStorage.removeItem('coolCharsCanvas');
}

function clearSelected() {
    tempChars = [];
    console.log('Most recent selection cleared');
}

/* Download File Code */
const type = 'application/json';
const filename = 'sorted_unicode_data.json';

function download(data, filename, type) {
    let file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        let a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}