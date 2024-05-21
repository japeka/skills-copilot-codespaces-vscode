function skillsMember()
{
    this.skills = [];
    this.addSkill = function(skill) {
        this.skills.push(skill);
    }
    this.getSkill = function(index) {
        return this.skills[index];
    }
    this.getSkills = function() {
        return this.skills;
    }
}