function studentHogwarts() {
  let privateScore = 0;
  let name = null;
  changeScoreBy = function(points) {
    privateScore += points;
  }

  this.setName = function(newName) {
    name = newName;
  }

  this.rewardstudent = function() {
    changeScoreBy(1);
  }

  this.penalizeStudent = function() {
    changeScoreBy(-1);
  }
  this.getScore = function() {
    return (name + ': ' + privateScore);
  }
}

let harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardstudent();
harry.rewardstudent();
harry.rewardstudent();
harry.rewardstudent();
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardstudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
