const callOuter = (event)=>{
    console.table([
        {
            Description: "I am outer div",
            Target: event.target,
            CurrentTarget: event.currentTarget,
        },
    ]);
};

const callMiddle = (event)=>{
    console.table([
        {
            Description: "I am middle div",
            Target: event.target,
            CurrentTarget: event.currentTarget,
        },
    ]);
    // event.stopPropagation();
};

const callInner = (event)=>{
    console.table([
        {
            Description: "I am inner div",
            Target: event.target,
            CurrentTarget: event.currentTarget,
        },
    ]);
    // event.stopPropagation();
};

document.getElementById("outer").addEventListener("click", callOuter, true);
document.getElementById("middle").addEventListener("click", callMiddle, true);
document.getElementById("inner").addEventListener("click", callInner, true);
