import DOMPurify from "isomorphic-dompurify";

export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      "p", "br", "strong", "b", "em", "i", "u", "s", "h1", "h2", "h3",
      "h4", "h5", "h6", "ul", "ol", "li", "blockquote", "pre", "code",
      "a", "img", "span", "div", "hr", "sub", "sup", "table", "thead",
      "tbody", "tr", "th", "td", "figure", "figcaption", "video", "source",
    ],
    ALLOWED_ATTR: [
      "href", "target", "rel", "src", "alt", "class", "id", "style",
      "width", "height", "frameborder", "allowfullscreen", "allow",
      "data-*", "controls", "autoplay", "loop", "muted", "poster",
      "type", "srcset", "sizes", "loading",
    ],
    ALLOW_DATA_ATTR: true,
  });
}
