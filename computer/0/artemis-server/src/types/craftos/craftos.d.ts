/** @noSelfInFile **/
type Color = number;
type Colour = Color;
type MultiReturn<T> = T;

declare namespace colors {
    var white: Color;
    var orange: Color;
    var magenta: Color;
    var lightBlue: Color;
    var yellow: Color;
    var lime: Color;
    var pink: Color;
    var gray: Color;
    var lightGray: Color;
    var cyan: Color;
    var purple: Color;
    var blue: Color;
    var brown: Color;
    var green: Color;
    var red: Color;
    var black: Color;
    /** @vararg **/
    function combine(c1: Color, ...c2: Color[]): Color;
    /** @vararg **/
    function subtract(c1: Color, ...c2: Color[]): Color;
    function test(colors: Color, color: Color): boolean;
    function packRGB(r: number, g: number, b: number): number;
    function unpackRGB(rgb: number): MultiReturn<[number, number, number]>;
    function toBlit(color: Color): string;
}

declare namespace colours {
    var white: Colour;
    var orange: Colour;
    var magenta: Colour;
    var lightBlue: Colour;
    var yellow: Colour;
    var lime: Colour;
    var pink: Colour;
    var grey: Colour;
    var lightGrey: Colour;
    var cyan: Colour;
    var purple: Colour;
    var blue: Colour;
    var brown: Colour;
    var green: Colour;
    var red: Colour;
    var black: Colour;
    /** @vararg **/
    function combine(c1: Colour, ...c2: Colour[]): Colour;
    /** @vararg **/
    function subtract(c1: Colour, ...c2: Colour[]): Colour;
    function test(colors: Colour, color: Colour): boolean;
    function packRGB(r: number, g: number, b: number): number;
    function unpackRGB(rgb: number): MultiReturn<[number, number, number]>;
    function toBlit(color: Colour): string;
}
type Coroutine = any;

declare namespace coroutine {
    function create(fn: Function): Coroutine;
    /** @vararg **/
    function resume(coro: Coroutine, ...args: any[]): MultiReturn<[boolean, ...any[]]>;
    function running(): Coroutine | null;
    function status(coro: Coroutine): string;
    function wrap(fn: Function): Function;
    /** @vararg **/
    function yield(...args: any[]): MultiReturn<[...any[]]>;
}
declare namespace disk {
    function isPresent(name: string): boolean;
    function getLabel(name: string): string | null;
    function setLabel(name: string, label?: string | null): void;
    function hasData(name: string): boolean;
    function getMountPath(name: string): string | null;
    function hasAudio(name: string): boolean;
    function getAudioTitle(name: string): string | null;
    function playAudio(name: string): void;
    function stopAudio(name: string): void;
    function eject(name: string): void;
    function getID(name: string): number;
}
declare class FileHandle {
    public close(): void;
    public seek(whence?: string, offset?: number): number;
    public read(count?: number): string | number;
    public readLine(withTrailing?: boolean): string;
    public readAll(): string;
    public write(value: any): void;
    public writeLine(value: string): void;
    public flush(): void;
}

declare class FileAttributes {
    public size: number;
    public isDir: boolean;
    public isReadOnly: boolean;
    public created: number;
    public modified: number;
}

