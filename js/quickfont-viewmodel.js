var QuickfontViewModel = function() {
  var _apiKey = "YOUR_API_KEY",
    _url = "https://www.googleapis.com/webfonts/v1/webfonts?key=" + _apiKey,
    _self = this;

  _self.fontsList = ko.observableArray([]);

  /**
   * Fetches the webfonts.json from google webfonts
   * ... simplifies it and updates the fontsList array
   */
  _self.getFontsList = function() {
    $.getJSON(_url, function(data) {
      var simplifiedList = _self.getSimplifiedList(data.items);
      _self.fontsList(simplifiedList);
    });
  }
  /**
   * parses the webfonts.json received from
   * google webfonts and converts it into array
   * of Font class instances
   * @param  {json} rawList webfonts.json fetched from google webfonts api.
   * @return {array} array of Font instances
   */
  _self.getSimplifiedList = function(rawList) {
    var simpleList = [];
    for (var i = 0, len = rawList.length; i < len; i++) {
      var font = new Font(rawList[i]);
      simpleList.push(font);
    }
    return simpleList;
  }
  /**
   * Method to search the list of fonts
   * @param  {object} target
   * @param  {object} event
   */
  _self.searchList = function(target, event) {
    var filter = event.target.value.toLowerCase();
    var lis = document.querySelectorAll('.samples li');
    for (var i = 0; i < lis.length; i++) {
      var name = lis[i].getAttribute("data-family");
      if (name.toLowerCase().indexOf(filter) == 0)
        lis[i].style.display = 'list-item';
      else
        lis[i].style.display = 'none';
    }
  };
}