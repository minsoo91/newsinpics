NewsReader.Views.FeedsShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },
  
  template: JST["feeds/show"],
  
  render: function () {
    var content = this.template({feed: this.model});

    this.$el.html(content);
    this.$el.gridalicious({
	  width: 300
	}) 
    return this;
  }
});
