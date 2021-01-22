
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    var p = document.createElement("p");
    var text = document.createTextNode(string)
    p.appendChild(text);
    htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);