define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');

	var ThemeFont = _.extend({

    initialize: function() {
        this.listenToOnce(Adapt, "app:dataReady", this.onDataReady);
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
			_.delay(_.bind(function(){
				var language = Adapt.offlineStorage.get("lang");
				$('body').removeClass("unicode-font");
				// Hindi - Marathi - Macedonian - Polish
	      if(language == "hi" | language == "mr" | language == "mk" | language == "pl") {
	        $('body').addClass("unicode-font");
	      }
      }, this), 500);
		}

	}, Backbone.Events);

	ThemeFont.initialize();

	return ThemeFont;

});
