var Font = function(font){
    this.family = ko.observable(font.family);
    this.variants = ko.observableArray(font.variants);
    this.variantString = ko.computed(function(){
        return this.variants().join(",").replace("regular","400").replace("italic","400italic")
    },this);
    this.url = ko.computed(function(){
        return "http://fonts.googleapis.com/css?family="+this.family()+ ":" +this.variantString();
    }, this);
    this.quickUseUrl = ko.computed(function(){
        return "https://www.google.com/fonts#UsePlace:use/Collection:"+this.family().replace(" ","+");
    },this);
    this.category = ko.observable(font.category);
}