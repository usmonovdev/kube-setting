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

let style = document.createElement("style")
style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    :root {
        --white: white;
        --back: red;
        --green: green;
        --blue: blue;
        --pink: pink;
        --purple: purple;
    }

    body {
        background: var(--white);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #div {
        width: 200px;
        height: 200px;
        perspective: 1000px;
    }   

    #div .father {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform: rotateY(310deg) rotateX(45deg);
        animation: 5s father linear infinite;
    }

    @keyframes father {
        0% {
            transform: rotate(0);
        }
    
        100% {
            transform: rotateX(360deg) rotateY(360deg);
        }
    }

    .father .child {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: var(--white);
        text-transform: uppercase;
    }
    
    .front {
        transform: translateZ(100px);
        background: var(--purple);
    }
    
    .back {
        transform: translateZ(-100px) rotateX(180deg);
        background: var(--back);
    }
    
    .right {
        left: 100px;
        transform: rotateY(90deg);
        background: var(--blue);
    }
    
    .left {
        right: 100px;
        transform: rotateY(-90deg);
        background: var(--pink);
    }
    
    .top {
        bottom: 100px;
        transform: rotateX(90deg);
        background: var(--green);
    }
    
    .bottom {
        top: 100px;
        transform: rotateX(-90deg);
        background: var(--blue);
    }
`;

document.head.appendChild(style)