declare const fs: {
    list(path: string): string[];
    exists(path: string): boolean;
    isDir(path: string): boolean;
    isReadOnly(path: string): boolean;
    getName(path: string): string;
    getDrive(path: string): string;
    getSize(path: string): number;
    getFreeSpace(path: string): number;
    makeDir(path: string): void;
    move(from: string, to: string): void;
    copy(from: string, to: string): void;
    'delete'(path: string): void;
    /** @vararg **/
    combine(base: string, ...local: string[]): void;
    open(path: string, mode: string): MultiReturn<[FileHandle] | [null, string]>;
    find(wildcard: string): string[];
    getDir(path: string): string;
    complete(partial: string, path: string, includeFiles?: boolean, includeSlashes?: boolean): string[];
    getCapacity(path: string): number;
    attributes(path: string): FileAttributes;
    isDriveRoot(path: string): boolean;
}
declare function sleep(time: number): void;
declare function write(str: string): number;
/** @vararg **/
declare function print(...str: any[]): number;
/** @vararg **/
declare function printError(...str: any[]): void;
declare function read(replaceChar?: string, history?: string[], completeFn?: (partial: string) => string[], defaultValue?: string): string;
/** @vararg **/
declare function assert(v: boolean, ...args: any[]): MultiReturn<[boolean, ...any[]]>;
declare function dofile(filename: string): MultiReturn<[...any[]]>;
declare function getfenv(func: Function): Object;
declare function getmetatable(obj: Object): Object;
declare function load(str: string, name?: string, mode?: string, env?: Object): MultiReturn<[Function] | [null, string]>;
declare function rawequal(a: any, b: any): boolean;
declare function rawget(tab: Object, idx: any): any;
declare function rawset(tab: Object, idx: any, val: any): void;
/** @vararg **/
declare function select(idx: number | "#", ...args: any[]): MultiReturn<[number] | [...any[]]>;
declare function setfenv(func: Function, env: Object): void;
declare function setmetatable(obj: Object, meta: Object): void;
declare var _CC_DEFAULT_SETTINGS: string;
declare var _CC_DISABLE_LUA51_FEATURES: boolean;
declare var _G: Object;
declare var _HOST: string;
declare var _VERSION: string;
declare namespace gps {
    var CHANNEL_GPS: number;
    function locate(timeout?: number, debug?: boolean): MultiReturn<[number, number, number]>;
}
declare namespace help {
    function path(): string;
    function setPath(path: string): void;
    function lookup(topic: string): string;
    function topics(): string[];
    function completeTopic(prefix: string): string[];
}
declare class RequestOptions {
    public url: string;
    public body: string | null;
    public headers: Map<string, string> | null;
    public binary: boolean | null;
    public method: string | null;
    public redirect: boolean | null;
}

declare class HTTPResponse {
    public getResponseCode(): number;
    public getResponseHeaders(): Map<string, string>;
    public read(count?: number): string | number | null;
    public readLine(withTrailing: boolean): string | null;
    public readAll(): string | null;
    public close(): void;
}

declare class WebSocket {
    public receive(timeout?: number): string | null;
    public send(message: string, binary?: boolean): void;
    public close(): void;
}

declare namespace http {
    function request(url: string, body?: string, headers?: Map<string, string>, binary?: boolean): void;
    function get(url: string, headers?: Map<string, string>, binary?: boolean): MultiReturn<[HTTPResponse] | [boolean, string, HTTPResponse?]>;
    function get(options: RequestOptions): MultiReturn<[HTTPResponse] | [boolean, string, HTTPResponse?]>;
    function post(url: string, body?: string, headers?: Map<string, string>, binary?: boolean): MultiReturn<[HTTPResponse] | [boolean, string, HTTPResponse?]>;
    function post(options: RequestOptions): MultiReturn<[HTTPResponse] | [boolean, string, HTTPResponse?]>;
    function checkURLAsync(url: string): void;
    function checkURL(url: string): boolean;
    function websocket(url: string, headers?: Map<string, string>): MultiReturn<[WebSocket] | [boolean, string]>;
    function websocketAsync(url: string, headers?: Map<string, string>): void;
}
type Key = number;

