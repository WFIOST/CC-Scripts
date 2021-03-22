local Reactor = peripheral.find("BigReactors-Reactor");
print("Reactor WRAPPED!");
local Modem = peripheral.find("modem");
print("modem WRAPPED!");

print("Methods:\n\n")

for k, v in pairs(Reactor) do
    print(v);
    print("Function name: " .. k);
    print();
end

local ports = 
{
    TRANSMIT = 420,
    RECIVE = 69
}

Modem.open(ports.TRANSMIT);

Modem.open(ports.RECIVE);

Modem.transmit(ports.TRANSMIT, ports.RECIVE, "Hello World!");