const container = document.getElementById("key-container");

container.innerHTML = generatehtml("-", "-", "-");

window.addEventListener("keydown", (e) => {
    container.innerHTML = generatehtml(
        e.key,
        e.code,
        e.key.charCodeAt(0)
    );
});

function generatehtml(key, code, keyCode) {
    return `
        <div class="key-container">
            <h4>Key</h4>
            <div class="animation"></div>${key === " " ? "Space" : key}
        </div>

        <div class="key-container">
            <h4>Code</h4>
            <div class="animation"></div>${code}
        </div>

        <div class="key-container">
            <h4>KeyCode</h4>
            <div class="animation"></div>${keyCode}
        </div>
    `;
}
