// categoryHrefoToDocID returns the Docusaurus page ID that corresponds to the
// given href, which points to a category index page. Category pages do not have
// IDs in the items prop, so we generate a page ID based on the assumption that
// category page slugs are the same as their containing directory names.
export function categoryHrefToDocID(href: string): string {
  const idPrefix = href.replace(new RegExp(`^(/ver/[0-9]+\\.x)?/`), "");
  const slugRE = new RegExp(`/([^/]+)/$`);
  const slug = slugRE.exec(href);
  if (!slug || slug.length != 2) {
    return "";
  }
  return idPrefix + slug[1];
}

