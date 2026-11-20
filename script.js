// let num_pixel = 1250;
// let num_meters = (0.0003113 * num_pixel);
// let building = "Bowling pin at the alley";

//test ^



let lastY = window.scrollY;
let totalPixelsScrolled = 0;

window.addEventListener(
    "scroll",
    () => {
        const currentY = window.scrollY;
        const currentX = window.scrollX;

        totalPixelsScrolled += Math.abs(currentY - lastY)
        lastY = currentY

        chrome.runtime.sendMessage({
            type : "SCROLL_UPDATE",
            x: currentX,
            y: currentY,
            totalPixelsScrolled
        })
    },
    {
        passive: true
    }
);


let building = "nothing"
let num_meters = (0.0003113 * totalPixelsScrolled);


if (num_meters <= 0.15){
    building = "a Smartphone"
} else if (num_meters > 0.15 && num_meters <= 0.38){
    building = "a Bowling pin"
} else if (num_meters > 0.38 && num_meters <= 0.75){
    building = "a Desk"
} else if (num_meters > 0.75 && num_meters <= 1.75){
    building = "a Average Human"
}
else if (num_meters > 1.75 && num_meters <= 2.4){
    building = "a Door"
} else if (num_meters > 2.4 && num_meters <= 4.4){
    building = "a Double decker bus"
}
else if (num_meters > 4.4 && num_meters <= 5.5){
    building = "an Adult Giraffe"
} else if (num_meters > 5.5 && num_meters <= 10){
    building = "a Telephone Pole"
}
else if (num_meters > 10 && num_meters <= 20){
    building = "a 6-story Building"
} else if (num_meters > 20 && num_meters <= 46){
    building = "The Statue of Liberty"
}
else if (num_meters > 46 && num_meters <= 139){
    building = "The Great Pyramid of Giza"
} else if (num_meters > 139 && num_meters <= 169){
    building = "The Washington Monument"
}
else if (num_meters > 169 && num_meters <= 330){
    building = "The Eiffel Tower"
} else if (num_meters > 330 && num_meters <= 381){
    building = "The Empire State Building"
}
else if (num_meters > 381 && num_meters <= 541){
    building = "The One WTC"
} else if (num_meters > 541 && num_meters <= 828){
    building = "THE Burj Khalifa"
}
else if (num_meters > 541 && num_meters <= 1000){
    building = "1 Kilometer"
} else if (num_meters > 1000 && num_meters <= 3776){
    building = "Mount Fuji"
}
 else if (num_meters > 3776 && num_meters <= 8849){
    building = "Mount Everest"
}


document.getElementById("num_pixel").textContent = totalPixelsScrolled;
document.getElementById("num_meters").textContent = num_meters;
document.getElementById("building").textContent = building;




//real ^

