function radioCrystals(arr) {
    let cut = {
        name: 'Cut',
        func: (chunk) => chunk / 4
    };
    let lap = {
        name: 'Lap',
        func: (chunk) => chunk * 0.8
    };
    let grind = {
        name: 'Grind',
        func: (chunk) => chunk - 20
    };
    let etch = {
        name: 'Etch',
        func: (chunk) => chunk - 2
    };
    let xRay = {
        name: 'X-ray',
        func: (chunk) => chunk + 1
    };
    let transport = {
        name: 'Transporting and washing',
        func: (chunk) => Math.floor(chunk)
    };
    let operations = [cut, lap, grind, etch];

    function processCrystal(chunk, targetThickness) {
        output = `Processing chunk ${chunk} microns\n`;
        let opIndex = 0;
        let opCount = 0;

        while (true) {
            if (chunk == targetThickness || Math.floor(chunk) == targetThickness - 1) {
                output += `${operations[opIndex].name} x${opCount}\n`;
                output += `${transport.name}\n`;
                if (Math.floor(chunk) == targetThickness - 1) {
                    output += `${xRay.name} x1\n`;
                    chunk++;
                }
                break;
            }

            let operationProduct = operations[opIndex].func(chunk);

            if (Math.floor(operationProduct) < targetThickness - 1) {
                output += `${operations[opIndex].name} x${opCount}\n`;
                output += `${transport.name}\n`;
                chunk = transport.func(chunk);
                opCount = 0;
                opIndex++;
                continue;
            }

            opCount++;
            chunk = operationProduct;
        }

        output += `Finished crystal ${chunk} microns\n`;
        return output;
    }

    let targetThickness = arr[0];
    let output = '';
    for (var i = 1; i < arr.length; i++) {
        output += processCrystal(arr[i], targetThickness);
    }
}