declare const keys: {
    a: Key;
    apostrophe: Key;
    at: Key;
    ax: Key;
    b: Key;
    backslash: Key;
    backspace: Key;
    c: Key;
    capsLock: Key;
    cimcumflex: Key;
    colon: Key;
    comma: Key;
    convert: Key;
    d: Key;
    'delete': Key;
    down: Key;
    e: Key;
    eight: Key;
    end: Key;
    enter: Key;
    equals: Key;
    f: Key;
    f1: Key;
    f10: Key;
    f11: Key;
    f12: Key;
    f13: Key;
    f14: Key;
    f15: Key;
    f2: Key;
    f3: Key;
    f4: Key;
    f5: Key;
    f6: Key;
    f7: Key;
    f8: Key;
    f9: Key;
    five: Key;
    four: Key;
    g: Key;
    grave: Key;
    h: Key;
    home: Key;
    i: Key;
    insert: Key;
    j: Key;
    k: Key;
    kana: Key;
    kanji: Key;
    l: Key;
    left: Key;
    leftAlt: Key;
    leftBracket: Key;
    leftCtrl: Key;
    leftShift: Key;
    m: Key;
    minus: Key;
    multiply: Key;
    n: Key;
    nine: Key;
    noconvert: Key;
    numLock: Key;
    numPad0: Key;
    numPad1: Key;
    numPad2: Key;
    numPad3: Key;
    numPad4: Key;
    numPad5: Key;
    numPad6: Key;
    numPad7: Key;
    numPad8: Key;
    numPad9: Key;
    numPadAdd: Key;
    numPadComma: Key;
    numPadDecimal: Key;
    numPadDivide: Key;
    numPadEnter: Key;
    numPadEquals: Key;
    numPadSubtract: Key;
    o: Key;
    one: Key;
    p: Key;
    pageDown: Key;
    pageUp: Key;
    pause: Key;
    period: Key;
    q: Key;
    r: Key;
    returnKey: Key;
    right: Key;
    rightAlt: Key;
    rightBracket: Key;
    rightCtrl: Key;
    rightShift: Key;
    s: Key;
    scollLock: Key;
    semiColon: Key;
    seven: Key;
    six: Key;
    slash: Key;
    space: Key;
    stop: Key;
    t: Key;
    tab: Key;
    three: Key;
    two: Key;
    u: Key;
    underscore: Key;
    up: Key;
    v: Key;
    w: Key;
    x: Key;
    y: Key;
    yen: Key;
    z: Key;
    zero: Key;
    getName(k: Key): string;
}
declare namespace math {
    function abs(x: number): number;
    function acos(x: number): number;
    function asin(x: number): number;
    function atan(x: number): number;
    function atan2(y: number, x: number): number;
    function ceil(x: number): number;
    function cos(x: number): number;
    function cosh(x: number): number;
    function deg(x: number): number;
    function exp(x: number): number;
    function floor(x: number): number;
    function fmod(x: number, y: number): number;
    function frexp(x: number): number;
    var huge: number;
    function ldexp(m: number, e: number): number;
    function log(x: number): number;
    function log10(x: number): number;
    /** @vararg **/
    function max(x: number, ...args: number[]): number;
    /** @vararg **/
    function min(x: number, ...args: number[]): number;
    function modf(x: number): number;
    var pi: number;
    function pow(x: number, y: number): number;
    function rad(x: number): number;
    function random(m?: number, n?: number): number;
    function randomseed(x: number): number;
    function sin(x: number): number;
    function sinh(x: number): number;
    function sqrt(x: number): number;
    function tan(x: number): number;
    function tanh(x: number): number;
}
declare namespace multishell {
    function getFocus(): number;
    function setFocus(n: number): void;
    function getTitle(n: number): string | null;
    function setTitle(n: number, title: string): void;
    function getCurrent(): number;
    function launch(env: Object, path: string, ...args: string[]): number;
    function getCount(): number;
}
declare class LuaDate {
    year: number;
    month: number;
    day: number;
    hour: number;
    min: number;
    sec: number;
    wday: number;
    yday: number;
    isdst: boolean;
}

declare namespace os {
    function version(): string;
    function getComputerID(): number;
    function computerID(): number;
    function getComputerLabel(): string | null;
    function computerLabel(): string | null;
    function setComputerLabel(label?: string | null): void;
    /** @vararg **/
    function run(env: Object, path: string, ...args: string[]): boolean;
    /** @vararg **/
    function queueEvent(type: string, ...param: any[]): void;
    function clock(): number;
    function startTimer(timeout: number): number;
    function cancelTimer(id: number): void;
    function time(mode?: string | null): number;
    function sleep(timeout: number): void;
    function day(mode?: string | null): number;
    function setAlarm(time: number): number;
    function cancelAlarm(id: number): void;
    function shutdown(): void;
    function reboot(): void;
    function epoch(mode?: string | null): number;
    function date(format?: string | null, time?: number | null): string | LuaDate;
}
declare namespace paintutils {
    function parseImage(image: string): number[][] | null;
    function loadImage(path: string): number[][] | null;
    function drawPixel(x: number, y: number, color?: Color): void;
    function drawLine(startX: number, startY: number, endX: number, endY: number, color?: Color): void;
    function drawBox(startX: number, startY: number, endX: number, endY: number, color?: Color): void;
    function drawFilledBox(startX: number, startY: number, endX: number, endY: number, color?: Color): void;
    function drawImage(image: number[][], x: number, y: number): void;
}
declare namespace parallel {
    /** @vararg **/
    function waitForany(...args: (() => void)[]): void;
    /** @vararg **/
    function waitForAll(...args: (() => void)[]): void;
}
interface IPeripheral {}

