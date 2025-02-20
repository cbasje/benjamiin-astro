class CompareImage extends HTMLElement {
    constructor() {
        super();

        const rangeInput: HTMLInputElement | null =
            this.querySelector("input[type=range]");
        rangeInput?.addEventListener("input", () =>
            this.style.setProperty("--pos", `${rangeInput?.value}%`),
        );
    }
}

customElements.define("compare-image", CompareImage);
