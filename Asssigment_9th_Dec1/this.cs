
using System;
namespace ashish {

class ash {
	public string Name;

	public string GetName()
	{
		return Name;
	}


	public void SetName(string Name)
	{
		this.Name = Name;
	}
}

class program {
	public static void Main()
	{
		ash obj = new ash();
		obj.SetName("Capgemini");
		Console.WriteLine(obj.GetName());
	}
}
}
