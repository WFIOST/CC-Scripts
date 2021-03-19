local MetalInfuser = peripheral.find("mekanism:metallurgic_infuser");

print("metallurgic_infuser WRAPPED!");


print("Methods:\n\n")

for method, i in pairs(MetalInfuser) do
    print(i .. " " .. method);
end