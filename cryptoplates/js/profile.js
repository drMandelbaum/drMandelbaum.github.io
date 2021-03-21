async function renderProfile(address) {
    let mainElement = document.createElement("div")
    mainElement.setAttribute("class", "profile_item")

    let icon = blockies.create({
        seed: address,
        size: 10,
        scale: 4,
        spotcolor: -1
    });
    icon.setAttribute("class", "profile_icon")

    let plateAddressParagraph = document.createElement("a")

    plateAddressParagraph.setAttribute("class", "profile_address")
    plateAddressParagraph.setAttribute("href", "?owner=" + address)
    plateAddressParagraph.setAttribute("target", "blank")
    plateAddressParagraph.textContent = address

    mainElement.appendChild(icon)
    mainElement.appendChild(plateAddressParagraph)
    return mainElement
}