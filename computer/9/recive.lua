local Ports = 
{
    TRANSMIT = 420,
    RECIVE = 69
}

local modem = peripheral.find("modem");

modem.open(Ports.RECIVE);
modem.open(Ports.TRANSMIT);


local msgArgs = {os.pullEvent("modem_message")}

for k, v in pairs(msgArgs)
do
    print(k);
    print(v);
    print();

    if k == 5 then
        for i, j in pairs(v)
        do
            print(i);
            print(j);
            print();
        end
    end
end