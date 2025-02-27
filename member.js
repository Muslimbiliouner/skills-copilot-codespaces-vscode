function skillsmember() {
  return {
    restrict: 'E',
    scope: {
      skills: '=info'
    },
    template: '<div ng-repeat="skill in skills">{{ skill }}</div>'
  };
}