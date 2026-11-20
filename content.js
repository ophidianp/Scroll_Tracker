chrome.storage.local.get(["totalPixelsScrolled"], (result) => {



    let totalPixelsScrolled = result.totalPixelsScrolled || 0
    
    let lastY = window.scrollY;


    window.addEventListener(
        "scroll",
        () => {
            const currentY = window.scrollY;

            totalPixelsScrolled += Math.abs(currentY - lastY)
            lastY = currentY

            chrome.storage.local.set({
                totalPixelsScrolled
            })
        },
        {
            passive: true
        }
    )
})