declare class CommandPeripheral implements IPeripheral {
    getCommand(): string;
    setCommand(command: string): void;
    runCommand(): MultiReturn<[boolean, string | null]>;
}

declare class ComputerPeripheral implements IPeripheral {
    turnOn(): void;
    shutdown(): void;
    reboot(): void;
    getID(): number;
    isOn(): boolean;
    getLabel(): string;
}

declare class DrivePeripheral implements IPeripheral {
    isDiskPresent(): boolean;
    getDiskLabel(): string;
    setDiskLabel(label?: string | null): void;
    hasData(): boolean;
    getMountPath(): string;
    hasAudio(): boolean;
    getAudioTitle(): string;
    playAudio(): void;
    stopAudio(): void;
    ejectDisk(): void;
    getDiskID(): number;
}

declare class ModemPeripheral implements IPeripheral {
    open(channel: number): void;
    isOpen(channel: number): boolean;
    close(channel: number): void;
    closeAll(): void;
    transmit(channel: number, replyChannel: number, payload: any): void;
    isWireless(): boolean;
}

declare class WiredModemPeripheral extends ModemPeripheral {
    getNamesRemote(): string[];
    isPresentRemote(name: string): boolean;
    getTypeRemote(name: string): string;
    getMethodsRemote(name: string): string[];
    /** @vararg **/
    callRemote(name: string, method: string, ...args: string[]): MultiReturn<[...any[]]>;
    getNameLocal(): string;
}

declare class MonitorPeripheral implements IPeripheral, ITerminal {
    write(text: string): void;
    blit(text: string, textColors: string, backgroundColors: string): void;
    clear(): void;
    clearLine(): void;
    getCursorPos(): MultiReturn<[number, number]>;
    setCursorPos(x: number, y: number): void;
    getCursorBlink(): boolean;
    setCursorBlink(blink: boolean): void;
    isColor(): boolean;
    isColour(): boolean;
    getSize(mode?: boolean | number): MultiReturn<[number, number]>;
    scroll(n: number): void;
    getTextColor(): Color;
    getTextColour(): Colour;
    setTextColor(color: Color): void;
    setTextColour(color: Colour): void;
    getBackgroundColor(): Color;
    getBackgroundColour(): Colour;
    setBackgroundColor(color: Color): void;
    setBackgroundColour(color: Colour): void;
    getPaletteColor(color: Color): MultiReturn<[Color, Color, Color]>;
    getPaletteColour(color: Colour): MultiReturn<[Colour, Colour, Colour]>;
    setPaletteColor(color: Color, rgb: number): void;
    setPaletteColor(color: Color, r: number, g: number, b: number): void;
    setPaletteColour(color: Colour, rgb: number): void;
    setPaletteColour(color: Colour, r: number, g: number, b: number): void;
    getGraphicsMode(): boolean | number;
    setGraphicsMode(mode: boolean | number): void;
    getPixel(x: number, y: number): number;
    setPixel(x: number, y: number, color: Color): void;
    getPixels(x: number, y: number, width: number, height: number, asString?: boolean): (string | Color[])[];
    setPixels(x: number, y: number, data: Color | (string | Color[])[]): void;
    getFrozen(): boolean;
    setFrozen(frozen: boolean): void;
    setTextScale(scale: number): void;
}

declare class PrinterPeripheral implements IPeripheral {
    /** @varargs **/
    write(...args: (string | number)[]): void;
    getCursorPos(): MultiReturn<[number, number]>;
    setCursorPos(x: number, y: number): void;
    getPageSize(): MultiReturn<[number, number]>;
    newPage(): void;
    endPage(): void;
    setPageTitle(title?: string | null): void;
    getInkLevel(): number;
    getPaperLevel(): number;
}

declare class SpeakerPeripheral implements IPeripheral {
    playSound(name: string, volume?: number, pitch?: number): void;
    playNote(name: string, volume?: number, pitch?: number): void;
}

