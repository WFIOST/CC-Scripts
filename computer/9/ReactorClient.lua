local Ports = 
{
    TRANSMIT = 420,
    RECIVE = 69
}

local modem = peripheral.find("modem");

modem.open(Ports.RECIVE);
modem.open(Ports.TRANSMIT);

print("WAITING FOR SERVER PING");
local msgArgs = {os.pullEvent("modem_message")};
print("SERVER MESSAGE " .. msgArgs[5] .. " RECIVED");
term.clear();
term.setCursorPos(0,0);

print("ENTER FUNCTION TO GET");
local input = read();

modem.callRemote("BACK", input);
