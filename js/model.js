(() => {
    //console.log("IIFE Fired");
    //variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    const infoBoxes = [
      {
        title: "Speaker",
        text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.",
        image: 'images/dynamic-light.jpg'
      },

      {
        title: "Speaker",
        text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.",
        image: 'images/control-buttons.jpg'
      },

      {
        title: "Speaker",
        text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.",
        image: 'images/noise-cancellation.jpg'
      },

      {
        title: "Speaker",
        text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.",
        image: 'images/rapid-charge.jpg'
      }
    ]
  
    //functions
    function modelLoaded() {
      //console.log(hotspots);
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function loadInfo() {
      infoBoxes.forEach((infoBox, index)=>{
        let selected = document.querySelector(`#hotspot-${index+1}`);
        const imgElement = document.createElement('img');
        imgElement.src = infoBox.image;
        const titleElement = document.createElement('h2');
        titleElement.textContent = infoBox.title;
        const textElement = document.createElement('p');
        textElement.textContent = infoBox.title;
        // document.createElement('h2');
        // .textContent = infoBoxe.title;
        // document.createElement('p');
        // .textContent = infoBoxe.text;
        console.log(selected);
        console.log(infoBox.title);
        console.log(infoBox.text);
  
        selected.appendChild(imgElement);
        // selected.appendChild();
      })
    }
    loadInfo();
  
    function showInfo() {
      //console.log(this.slot);
      //console.log(`#${this.slot}`);
      //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      //console.log(this.slot);
      //console.log(`#${this.slot}`);
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    //Event Listener
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();
  
  // In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.