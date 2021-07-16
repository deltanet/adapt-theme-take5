define([
  'core/js/adapt'
], function(Adapt) {

  var ThemeFont = _.extend({

    initialize: function() {
        this.listenToOnce(Adapt, 'app:dataReady', this.onDataReady);
    },

    onDataReady: function() {
        this.setupEventListeners();
        this.setFont();
    },

    setupEventListeners: function() {
      this.listenTo(Adapt, 'remove', this.remove);
      this.listenTo(Adapt, 'languagepicker:changelanguage:yes', this.setFont);
    },

    setFont: function() {
      _.delay(function(){
        var language = Adapt.offlineStorage.get('lang') ? Adapt.offlineStorage.get('lang') : Adapt.config.get('_defaultLanguage');
        $('body').removeClass("unicode-font");
        // Hindi - Marathi - Macedonian - Polish
        if(language == "hi" | language == "mr" | language == "mk" | language == "pl") {
          $('body').addClass('unicode-font');
        }
      }.bind(this), 500);
    }

  }, Backbone.Events);

  ThemeFont.initialize();

  return ThemeFont;

});
