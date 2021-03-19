local MetalInfuser = peripheral.find("mekanism:metallurgic_infuser");

print("metallurgic_infuser WRAPPED!");


print("Methods:\n\n")

for i,method in pairs(MetalInfuser) do
    print(method);
end