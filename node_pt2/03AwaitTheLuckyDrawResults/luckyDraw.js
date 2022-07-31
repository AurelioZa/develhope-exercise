function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

async function getResult() {
    try{
        const result = await luckyDraw("Joe")
        const result1 = await luckyDraw("Joe")
        const result2 = await luckyDraw("Joe")
        console.log(result)
        console.log(result1)
        console.log(result2)
    }
    catch (err) { console.error(err); }
}

getResult()