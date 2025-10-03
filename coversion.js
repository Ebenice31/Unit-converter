const unitConverter = {
    "kmToMile" : {
        formula: (value) => value * 0.621371,
        from : "kilometer", 
        to :" Miles"
    },
    "MileToKilometer" : {
        formula: (value) => value * 1.60934,
        from : "Miles", 
        to :" kilometers"
    },
    "celsusToFahrenheit" : {
        formula: (value) => (value * 9/5) + 32,
        from : "celsus", 
        to :" Fahrenheit"
    },
    
    "FahrenheitTocelsus" : {
        formula: (value) => (value * 9/5) + 32,
        from : "Fahrenheit", 
        to :"celsus"
    },
    "celsusToFahrenheit" : {
        formula: (value) => (value * 32 ) + 9/5,
        from : "celsus", 
        to :" Fahrenheit"
    },
    "KilogramToPounds" : {
        formula: (value) => value * 2.20462,
        from : "Kilogram", 
        to :" Pounds"
    },
    "PoundsToKilogram" : {
        formula: (value) => value / 2.20462,
        from : "Pounds", 
        to :"Kilogram"
    },
    "feetToMeter" : {
        formula: (value) => value / 3.28084,
        from : "feet", 
        to :"meter"
    },
    "metersToFeet" : {
        formula: (value) => value * 3.28084,
        from : "Meters", 
        to :"Feet"
    },
    "PoundsToOunces" : {
        formula: (value) => value * 16,
        from : "Pounds", 
        to :"Ounces"
    },
    "OuncesToPounds" : {
        formula: (value) => value / 16,
        from : "Ounces", 
        to :"Pounds"
    },
    "LeterssToMilliliters" : {
        formula: (value) => value * 1000,
        from : "Leters", 
        to :"Milliliters"
    },
    "MillilitersToLeters" : {
        formula: (value) => value /1000,
        from : "Milliliters", 
        to :"Leters"
    },
    "InchesToCentimeter" : {
        formula: (value) => value * 2.58,
        from : "Inches", 
        to :"Centimeter"
    },
    "CentimetertoInches" : {
        formula: (value) => value / 2.58,
        from : "Centimeter", 
        to :"Inches"
    },
    "KelvinToCelsius" : {
        formula: (value) => value - 273.15,
        from : "Kelvin", 
        to :"Celsius"
    },
    "CelsiusToKelvin" : {
        formula: (value) => value + 273.15,
        from : "Celsius", 
        to :"Kelvin"
    },
    "KilogramsToGram" : {
        formula: (value) => value * 1000,
        from : "Kilogram", 
        to :"Gram"
    },
    "GramsToKilograms" : {
        formula: (value) => value / 1000,
        from : "Grams", 
        to :"Kilograms"
    },
    "MetersToKilometers" : {
        formula: (value) => value / 1000,
        from : "Meters", 
        to :"Kilometers"
    },
    "KilometersToMeters" : {
        formula: (value) => value * 1000,
        from : "Kilometers", 
        to :"Meters"
    },

    
}

module.exports = unitConverter