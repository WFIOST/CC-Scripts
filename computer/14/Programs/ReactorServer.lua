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

local methods = {}
for k, v in pairs(Reactor) do
  if type(v) == "function" then -- so we don't get any other things that might cause errors
    methods[#methods + 1] = k
  end
end



Modem.open(Ports.TRANSMIT);

Modem.open(Ports.RECIVE);

Modem.transmit(Ports.TRANSMIT, Ports.RECIVE, methods);