Package.describe({
  summary: "Add a Meteor.isMobile boolean variable",
  version: "0.8.0_1",
  name: "mquandalle:jquery-textcomplete",
  git: "https://github.com/mquandalle/meteor-jquery-textcomplete.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use("jquery", "client");
  var basePath = "jquery-textcomplete/dist/jquery.textcomplete";
  api.addFiles([basePath + ".js", basePath + ".css"], "client");
});
