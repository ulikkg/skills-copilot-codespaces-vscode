function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 25,
    skills: ['JS', 'CSS', 'HTML', 'PHP', 'Python', 'Ruby', 'Java']
    
    addSkill: function(skill) {
      this.skills.push(skill);
    }
    //method to list all skills
    listSkills: function() {
      for (var i = 0; i < this.skills.length; i++) {
        console.log(this.skills[i]);        
  
  };

  return member;
}