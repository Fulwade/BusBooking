using System;
namespace AbstractClass {
  abstract class Animal {
    public abstract void makeSound();
  }
  class Dog : Animal {
    public override void makeSound() {
      Console.WriteLine("Doggy");
    }
  }
  class Program  {
    static void Main (string [] args) {
      Dog obj = new Dog();
      obj.makeSound();    
      Console.ReadLine(); 
    }
  }
}
