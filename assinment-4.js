// // PROBLEM 1 


function seerToMon(seer) {
          var seer = seer / 40;
          return seer;
}

const SomeSheer = seerToMon([100]);
console.log(SomeSheer)

// PROBLEM-2


const shirt = 100;
const pant = 200;
const shoe = 500;



function totalSales(num1, num2, num3) {

          return num1 + num2 + num3;
}

let totoal = totalSales(shirt, pant, shoe);
console.log(totoal)


// PROBLEM 3        

function deliveryCost(TShirts) {
          const Frist100TShits = 100;
          const sec100TShists = 100;

          if (TShirts < 0) {
                    return "Please enter valid number";
          }
          else if (TShirts < 100) {
                    const cost = TShirts * Frist100TShits;
                    return cost;
          }
          else if (TShirts > 100 && TShirts <= 200) {
                    const cost2 = Frist100TShits * 100;
                    const rest = TShirts - Frist100TShits;
                    const cost2All = rest * 80;
                    const totalCost = cost2 + cost2All;
                    return totalCost;
          }
          else if (TShirts > 200) {
                    const const4 = Frist100TShits * 100;
                    const AddAllTShirts = Frist100TShits + sec100TShists;
                    const rest2 = TShirts - AddAllTShirts;
                    const rest2All = rest2 * 50;
                    const AddAllTShirts2 = Frist100TShits + rest2
                    const rest3 = TShirts - AddAllTShirts2;
                    const rest3All = rest3 * 80;
                    const totalCost2 = const4 + rest2All + rest3All;
                    return totalCost2;
          }
          else {
                    return "you have to enter more than 100 or less then 100"
          }





}

const Tshirt = deliveryCost();
console.log(Tshirt);

// Problem 4 

function perfectFriend(name) {
          let small = name[0];
          for (let i = 0; i < name.length; i++) {
                    const element = name[i];
                    if (small.length > element.length) {
                              small = element;
                    }
          }
          return small


}


const MyFriendsName = perfectFriend(["Mottakin", "fahim", 'Redoy', 'Nosib', 'Mizan']);
console.log(MyFriendsName);
