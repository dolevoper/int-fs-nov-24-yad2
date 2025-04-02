export async function app(listings: HTMLUListElement) {
    const res = await fetch("/api/listings");
    const data = await res.json();

    listings.innerHTML = data
        .map((listing: any) => `<li><a href="/listing#${listing._id}">${listing.title}</a></li>`)
        .join("\n");
}
