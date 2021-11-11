local common    = require("common");
local messages  = require("messages");
local protocols = require("protocols");

--#region Constants
local MODEM_POSITION = common.sides.BACK;
local SERVER_NAME = "Artemis-Server";
--#endregion

rednet.open(MODEM_POSITION);
rednet.host(protocols.SERVER, SERVER_NAME);



rednet.broadcast(messages.READY, protocols.SERVER);

rednet.close(MODEM_POSITION);
