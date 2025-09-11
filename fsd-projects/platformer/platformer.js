$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(210,605,150,50,"deeppink");
createPlatform(410,500,150,50,"mediumorchid");
createPlatform(695,240,50,150,"orchid");
createPlatform(690,500,150,50,"sandybrown");
createPlatform(850,365,150,50,"red");
createPlatform(810,165,100,40,"blue");
createPlatform(400,245,75,50,"orange");
createPlatform(560,605,75,50,"green");
createPlatform(1090,334,50,50,"deeppink");
createPlatform(1250,334,50,50,"goldenrod")



    // TODO 3 - Create Collectables
createCollectable("max",695,195, 0.05);
createCollectable("grace",1020,245);
createCollectable("diamond",425,200,0.05);
createCollectable("steve",1345,245)


    
    // TODO 4 - Create Cannons
createCannon("top",1055,1250);
createCannon("bottom",335,600);
createCannon("left",180,1250);
createCannon("bottom",1150,1250)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
