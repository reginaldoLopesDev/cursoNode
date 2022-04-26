import { URL } from "url";

const address = "www.facebook.com/galerinha/user?rogerinho/maodevaca=true";

const parsedUrl = new URL(address);

console.log(parsedUrl.host);
console.log(parsedUrl.hostname);
console.log(parsedUrl.origin);
console.log(parsedUrl.pathname);
console.log(parsedUrl.port);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams.get("maodevaca"));
