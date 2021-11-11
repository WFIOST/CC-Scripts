local common = require("common");

local URL<const> = "localhost:5001/productionline/";

local export = {}

---@class EnergyType
export.energy_type = {
    STRESS_UNIT = 0,
    ELECTRICITY = 1,
    NONE        = 2
}

---@class ProductRecipe
export.product_recipe = {
    used_energies = {},
    materials = {},
    products = {}
}

---@class Position
export.position = {
    x = 0,
    y = 0,
    z = 0
}

---@class ProductionLine
export.production_line = {
    ---@type string
    name = "",
    ---@type Position
    position = {},
    stored_items = {},
    ---@type ProductRecipe
    recipe = {}
}

---@param table table
---@return ProductionLine
function export.from_json_table(table)
    ---@type ProductionLine
    local factory = {};
    factory.name = table["name"];

    factory.position = {
        x = table["position"]["x"],
        y = table["position"]["y"],
        z = table["position"]["z"],
    };

    factory.recipe = {
        used_energies = table["recipe"]["usedEnergies"],
        materials = table["recipe"]["materials"],
        products = table["recipe"]["products"]
    };

    factory.stored_items = table["storedItems"];
    return factory;
end

---Gets a factory from the API
---@param name string
---@return ProductionLine
function export.get_factory(name)
    local req_url = URL .. name;
    http.request(req_url);
    local event, url, handle;
    repeat
        io.write("Loading\r");
        io.write("Loading.\r");
        io.write("Loading..\r");
        io.write("Loading...\r");
        event, url, handle = os.pullEvent(common.events.HTTP_SUCCESS);
    until url == req_url;
    return export.from_json_table(textutils.unserialiseJSON(handle.readAll()));
end

---Adds a factory to the database
---@param factory ProductionLine
function export.add_factory(factory)
    local req_url = URL .. name;
    http.request {
        url = name,
        postData = textutils.serialiseJSON(factory)
    };
    local event, url, handle;
    repeat
        io.write("Loading\r");
        io.write("Loading.\r");
        io.write("Loading..\r");
        io.write("Loading...\r");
        event, url, handle = os.pullEvent(common.events.HTTP_SUCCESS);
    until url == req_url;
end

return export