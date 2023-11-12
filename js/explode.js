(() => {
    const canvas = document.querySelector("#explode-view")
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 391; //how many still frames do we have
    const images = []; //an array to hold all of our images
    //create an object literal with a property frame to hold the current frame
    const buds = {
        frame: 0
    };
    
    for (let i=0; i<frameCount; i++) {
        // console.log(i);
        // const img = new Image();
        const img = document.createElement("img");
        const frameNumber = i + 410;
        //need to recreate a string: images/explode_0001.webp
        // img.src = `images/heartbuds_${(i+1).toString().padStart(4, '0')}.png`;
        // images.push(img);
          img.src = `images/heartbuds${(i+410).toString().padStart(4, '0')}.png`;
        images.push(img);
    }
    // console.table(images)
    
    //Not actually animating a DOM element, but rather an object
    //which contains a frame count
    gsap.to(buds, {
        frame: 390,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
            start: "top top",
            markers: true
        },
        // everytime you use scroll
        onUpdate: render
    }) 
    
    images[0].addEventListener("onload", render);
    
    function render() {
        // console.log(buds.frame);
        // console.log(images[buds.frame]);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }
    })();