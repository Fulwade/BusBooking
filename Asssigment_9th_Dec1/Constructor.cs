using System;
namespace DefaultConstructorExample {
 
class simpleobject {
 
    int num;
    string name;
    simpleobject()
    {
        Console.WriteLine("Constructor Called");
    }
    public static void Main()
    {

    simpleobject obj = new simpleobject();
        Console.WriteLine(obj.name);
        Console.WriteLine(obj.num);
    }
}
}
