Template.addUserModalInner.events({
  'click .btn-primary': function(event, template) {
    console.log("Done clicked");
    var role = template.find('.btn-group > .btn.active > input').value;
    console.log(role);

    var options = {
      name: template.find('#name').value,
      password: template.find('#password').value,
      email: template.find('#email').value,
      organization: template.find('#organization').value,
      state: template.find('#state').value,
      postcode: template.find('#postcode').value,
      suburb: template.find('#suburb').value,
      contact: template.find('#contact').value,
      delivery: template.find('#delivery').value,
      role: template.find('.btn-group > .btn.active > input').value
    }

    console.log(options);
    Meteor.call('addUserAndRole', options, function(error) {
      if (error) {
        // optionally use a meteor errors package
        if (typeof Errors === "undefined")
          Log.error('Error: ' + error.reason);
        else {
          Errors.throw(error.reason);
        }
      }
      console.log("addUserAndRole returned");
    });
  }

  // 'click .remove-role' : function(event, template) {
  //   var role = this.toString();
  //   var userId = event.currentTarget.getAttribute('data-user-id');

  //   Meteor.call('removeUserRole', userId, role, function(error) {
  //     if (error) {
  //       // optionally use a meteor errors package
  //       if (typeof Errors === "undefined")
  //         Log.error('Error: ' + error.reason);
  //       else {
  //         Errors.throw(error.reason);
  //       }
  //     }

  //     //update the data in the session variable to update modal templates
  //     Session.set('userInScope', Meteor.users.findOne(userId));
  //   });
  // },

  // 'change .admin-user-info' : function(event, template) {
  //   console.log("Got change event");
  //   var ele = event.currentTarget;
  //   console.log(ele);
    //var userId = ele.getAttribute('data-user-id');

    // Meteor.call('updateUserInfo', userId, ele.name, ele.value, function(error) {
    //   if (error)
    //   {
    //     if (typeof Errors === "undefined") Log.error('Error: ' + error.reason);
    //     else Errors.throw(error.reason);
    //     return;
    //   }
    //   Session.set('userInScope', Meteor.users.findOne(userId));
    // });
  // }
});
