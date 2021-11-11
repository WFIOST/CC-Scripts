require("../common/common")

local export = {};

export.sides = {
    FRONT   = "front",
    BACK    = "back",
    LEFT    = "left",
    RIGHT   = "right",
    TOP     = "top",
    BOTTOM  = "bottom"
};

export.events = {
    HTTP_SUCCESS = "http_success"
}

return export;