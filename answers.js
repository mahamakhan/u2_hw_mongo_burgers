// create 5 burgers (at least 3 should be beef)
db.mongoburgers.insertMany([
  {
    protien: 'Chicken',
    cheese: true,
    toppings: ['Mayonnaise', 'Onions', 'Mushrooms', 'Olives']
  },
  {
    protien: 'Beef',
    cheese: false,
    toppings: ['Mayonnaise', 'Onions', 'Pickles', 'Ketchup']
  },
  {
    protien: 'Beef',
    cheese: true,
    toppings: ['Siracha', 'Guacamole', 'Tomatoes']
  },
  {
    protien: 'Beef',
    cheese: true,
    toppings: ['Siracha', 'Kimchi', 'Fries', 'Mustard']
  },
  {
    protien: 'Impossible',
    true: 28,
    toppings: ['Mayonnaise', 'Olives', 'Onions', 'Tomatoes']
  },
  {
    protien: 'Fish',
    cheese: false,
    toppings: ['Mayonnaise', 'Relish', 'Tomatoes', 'Pickles']
  }
])
// find all the burgers
db.mongoburgers.find({})
// show just the meat of each burger
db.mongoburgers.find({}, { protien: 1 })
// show just the toppings of each burger
db.mongoburgers.find({}, { toppings: 1 })
// show everything but the cheese
db.mongoburgers.find({ cheese: 1 }, { protien: 1 })
// find all the burgers with beef
db.mongoburgers.find({ protien: 'Beef' })
// find all the burgers that are not beef
db.mongoburgers.find({ protien: { $ne: 'Beef' } })
// find the first burger with cheese
db.mongoburgers.findOne({ cheese: true })
// find one and update the first burger with cheese to have a property of 'double cheese'
db.mongoburgers.updateOne(
  { cheese: true },
  { $set: { cheese: 'Double Cheese' } }
)
// find the burger you updated to have double cheese
db.mongoburgers.find({ cheese: 'Double Cheese' })
// find and update all the beef burgers to be 'veggie'
db.users.updateMany({ protien: 'Beef' }, { protien: 'Veggie' })
// delete one of your veggie burgers
db.mongoburgers.deleteOne({ protien: 'Veggie' })
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.mongoburgers.deleteMany({ protien: 'Veggie' })
// drop the collection
db.mongoburgers.drop()
//Expected Output
//true

// drop the database
db.dropDatabase()
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'
db.mongoburgers.updateMany({}, { $rename: { cheese: 'pumpkinSpice' } })
// find all the burgers with ketchup (or another topping you used at least once)
db.mongoburgers.find({ toppings: 'ketchup' })
// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burgers.updateMany({}, { $pull: { toppings: 'pickles' } })
// add a topping of 'eggs' to all the beef burgers
db.burgers.updateMany({}, { $push: { toppings: 'eggs' } })
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger
