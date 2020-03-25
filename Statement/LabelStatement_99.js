
loop1:
for (let x = 1; x <= 9; x++) {
    loop2:
    for (let y = 1; y <= 9; y++) {
        if (x >= 5) {
            break loop1;
        }

        if (x == 2) {
            continue loop1;
        }

        if (y > 3) {
            break loop2;
        }

        console.log(`${x}x${y} = ${x * y}`);
    }
    console.log('.'.repeat(60));
}
