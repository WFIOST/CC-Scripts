print("I NEED TO FUCKING SHIT!!!!!");

local mx = arg[1];
local my = arg[2];
local mz = arg[3];

if mx == nil then
    mx = 0;
end

if my == nil then
    my = 0;
end

if mz == nil then
    mz = 0;
end

for y = 0, my, 1 do
    for x = 0, mx, 1 do
        for z = 0, mz, 1 do
            turtle.digUp();
            turtle.up();
        end
        
        turtle.dig()
        turtle.forward();

        for z = mz, 0, -1 do
            turtle.digDown();
            turtle.down();
        end
        turtle.dig();
        turtle.forward();
    end
    for x = mx, 0, -1 do
        turtle.back();
    end
    turtle.turnRight();
    turtle.dig();
    turtle.up();
    turtle.dig();
    turtle.down();
    turtle.forward();
    turtle.turnLeft();
end