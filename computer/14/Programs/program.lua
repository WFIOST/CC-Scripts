local MetalInfuser = peripheral.find("mekanism:metallurgic_infuser");

print("metallurgic_infuser WRAPPED!");


print("Methods:\n\n")

for k, v in pairs(MetalInfuser) do
    print(v);
    print(k);
    print();
end

print(MetalInfuser.list());
print(MetalInfuser.getEnergy());