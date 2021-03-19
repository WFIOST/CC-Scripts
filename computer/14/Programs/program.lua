local MetalInfuser = peripheral.find("mekanism:metallurgic_infuser");

print("metallurgic_infuser WRAPPED!");

for i, _ in MetalInfuser do
    print(MetalInfuser[i]);
end