// not really a pattern, more of a technique

// DEFINITION: 
// the simple factory defines an interface for creating objects
// simple factory encapsulates object creation(and business logic) into its own class and uses composition

// Factory patterns:
// - follow the principle of separating what varies from what stays the same
// - allow for clients to program to interfaces, instead of concrete classes
// - allow for easily extensible code

// the limit of the simple factory is that theres little control over object creation, you're limited to the params you pass
// if there are a lot more objects and possibly different categories within those objects, then the factory method pattern is a good alternative

// EXAMPLE
// a space invaders game where items (asteroids, health, rapidfire, time boosts etc) drop into the screen from the top and you shoot them;
// tetris (factory to create pieces, could have some logic in the factory so that not too many pieces of the same type are created at once etc)
