function onCountryChange ( countryCode) {
    // query added to the url on country change
    window.location.href = `?countryCode=${countryCode}`;
}