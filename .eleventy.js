const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (config) => {

    config.addPlugin(syntaxHighlight);

    config.setDataDeepMerge(true);

    config.addFilter('getAuthor', require('./lib/filters/getAuthor'));
    config.addFilter('readableDate', require('./lib/filters/readableDate'));
    config.addFilter('readableDateDay', require('./lib/filters/readableDateDay'));
    config.addFilter('readableDateYear', require('./lib/filters/readableDateYear'));
    config.addFilter('readableDateMonth', require('./lib/filters/readableDateMonth'));
    config.addFilter('readableDateMonthShort', require('./lib/filters/readableDateMonthShort'));
    
    // Get the first `n` elements of a collection.
    config.addFilter("head", (array, n) => {
      if(!Array.isArray(array) || array.length === 0) {
        return [];
      }
      if( n < 0 ) {
        return array.slice(n);
      }

      return array.slice(0, n);
    });

    config.addCollection('posts', require('./lib/collections/posts'));
    config.addCollection('pagedPosts', require('./lib/collections/pagedPosts'));

    config.addPassthroughCopy('./src/assets'); // Assets
    config.addPassthroughCopy({'static':  '.'}); // Generates in the root directory of the site.

    config.addPairedShortcode("alert", function(text) {
      return `
<div class="alert">
    ${text}
</div>
      `;
    });

    config.addPairedShortcode("highlight", function(text) {
      return `
<span class="highlight" data-tooltip="Share Text" data-tooltip-additional-classes="tooltip" onclick='contentToClipboard(this); toast("Text copied to clipboard.");'>
  ${text}
</span>
      `;
    });

    config.addPairedShortcode("bg", function(content) {
      return `
<div class="bg">
    ${content}
</div>
      `;
    });

    config.addPairedShortcode("demo", function(code) {
      return `
<div class="code-demo">
<textarea id="demo-textarea" readonly>${code}</textarea>

<div class="code-demo-header">
<span class="code-demo-option" onclick="demoResult()" onKeyDown="demoResult()" tabindex="0" role="button">Result</span>
<span class="code-demo-option" onclick="demoCode()" onKeyDown="demoCode()" tabindex="0" role="button">Code</span>
<span class="ri-clipboard-line code-demo-icon" onclick="demoCopy()" onKeyDown="demoCopy()" tabindex="0" role="button" aria-label="Copy Code"></span>
</div>

<div class="code-demo-content">

<div class="code-demo-1" id="demo-result">
    <iframe srcdoc='${code}'></iframe>
</div>

<div class="code-demo-2" id="demo-code">
<textarea readonly>
${code}
</textarea>
</div>

</div>

</div>
      `;
    });
  
    return {
      dir: {
        input: 'src',
        output: '_site'
      },
      // pathPrefix: "/subfolder/",
      templateFormats: ['md', 'njk', 'html'],
      dataTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk'
    };
};