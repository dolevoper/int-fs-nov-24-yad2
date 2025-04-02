document.forms.namedItem("create listing")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement, e.submitter);
    const rawListing = Object.fromEntries(formData);
    const listing = {
        ...rawListing,
        price: Number(rawListing.price),
        description: rawListing.description || undefined
    };
    const body = JSON.stringify(listing);

    formElement
        .querySelectorAll("input, textarea, button")
        .forEach((element) => element.setAttribute("disabled", "true"));

    await fetch(`/api/listings/${crypto.randomUUID().replace(/-/g, "").slice(0, 24)}`, {
        method: "put",
        body,
        headers: {
            "content-type": "application/json"
        }
    });

    window.location.replace("/");
});
