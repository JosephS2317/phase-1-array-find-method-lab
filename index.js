

// let findSuperbowlWin = record.find(superbowlWin)
// console.log(findSuperbowlWin)
// function superbowlWin(record){
//     if (record.result === 'W'){
//         console.log(record.year)
//         return record.year
//     } 
//     else {
//         return undefined
//     }
// }

//const superBowlWin = record.find(currRecord => {return currRecord.year === 'W'});

// function superbowlWin(record)
// {
//     return record.result === "W"
// }

// res = record.find(superbowlWin)
// console.log(res.year)
// res.year

// function superbowlWin(record){
//     const superBowlWins =
//     record.find(win => win.result === 'W');
//     console.log(superBowlWins);

//     if (superBowlWins !== "undefined")
//     {
//         return superBowlWins.year
//     }

//     return record.year;
// }

function superbowlWin(record) {
    const winningYear =
    record.find(entry => entry.result==='W')
    return winningYear ? winningYear.year : undefined;
}

const broncosWinYear = superBowlWin();
console.log(broncosWinYear);