declare namespace peripheral {
    function getNames(): string[];
    function isPresent(name: string): boolean;
    function getType(peripheral: IPeripheral): string;
    function getMethods(name: string): string[];
    function getName(peripheral: IPeripheral): string;
    /** @vararg **/
    function call(side: string, method: string, ...args: any[]): MultiReturn<[...any[]]>;
    function wrap(name: string): IPeripheral;
    function find(type: string, filter?: (peripheral: IPeripheral) => boolean): IPeripheral;
}
declare namespace pocket {
    function equipBack(): MultiReturn<[boolean, string | null]>;
    function unequipBack(): MultiReturn<[boolean, string | null]>;
}
declare namespace rednet {
    var CHANNEL_BROADCAST: number;
    var CHANNEL_REPEAT: number;
    function open(modem: string): void;
    function close(modem?: string): void;
    function isOpen(modem?: string): void;
    function send(recipient: number, message: any, protocol?: string): void;
    function broadcast(message: any, protocol?: string): void;
    function receive(filter?: string | null, timeout?: number): MultiReturn<[number, any, string | null] | [null]>;
    function host(protocol: string, hostname: string): void;
    function unhost(protocol: string): void;
    function lookup(protocol: string, hostname?: string): void;
    function run(): void;
}
declare namespace redstone {
    function getSides(): string[];
    function setOutput(side: string, on: boolean): void;
    function getOutput(side: string): boolean;
    function getInput(side: string): boolean;
    function setAnalogOutput(side: string, value: number): void;
    function getAnalogOutput(side: string): number;
    function getAnalogInput(side: string): number;
    function setAnalogueOutput(side: string, value: number): void;
    function getAnalogueOutput(side: string): number;
    function getAnalogueInput(side: string): number;
    function setBundledOutput(side: string, value: Color): void;
    function getBundledOutput(side: string): Color;
    function getBundledInput(side: string): Color;
    function testBundledInput(side: string, mask: number): boolean;
}
declare class SettingOptions {
    description: string;
    default: any;
    type: string;
}

declare namespace settings {
    function define(name: string, options?: SettingOptions): void;
    function undefine(name: string): void;
    function set(name: string, value: any): void;
    function get(name: string, defaultValue?: any): any;
    function getDetails(name: string): SettingOptions;
    function unset(name: string): void;
    function clear(): void;
    function getNames(): string[];
    function load(path?: string): void;
    function save(path?: string): void;
}
declare namespace shell {
    function exit(): void;
    function dir(): string;
    function setDir(path: string): void;
    function path(): string;
    function setPath(path: string): void;
    function resolve(path: string): string;
    function resolveProgram(name: string): string;
    function aliases(): {[name: string]: string};
    function setAlias(name: string, program: string): void;
    function clearAlias(name: string): void;
    function programs(showHidden?: boolean): string[];
    function getRunningProgram(): string;
    /** @vararg **/
    function run(command: string, ...args: string[]): boolean;
    /** @vararg **/
    function execute(command: string, ...args: string[]): boolean;
    /** @vararg **/
    function openTab(command: string, ...args: string[]): number;
    function switchTab(id: number): void;
    function complete(prefix: string): string[];
    function completeProgram(prefix: string): string[];
    function setCompletionFunction(path: string, completion: (shell: Object, index: number, partial: string, previous: string[]) => string[]): void;
    function getCompletionInfo(): {fnComplete: (shell: Object, index: number, partial: string, previous: string[]) => string[]}[];
}
/** @luaIterator **/
type IStringIterator = Iterable<MultiReturn<[...string[]]>>;
/** @vararg **/
type IGSubReplacement = (...args: string[]) => string;

