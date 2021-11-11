local export = {};

export.status_list = {
    READY   = "ready",
    BUSY    = "busy",
    OFFLINE = "offline",
    ERROR   = "error"
};

export.action_list = {
    IDLE = "idle"
};

export.READY = {
    status = export.status_list.READY,
    action = export.action_list.IDLE
};


return export;