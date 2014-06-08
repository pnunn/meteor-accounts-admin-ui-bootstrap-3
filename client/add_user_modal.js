Template.addUserModalInner.events({
  'click .btn-primary': function(event, template) {
    var role = template.find('.btn-group > .btn.active > input').value;
    //console.log(role);

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

    //console.log(options);
    Meteor.call('addUserAndRole', options, function(error) {
      if (error) {
        // optionally use a meteor errors package
        if (typeof Errors === "undefined")
          Log.error('Error: ' + error.reason);
        else {
          Errors.throw(error.reason);
        }
      }
      //console.log("addUserAndRole returned");
    });
  }
});