declare namespace string {
    function byte(str: string, start?: number, end?: number): MultiReturn<[...number[]]>;
    /** @varargs **/
    function char(...args: number[]): string;
    function dump(func: Function): string;
    function find(str: string, pattern: string, init?: number, plain?: boolean): MultiReturn<[number, number, ...string[]]>;
    /** @varargs **/
    function format(format: string, ...args: any[]): string;
    function gmatch(str: string, pattern: string): IStringIterator;
    function gsub(str: string, pattern: string, repl: string | Object | IGSubReplacement, count?: number): string;
    function len(str: string): number;
    function lower(str: string): string;
    function match(str: string, pattern: string, init?: number): MultiReturn<[...string[]]>;
    function rep(str: string, count: number): string;
    function reverse(str: string): string;
    function sub(str: string, start: number, end?: number): string;
    function upper(str: string): string;
}
declare namespace table {
    function concat(tab: any[], sep?: string, start?: number, end?: number): string;
    function insert(tab: any[], val: any): void;
    function insert(tab: any[], idx: number, val: any): void;
    function remove(tab: any[], idx?: number): any;
    function sort(tab: any[], comp?: (a: any, b: any) => boolean): void;
    /** @vararg **/
    function pack(...args: any[]): any[];
    function unpack(tab: any[], start?: number, end?: number): MultiReturn<[...any[]]>;
}
interface ITerminal {
    write(text: string): void;
    blit(text: string, textColors: string, backgroundColors: string): void;
    clear(): void;
    clearLine(): void;
    getCursorPos(): MultiReturn<[number, number]>;
    setCursorPos(x: number, y: number): void;
    getCursorBlink(): boolean;
    setCursorBlink(blink: boolean): void;
    isColor(): boolean;
    isColour(): boolean;
    getSize(mode?: boolean | number): MultiReturn<[number, number]>;
    scroll(n: number): void;
    getTextColor(): Color;
    getTextColour(): Colour;
    setTextColor(color: Color): void;
    setTextColour(color: Colour): void;
    getBackgroundColor(): Color;
    getBackgroundColour(): Colour;
    setBackgroundColor(color: Color): void;
    setBackgroundColour(color: Colour): void;
    getPaletteColor(color: Color): MultiReturn<[number, number, number]>;
    getPaletteColour(color: Colour): MultiReturn<[number, number, number]>;
    setPaletteColor(color: Color, rgb: number): void;
    setPaletteColor(color: Color, r: number, g: number, b: number): void;
    setPaletteColour(color: Colour, rgb: number): void;
    setPaletteColour(color: Colour, r: number, g: number, b: number): void;
    getGraphicsMode(): boolean | number;
    setGraphicsMode(mode: boolean | number): void;
    getPixel(x: number, y: number): number;
    setPixel(x: number, y: number, color: Color): void;
    getPixels(x: number, y: number, width: number, height: number, asString?: boolean): (string | Color[])[];
    setPixels(x: number, y: number, data: Color | (string | Color[])[]): void;
    getFrozen(): boolean;
    setFrozen(frozen: boolean): void;
}

declare namespace term {
    function redirect(term: ITerminal): ITerminal;
    function current(): ITerminal;
    function native(): ITerminal;
    function screenshot(): void;
    function showMouse(mouse: boolean): void;
    function write(text: string): void;
    function blit(text: string, textColors: string, backgroundColors: string): void;
    function clear(): void;
    function clearLine(): void;
    function getCursorPos(): MultiReturn<[number, number]>;
    function setCursorPos(x: number, y: number): void;
    function getCursorBlink(): boolean;
    function setCursorBlink(blink: boolean): void;
    function isColor(): boolean;
    function isColour(): boolean;
    function getSize(mode?: boolean | number): MultiReturn<[number, number]>;
    function scroll(n: number): void;
    function getTextColor(): Color;
    function getTextColour(): Colour;
    function setTextColor(color: Color): void;
    function setTextColour(color: Colour): void;
    function getBackgroundColor(): Color;
    function getBackgroundColour(): Colour;
    function setBackgroundColor(color: Color): void;
    function setBackgroundColour(color: Colour): void;
    function getPaletteColor(color: Color): MultiReturn<[number, number, number]>;
    function getPaletteColour(color: Colour): MultiReturn<[number, number, number]>;
    function setPaletteColor(color: Color, rgb: number): void;
    function setPaletteColor(color: Color, r: number, g: number, b: number): void;
    function setPaletteColour(color: Colour, rgb: number): void;
    function setPaletteColour(color: Colour, r: number, g: number, b: number): void;
    function getGraphicsMode(): boolean | number;
    function setGraphicsMode(mode: boolean | number): void;
    function getPixel(x: number, y: number): number;
    function setPixel(x: number, y: number, color: Color): void;
    function getPixels(x: number, y: number, width: number, height: number, asString?: boolean): (string | Color[])[];
    function setPixels(x: number, y: number, data: Color | (string | Color[])[]): void;
    function getFrozen(): boolean;
    function setFrozen(frozen: boolean): void;
}
declare class UnserializeJSONOptions {
    nbt_style: boolean;
    parse_null: boolean;
}

