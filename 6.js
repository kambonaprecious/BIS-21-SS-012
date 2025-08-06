// Using continue to skip specific iterations
console.log("\n Using continue to skip even numbers");

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {

    console.log(i, "is even - skipping");
    continue; // Skips the rest of this iteration
  }
  console.log("Processing odd number:", i);
}

