local MetalInfuser = peripheral.find("mekanism:metallurgic_infuser");

print("metallurgic_infuser WRAPPED!");

for i = 1, MetalInfuser, 1 do
    print(MetalInfuser[i]);
end