declare namespace textutils {
    var empty_json_array: Object;
    var json_null: Object;
    function slowWrite(text: string, rate?: number): void;
    function slowPrint(text: string, rate?: number): void;
    function formatTime(time: number, hour24?: boolean): string;
    function pagedPrint(text: string, freeLines?: number): number;
    function tabulate(...args: (Object | Color)[]): void;
    function pagedTabulate(...args: (Object | Color)[]): void;
    function serialize(tab: any): string;
    function serialise(tab: any): string;
    function serializeJSON(tab: any, nbtStyle?: boolean): string;
    function serialiseJSON(tab: any, nbtStyle?: boolean): string;
    function unserialize(str: string): any;
    function unserialise(str: string): any;
    function unserializeJSON(str: string, options?: UnserializeJSONOptions): any;
    function unserialiseJSON(str: string, options?: UnserializeJSONOptions): any;
    function urlEncode(url: string): string;
    function complete(searchText: string, searchTable?: any): string[];
}
/** @customConstructor vector.new */
declare class Vector {
    constructor(x: number, y: number, z: number);
    public add(this: Vector, o: Vector): Vector;
    public sub(this: Vector, o: Vector): Vector;
    public mul(this: Vector, o: Vector): Vector;
    public div(this: Vector, o: Vector): Vector;
    public unm(this: Vector): Vector;
    public dot(this: Vector, o: Vector): Vector;
    public cross(this: Vector, o: Vector): Vector;
    public length(this: Vector): number;
    public normalize(this: Vector): Vector;
    public round(this: Vector, tolerance?: number): Vector;
    public tostring(this: Vector): string;
}
/** @customConstructor window.create */
declare class Window implements ITerminal {
    constructor(parent: ITerminal, x: number, y: number, width: number, height: number, visible?: boolean);
    public write(text: string): void;
    public blit(text: string, textColors: string, backgroundColors: string): void;
    public clear(): void;
    public clearLine(): void;
    public getCursorPos(): MultiReturn<[number, number]>;
    public setCursorPos(x: number, y: number): void;
    public getCursorBlink(): boolean;
    public setCursorBlink(blink: boolean): void;
    public isColor(): boolean;
    public isColour(): boolean;
    public getSize(mode?: boolean | number): MultiReturn<[number, number]>;
    public scroll(n: number): void;
    public getTextColor(): Color;
    public getTextColour(): Colour;
    public setTextColor(color: Color): void;
    public setTextColour(color: Colour): void;
    public getBackgroundColor(): Color;
    public getBackgroundColour(): Colour;
    public setBackgroundColor(color: Color): void;
    public setBackgroundColour(color: Colour): void;
    public getPaletteColor(color: Color): MultiReturn<[number, number, number]>;
    public getPaletteColour(color: Colour): MultiReturn<[number, number, number]>;
    public setPaletteColor(color: Color, rgb: number): void;
    public setPaletteColor(color: Color, r: number, g: number, b: number): void;
    public setPaletteColour(color: Colour, rgb: number): void;
    public setPaletteColour(color: Colour, r: number, g: number, b: number): void;
    public getGraphicsMode(): boolean | number;
    public setGraphicsMode(mode: boolean | number): void;
    public getPixel(x: number, y: number): number;
    public setPixel(x: number, y: number, color: Color): void;
    public getPixels(x: number, y: number, width: number, height: number, asString?: boolean): (string | Color[])[];
    public setPixels(x: number, y: number, data: Color | (string | Color[])[]): void;
    public getFrozen(): boolean;
    public setFrozen(frozen: boolean): void;
    public getVisible(): boolean;
    public setVisible(visible: boolean): void;
    public redraw(): void;
    public restoreCursor(): void;
    public getPosition(): MultiReturn<[number, number]>;
    public reposition(x: number, y: number, width?: number, height?: number): void;
}
