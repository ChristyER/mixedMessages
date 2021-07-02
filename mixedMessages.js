const interest = ["flowers", "veg", "landscaping"];
const flowers = ["You love wonderful smells: plant a rose!", "You love flowering climbers: plant a clematis!", "You love Mediterranean plants: get some lavender!"];
const veg = ["You like it crunchy: grow carrots!", "You love Halloween: grow pumpkins!", "Your favourite colour is red: grow beetroot!"];
const landscaping = ["You like being creative: design a Mediterranean flowerbed!", "You love water features: build a pond!", "You love a sunny spot: design an ornamental patio area!"];
const quote = ["'Life begins the day you start a garden.' - Chinese proverb", "'Gardening adds years to your life and life to your years.' - Unknown", "'There are no gardening mistakes, only experiments.' - JKP", "'The garden suggests there might be a place where we can meet nature halfway.' - MP", "'There are always flowers for those who want to see them.' - HM", "'All gardeners know better than other gardeners.' - Chinese proverb"];

const createMixedMessage = () => {
    const randInterest = interest[Math.floor(Math.random()*(interest.length))];
    console.log(`You are interested in ${randInterest}.`);
    if (randInterest === "flowers") {
        console.log(flowers[Math.floor(Math.random()*(flowers.length))]);
    } else if (randInterest === "veg") {
        console.log(veg[Math.floor(Math.random()*(veg.length))]);
    } else {
        console.log(landscaping[Math.floor(Math.random()*(landscaping.length))]);
    }
    console.log(quote[Math.floor(Math.random()*(quote.length))]);
};

createMixedMessage();


