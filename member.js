function skillsMember() {
  // console.log('skillsMember');
  var member = document.getElementById('member');
  if (member) {
    var skills = member.getElementsByClassName('skills');
    if (skills && skills.length > 0) {
      var skillsCount = skills.length;
      for (var i = 0; i < skillsCount; i++) {
        var skill = skills[i];
        var skillItems = skill.getElementsByClassName('skill');
        if (skillItems && skillItems.length > 0) {
          var skillItemsCount = skillItems.length;
          for (var j = 0; j < skillItemsCount; j++) {
            var skillItem = skillItems[j];
            var skillItemTitle = skillItem.getElementsByClassName('skill-title');
            var skillItemProgressBar = skillItem.getElementsByClassName('progress-bar');
            if (skillItemTitle && skillItemTitle.length > 0 && skillItemProgressBar && skillItemProgressBar.length > 0) {
              var skillItemTitleText = skillItemTitle[0].innerText;
              var skillItemProgressBarWidth = skillItemProgressBar[0].style.width;
              skillItemProgressBar[0].innerText = skillItemProgressBarWidth;
              skillItemProgressBar[0].style.width = '0';
              var skillItemProgressBarWidthValue = skillItemProgressBarWidth.replace('%', '');
              var skillItemProgressBarWidthValueInt = parseInt(skillItemProgressBarWidthValue);
              var skillItemProgressBarWidthValueIntInterval = setInterval(function () {
                if (skillItemProgressBarWidthValueInt < 100) {
                  skillItemProgressBarWidthValueInt++;
                  skillItemProgressBar[0].style.width = skillItemProgressBarWidthValueInt + '%';
                  skillItemProgressBar[0].innerText = skillItemProgressBarWidthValueInt + '%';
                } else {
                  clearInterval(skillItemProgressBarWidthValueIntInterval);
                }
              }, 10);
            }
          }
        }
      }
    }
  }
}