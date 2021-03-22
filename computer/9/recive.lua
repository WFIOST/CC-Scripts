local Ports = 
{
    TRANSMIT = 420,
    RECIVE = 69
}

local modem = peripheral.find("modem");

modem.open(Ports.RECIVE);
modem.open(Ports.TRANSMIT);


local msgArgs = {os.pullEvent("modem_message")}

print(msgArgs[5]);