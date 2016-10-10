///do this

Shortly.LoginView = Backbone.View.extend({
  className: 'user',

  template: Templates['login'],

  events: {
    'submit': 'login'
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  username: function(e) {
    e.preventDefault();
    var $form = this.$el.find('form .text');
    var user = new User(
      { username: $form.username.val(),
        password: $form.password.val()
    });
    user.on('submit', this.startSpinner, this);
    //put in sign in login 
    user.on('sync', this.success, this);
    user.on('error', this.failure, this);
    user.save({});
    $form.val('');
  },

  success: function(user) {
    this.stopSpinner();
    //show them the links
    var view = new userView({ model: user });
    this.$el.find('.message').append(view.render().$el.hide().fadeIn());
  },

  failure: function(model, res) {
    this.stopSpinner();
    this.$el.find('.message')
      .html('Please re-enter your password')
      .addClass('error');
    return this;
  },

  startSpinner: function() {
    this.$el.find('img').show();
    this.$el.find('form input[type=submit]').attr('disabled', 'true');
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  },

  stopSpinner: function() {
    this.$el.find('img').fadeOut('fast');
    this.$el.find('form input[type=submit]').attr('disabled', null);
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  }
});
