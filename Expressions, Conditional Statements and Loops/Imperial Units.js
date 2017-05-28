/**
 * Created by tania on 28.5.2017 г..
 */
function convert(inches) {
    let feet = Math.floor(inches / 12);
    let remainderInInches = inches % 12;

    console.log(`${feet}'-${remainderInInches}"`);
}