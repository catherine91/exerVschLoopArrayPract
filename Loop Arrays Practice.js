//var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

ArrayList<String>officeItems = new ArrayList<String>();
officeItems.add("stapler");
officeItems.add("monitor");
officeItems.add("computer");
officeItems.add("desk");
officeItems.add("lamp");
officeItems.add("computer");
officeItems.add("lamp");
officeItems.add("stapler");
officeItems.add("computer");
officeItems.add("computer");

long count = officeItems.stream().filter(officeItems -> "computer".equals(officeItems)).count();


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  {for (peopleWhoWantToSeeMadMaxFuryRoad.age>18) {MediaKeySystemAccess.out.println("<old enough");}
  for (peopleWhoWantToSeeMadMaxFuryRoad.age<18) {MediaKeySystemAccess.out.println("<not old enough");}}