function loadXMLDoc(imageUrl) {
  $.ajax({
    url: imageUrl,
    jsonp: "",
    datatype: "jsonp",
    success: function () {
      return true
    },
    error: function () {
      return false
    }
  })
}