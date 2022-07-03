let container = document.getElementById("div")
let externalHTML = `
    <div class="father">
        <div class="child front">Front</div>
        <div class="child back">Back</div>
        <div class="child right">Right</div>
        <div class="child left">Left</div>
        <div class="child bottom">Bottom</div>
        <div class="child top">Top</div>
    </div>

    <div>
        <input type="range" id="x">
        <label for="x">x deg</label>
    </div>
    <div>
        <input type="range" id="y">
        <label for="y">y deg</label>
    </div>
    <div>
        <input type="range" id="z">
        <label for="z">z deg</label>
    </div>
`;

container.innerHTML = externalHTML;