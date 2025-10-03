README.md for Unit Converter Project# Unit Converter API

A simple and modular REST API for converting between different units of measurement. Built with Node.js and Express.


## Features

- Multiple unit conversion types (distance, temperature, weight)
-  Modular codebase for easy collaboration
-  Input validation and error handling
- Clean JSON responses
-  Easy to extend with new conversion types
- 

## Installation
### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)

### Setup Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd unit-converterInstall dependencies:npm install expressStart the server:node app.jsThe server will run on http://localhost:3000🚀 UsageBasic Request FormatGET /convert?value={number}&type={conversionType}Example RequestsConvert 100 kilometers to miles:http://localhost:3000/convert?value=100&type=kmToMilesConvert 32 Fahrenheit to Celsius:http://localhost:3000/convert?value=32&type=fToCConvert 150 pounds to kilograms:http://localhost:3000/convert?value=150&type=lbsToKgExample Response{
  "input": {
    "value": 100,
    "unit": "kilometers"
  },
  "output": {
    "value": 62.1371,
    "unit": "miles"
  },
  "conversionType": "kmToMiles"
}
}GET /convertPerforms unit conversion based on query parameters.Query Parameters:value (required): 
}
🔄 Supported ConversionsDistancekmToMiles - Kilometers to MilesmilesToKm - Miles to KilometersmToFt - Meters to FeetftToM - Feet to MetersTemperaturecToF - Celsius to FahrenheitfToC - Fahrenheit to CelsiusWeightkgToLbs - Kilograms to PoundslbsToKg - Pounds to Kilograms and so on.

📁 Project Structureunit-converter/
│
├── app.js              # Main server file with API routes
├── conversions.js      # Conversion formulas and configurations
├── package.json        # Project dependencies
└── README.md         
 # Project documentation File Descriptionsapp.js Express server setup API route definitions Input validation and initialization conversions.js Contains all conversion formulas Modular structure for easy additions Exports conversion configurations➕ Adding New Conversions To add a new conversion type: Open conversions.jsAdd a new entry to the conversions object:"newTypeToOldType": {
    formula: (value) => value * conversion Factor,
    from: "newUnit",
    to: "oldUnit"
}
Save the file - no changes needed in app.js!
# Unit-converter