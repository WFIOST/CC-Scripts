for i = 1, 13, 1 do
    for j = 1, 13, 1 do
        turtle.dig()
        turtle.forward()
        
        turtle.turnLeft()
        turtle.turnLeft()
        turtle.place()
        turtle.turnLeft()
        turtle.turnLeft()
    end
    
    local status = i % 2
    
    if status == 0 then
        turtle.turnRight()
    else
        turtle.turnLeft()
    end
    turtle.dig()
    turtle.forward()
    if status == 0 then  
        turtle.turnRight()
    else
        turtle.turnLeft() 
    end   
end

