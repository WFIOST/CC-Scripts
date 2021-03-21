local MetalInfuser = peripheral.find("BigReactors-Reactor");

print("Reactor WRAPPED!");


print("Methods:\n\n")

for k, v in pairs(MetalInfuser) do
    print(v);
    print("Function name: " .. k);
    print();
end

