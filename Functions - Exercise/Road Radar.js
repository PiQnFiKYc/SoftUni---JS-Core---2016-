function solve(input) {
    let speed = Number(input[0]);
    let zone = input[1];

    let limit = getLimit(zone);
    let infraction = getInFraction(speed,limit);

    if(infraction){
        console.log(infraction);
    }

    function getLimit(zone) {
        switch(zone){
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
    function getInFraction(speed,limit) {
        let overspeed = speed - limit;
        if(overspeed <= 0){
            return false;
        }
        else if (overspeed <= 20){
            return 'speeding';
        }
        else if(overspeed <= 40){
            return 'excessive speeding';
        }
        else return 'reckless driving';
    }
}

//solve([200, 'motorway']);