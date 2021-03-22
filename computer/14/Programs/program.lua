local Ports = 
{
    TRANSMIT = 420,
    RECIVE = 69
}

local Reactor = peripheral.find("BigReactors-Reactor");
print("Reactor WRAPPED!");
local Modem = peripheral.find("modem");
print("modem WRAPPED!");

print("Methods:\n\n")

local methods = {};

for k, v in pairs(Reactor) do
    print(v);
    print("Function name: " .. k);
    print();

    methods[k] = v;
end



Modem.open(Ports.TRANSMIT);

Modem.open(Ports.RECIVE);

Modem.transmit(Ports.TRANSMIT, Ports.RECIVE, methods);