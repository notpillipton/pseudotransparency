/*
* Allow a baseColor to be set by the user
* Determine where in the segmented range the baseColor would land
* Calculate the R, G, and B variances in each direction
* Determine the multiplier for R, G, and B in each direction
* Populate an array of objects representing each color, separated into R, G, and B components
* Return the array of objects
*/

var rangeSteps = 20;

var Color = {
    red: 0
    green: 0
    blue: 0
    setColor: function(redParam, greenParam, blueParam) {
        this.red = redParam;
        this.blue = blueParam;
        this.green = greenParam;
    }
}

var baseColor = new Color;

baseColor.updateBase = function(redParam, greenParam, blueParam) {
    baseColor.setColor(redParam, greenParam, blueParam);
    baseColor.position = Math.round(((baseColor.red + baseColor.blue + baseColor.green) / 3) / (255 / rangeSteps));
}

var spectrum = {
    colors = [];
    specBase = baseColor; // spectrum.specBase becomes an alias for baseColor
    populateSpectrum = function() {
        this.populateAbove();
        this.populateBelow();
    }
    populateAbove = function() {
        
    }
    populateBelow = function() {
        
    }    
}