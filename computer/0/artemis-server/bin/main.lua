--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]

local ____modules = {}
local ____moduleCache = {}
local ____originalRequire = require
local function require(file, ...)
    if ____moduleCache[file] then
        return ____moduleCache[file].value
    end
    if ____modules[file] then
        local module = ____modules[file]
        ____moduleCache[file] = { value = (select("#", ...) > 0) and module(...) or module(file) }
        return ____moduleCache[file].value
    else
        if ____originalRequire then
            return ____originalRequire(file)
        else
            error("module '" .. file .. "' not found")
        end
    end
end
____modules = {
["event"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
-- Lua Library inline imports
function __TS__Class(self)
    local c = {prototype = {}}
    c.prototype.__index = c.prototype
    c.prototype.constructor = c
    return c
end

function __TS__New(target, ...)
    local instance = setmetatable({}, target.prototype)
    instance:____constructor(...)
    return instance
end

function __TS__ArraySlice(list, first, last)
    local len = #list
    local relativeStart = first or 0
    local k
    if relativeStart < 0 then
        k = math.max(len + relativeStart, 0)
    else
        k = math.min(relativeStart, len)
    end
    local relativeEnd = last
    if last == nil then
        relativeEnd = len
    end
    local final
    if relativeEnd < 0 then
        final = math.max(len + relativeEnd, 0)
    else
        final = math.min(relativeEnd, len)
    end
    local out = {}
    local n = 0
    while k < final do
        out[n + 1] = list[k + 1]
        k = k + 1
        n = n + 1
    end
    return out
end

____symbolMetatable = {
    __tostring = function(self)
        return ("Symbol(" .. (self.description or "")) .. ")"
    end
}
function __TS__Symbol(description)
    return setmetatable({description = description}, ____symbolMetatable)
end
Symbol = {
    iterator = __TS__Symbol("Symbol.iterator"),
    hasInstance = __TS__Symbol("Symbol.hasInstance"),
    species = __TS__Symbol("Symbol.species"),
    toStringTag = __TS__Symbol("Symbol.toStringTag")
}

function __TS__InstanceOf(obj, classTbl)
    if type(classTbl) ~= "table" then
        error("Right-hand side of 'instanceof' is not an object", 0)
    end
    if classTbl[Symbol.hasInstance] ~= nil then
        return not (not classTbl[Symbol.hasInstance](classTbl, obj))
    end
    if type(obj) == "table" then
        local luaClass = obj.constructor
        while luaClass ~= nil do
            if luaClass == classTbl then
                return true
            end
            luaClass = luaClass.____super
        end
    end
    return false
end

local ____exports = {}
____exports.CharEvent = __TS__Class()
local CharEvent = ____exports.CharEvent
CharEvent.name = "CharEvent"
function CharEvent.prototype.____constructor(self)
    self.character = ""
end
function CharEvent.prototype.get_name(self)
    return "char"
end
function CharEvent.prototype.get_args(self)
    return {self.character}
end
function CharEvent.init(self, args)
    if (not (type(args[1]) == "string")) or (args[1] ~= "char") then
        return nil
    end
    local ev = __TS__New(____exports.CharEvent)
    ev.character = args[2]
    return ev
end
____exports.KeyEvent = __TS__Class()
local KeyEvent = ____exports.KeyEvent
KeyEvent.name = "KeyEvent"
function KeyEvent.prototype.____constructor(self)
    self.key = 0
    self.isHeld = false
    self.isUp = false
end
function KeyEvent.prototype.get_name(self)
    return (self.isUp and "key_up") or "key"
end
function KeyEvent.prototype.get_args(self)
    return {
        self.key,
        ((self.isUp and (function() return nil end)) or (function() return self.isHeld end))()
    }
end
function KeyEvent.init(self, args)
    if (not (type(args[1]) == "string")) or ((args[1] ~= "key") and (args[1] ~= "key_up")) then
        return nil
    end
    local ev = __TS__New(____exports.KeyEvent)
    ev.key = args[2]
    ev.isUp = args[1] == "key_up"
    ev.isHeld = ((ev.isUp and (function() return false end)) or (function() return args[3] end))()
    return ev
end
____exports.TerminateEvent = __TS__Class()
local TerminateEvent = ____exports.TerminateEvent
TerminateEvent.name = "TerminateEvent"
function TerminateEvent.prototype.____constructor(self)
end
function TerminateEvent.prototype.get_name(self)
    return "terminate"
end
function TerminateEvent.prototype.get_args(self)
    return {}
end
function TerminateEvent.init(self, args)
    if (not (type(args[1]) == "string")) or (args[1] ~= "terminate") then
        return nil
    end
    local ev = __TS__New(____exports.TerminateEvent)
    return ev
end
____exports.MouseEventType = MouseEventType or ({})
____exports.MouseEventType.Click = 0
____exports.MouseEventType[____exports.MouseEventType.Click] = "Click"
____exports.MouseEventType.Up = 1
____exports.MouseEventType[____exports.MouseEventType.Up] = "Up"
____exports.MouseEventType.Scroll = 2
____exports.MouseEventType[____exports.MouseEventType.Scroll] = "Scroll"
____exports.MouseEventType.Drag = 3
____exports.MouseEventType[____exports.MouseEventType.Drag] = "Drag"
____exports.MouseEventType.Touch = 4
____exports.MouseEventType[____exports.MouseEventType.Touch] = "Touch"
____exports.MouseEventType.Move = 5
____exports.MouseEventType[____exports.MouseEventType.Move] = "Move"
____exports.MouseEvent = __TS__Class()
local MouseEvent = ____exports.MouseEvent
MouseEvent.name = "MouseEvent"
function MouseEvent.prototype.____constructor(self)
    self.button = 0
    self.x = 0
    self.y = 0
    self.side = nil
    self.type = ____exports.MouseEventType.Click
end
function MouseEvent.prototype.get_name(self)
    return ({[____exports.MouseEventType.Click] = "mouse_click", [____exports.MouseEventType.Up] = "mouse_up", [____exports.MouseEventType.Scroll] = "mouse_scroll", [____exports.MouseEventType.Drag] = "mouse_drag", [____exports.MouseEventType.Touch] = "monitor_touch", [____exports.MouseEventType.Move] = "mouse_move"})[self.type]
end
function MouseEvent.prototype.get_args(self)
    return {
        (((self.type == ____exports.MouseEventType.Touch) and (function() return self.side end)) or (function() return self.button end))(),
        self.x,
        self.y
    }
end
function MouseEvent.init(self, args)
    if not (type(args[1]) == "string") then
        return nil
    end
    local ev = __TS__New(____exports.MouseEvent)
    local ____type = args[1]
    if ____type == "mouse_click" then
        ev.type = ____exports.MouseEventType.Click
        ev.button = args[2]
        ev.side = nil
    elseif ____type == "mouse_up" then
        ev.type = ____exports.MouseEventType.Up
        ev.button = args[2]
        ev.side = nil
    elseif ____type == "mouse_scroll" then
        ev.type = ____exports.MouseEventType.Scroll
        ev.button = args[2]
        ev.side = nil
    elseif ____type == "mouse_drag" then
        ev.type = ____exports.MouseEventType.Drag
        ev.button = args[2]
        ev.side = nil
    elseif ____type == "monitor_touch" then
        ev.type = ____exports.MouseEventType.Touch
        ev.button = 0
        ev.side = args[2]
    elseif ____type == "mouse_move" then
        ev.type = ____exports.MouseEventType.Move
        ev.button = args[2]
        ev.side = nil
    else
        return nil
    end
    ev.x = args[3]
    ev.y = args[4]
    return ev
end
____exports.GenericEvent = __TS__Class()
local GenericEvent = ____exports.GenericEvent
GenericEvent.name = "GenericEvent"
function GenericEvent.prototype.____constructor(self)
    self.args = {}
end
function GenericEvent.prototype.get_name(self)
    return self.args[1]
end
function GenericEvent.prototype.get_args(self)
    return __TS__ArraySlice(self.args, 1)
end
function GenericEvent.init(self, args)
    local ev = __TS__New(____exports.GenericEvent)
    ev.args = args
    return ev
end
local eventInitializers = {____exports.CharEvent.init, ____exports.KeyEvent.init, ____exports.TerminateEvent.init, ____exports.MouseEvent.init, ____exports.GenericEvent.init}
function ____exports.pullEventRaw(self, filter)
    if filter == nil then
        filter = nil
    end
    local args = table.pack(
        coroutine.yield(filter)
    )
    for ____, init in ipairs(eventInitializers) do
        local ev = init(nil, args)
        if ev ~= nil then
            return ev
        end
    end
    return ____exports.GenericEvent:init(args)
end
function ____exports.pullEvent(self, filter)
    if filter == nil then
        filter = nil
    end
    local ev = ____exports.pullEventRaw(nil, filter)
    if __TS__InstanceOf(ev, ____exports.TerminateEvent) then
        error("Terminated", 0)
    end
    return ev
end
function ____exports.pullEventRawAs(self, ____type, filter)
    if filter == nil then
        filter = nil
    end
    local ev = ____exports.pullEventRaw(nil, filter)
    if __TS__InstanceOf(ev, ____type) then
        return ev
    else
        return nil
    end
end
function ____exports.pullEventAs(self, ____type, filter)
    if filter == nil then
        filter = nil
    end
    local ev = ____exports.pullEvent(nil, filter)
    if __TS__InstanceOf(ev, ____type) then
        return ev
    else
        return nil
    end
end
return ____exports
 end,
["main"] = function(...) 
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
print("Hello, World!")
local function testFunction(self)
    print("lol 500 lines")
end
return ____exports
 end,
}
return require("main", ...)
