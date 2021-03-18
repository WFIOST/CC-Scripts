--Variables for the size of the mined area
local mx, my, mz;

---Refuels the turtle
---@param fuelLocation number
---@param refuelPercentage number
---@return boolean status
function RefuelTurtle(fuelLocation, refuelPercentage)
    turtle.select(fuelLocation)

    if turtle.getItemCount(fuelLocation) == 0 or turtle.getItemCount(fuelLocation) == nil then
        print("Fuel Location either has no fuel, or is NIL!");
        return false;
    end

    local selectedItemInfo = turtle.getItemDetail();


    local rfam = refuelPercentage/100 * turtle.getItemCount(fuelLocation);

    local ret = turtle.refuel(rfam)

    if ret == false then
        print("Invalid fuel!");
        return false;
    end

    return true;
end

---Function to check if Inventory is full
---@return boolean status
local function isfull()
    for x = 5, 17, 1 do
        if turtle.getItemCount(x) == 0 then
            return false;
        end
    end
    return true;
end

---Checks and initialises arguments, first argument specifies the number of arguments expected, second argument specifies if it will exit if it errors out
---@param numberOfArgs number
---@param exitIfErr boolean
---@return boolean status
local function initialiseArgs(numberOfArgs, exitIfErr)


    for i = 1, numberOfArgs, 1 do
        if arg[i] == nil then
            print("ERROR, ONE OR MORE ARGUMENTS ARE NIL\nEXITING!");
            if exitIfErr then
                os.exit();
            else
                return false;
            end
        end

        local nextArg = numberOfArgs + 1;

        if arg[nextArg] ~= nil  then
            print("ERROR, MORE THAN EXPECTED NUMBER OF ARGS!");
            if exitIfErr then
                os.exit();
            else
                return false;
            end
        end
    end
    print("Mapping args...");

    mx = arg[1];
    my = arg[2];
    mz = arg[3];

    print("Mapped args! ".. numberOfArgs .. " mapped!");

    return true;
end

---Fun function to make taters say something
---@param message string
function PotatoesSays(message)
    print("Potatoes says: ".. message);
end

---Less fun function to make me (Frityet) say something
---@param message string
function FrityetSays(message)
    print("Frityet says: ".. message);
end

---Mines upwards, adds one to l, and moves up
local function mineUp()
    turtle.digUp();
    turtle.up();
end

---Mines forward, adds one to l, and moves forward
local function mineForward()
    turtle.dig()
    turtle.forward();
end

---Mines down, adds one to l, and moves down
local function digDown()
    turtle.digDown();
    turtle.down();
end

local function MineUpnDown()
    for z = 0, mz, 1 do
        mineUp();
    end

    mineForward();

    for z = mz, 0, -1 do
        digDown();
    end
end

initialiseArgs(3, false);

print("Started mining program!");
PotatoesSays("I NEED TO FUCKING SHIT!!!!!");
FrityetSays("We have peaked");

for y = 0, my, 2 do
    for x = 0, mx, 2 do
        MineUpnDown();
    end
    turtle.turnRight();
    mineForward();
    turtle.turnRight();
    for x = 0, mx, 2 do
        MineUpnDown();
    end
    turtle.turnLeft();
    mineForward();
    turtle.turnLeft();
end

