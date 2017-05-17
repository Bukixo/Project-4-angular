angular
  .module('project')
  .controller('StylesShowCtrl', StylesShowCtrl);


StylesShowCtrl.$inject = ['Style', 'User','Comment','$stateParams', '$state', '$auth'];
function StylesShowCtrl(Style, User, Comment, $stateParams, $state, $auth){
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = $auth.getPayload().id;
  vm.style =
  Style.get($stateParams)
  .$promise
  .then(response =>{
    vm.style =response;
    console.log(vm.style.user.name);
  });

  function stylesDelete() {
    vm.style
      .$remove()
      .then(() => $state.go('typesShow'));
  }

  vm.delete = stylesDelete;

  function addComment() {
    vm.comment.style_id = vm.style.id;

    Comment
      .save({ comment: vm.comment })
      .$promise
      .then((comment) => {
        vm.style.comments.push(comment);
        vm.comment = {};
      });
  }

  vm.addComment = addComment;

  function deleteComment(comment) {
    Comment
      .delete({ id: comment.id })
      .$promise
      .then(() => {
        const index = vm.style.comments.indexOf(comment);
        vm.style.comments.splice(index, 1);
      });
  }

  vm.deleteComment = deleteComment;


  function toggleLikes() {

    const index = vm.style.like_ids.indexOf(vm.currentUser);
    if(index > -1) {
      vm.style.like_ids.splice(index, 1);
      vm.style.likes.splice(index, 1);
    } else {
      vm.style.like_ids.push(vm.currentUser);
      vm.style.likes.push(vm.currentUser);
    }
    Style.update({ id: vm.style.id, style: vm.style });
  //  stylesUpdate();
  }

  vm.toggleLikes = toggleLikes;
  //
  // function hasLiked() {
  //   return $auth.getPayload() && vm.style.$resolved && vm.style.likes_ids.includes(vm.currentUser.id);
  // }
  //
  // vm.hasLiked = hasLiked;

}
