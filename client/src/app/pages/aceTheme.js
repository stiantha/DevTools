/* global ace */
ace.define("ace/theme/my_theme",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {
  exports.isDark = true;
  exports.cssClass = "ace-my-theme";
  exports.cssText = `
  .ace-my-theme .ace_gutter {
      background: #1e1e1e;
      color: #BEBEBE;
      border-right: 1px solid #333333;
      padding-top: 10px;
  }
  .ace-my-theme .ace_print-margin {
      width: 1px;
      background: #555555;
  }
  .ace-my-theme {
      background-color: #1e1e1e;
      color: #F8F8F8;
  }
  .ace-my-theme .ace_content  {
      margin-left: 10px; /* Add left padding here */
      margin-top: 10px; /* Add top margin here */
  }
  .ace-my-theme .ace_keyword {
      color: #F92672;
  }
  .ace-my-theme .ace_string {
      color: #E6DB74;
  }
  .ace-my-theme .ace_comment {
      color: #75715E;
  }
  .ace-my-theme .ace_selection {
      background: #525252;
  }
  `;

  var dom = acequire("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});