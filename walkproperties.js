/**
 * @name: walkproperties
 * @description: Walks through a Javascript object and prints all the properties
 * @usage: walkproperties(obj, indent="")
 * @param: obj = The object to be walked
 * @param: indent: String. Subproperties will be indented (demarcated) by this string. Each level is marked by X-number of repeats of "indent". DEFAULT: Whitespace
 * @author: Mike Rightmire
 * @email:  Mike.Rightmire@Biocomsoftware.com
 * @copyright: BiocomSoftware
 * @version: 0.9.0.0
 * @Licensing LGPL
*/
module.exports = {
	walkproperties: function (name, obj, indent=""){	
		// If object has no getOwnPropertyNames (like string, number) just close this recursive iteration
		try { objects = Object.getOwnPropertyNames(obj); } catch(err) { return; }

		// Loop through each propery returned from getOwnPropertyNames
	    objects.forEach(function(property) {

	    	// Set type of property (Object, function, string, etc)
	    	typestr = String(typeof obj[property])

	    	// Create print string
	    	printstr = "(" + typestr + ")" + name; // Base print string
	    	// tack on variable name if exists
	    	try  { 
	    		if (String(obj[property].name) !== "undefined") { 
	    			printstr = printstr + "." + obj[property].name; } 
	    	} catch(err){} // Pass
	    	// Set "equals" based on type (if possible)
	    	if (typestr === 'function') { printstr = printstr + " === " + "function"; }
	    	if (typestr === 'string') { printstr = printstr + " === " + obj[property] }  
	    	if (typestr === 'number') { printstr = printstr + " === " +  (obj[property].toString(16)); }
//	    	if (typestr === 'number') { printstr = printstr + " === " +  (obj[property].toString('hex')); }
	    	if (typestr === 'boolean') { printstr = printstr + " === " +  String(obj[property]); }
//	    	if (typestr === 'undefined') { printstr = printstr + " === " +  String(obj[property]); }
		    
		    // This comes second to last  
		    console.log(printstr); 
		    
		    // THIS COMES LAST!!!
		    // If it's an object, recurse to get IT'S properties. 
	    	if (typeof obj[property] == 'object'){
	    		  name = name + "." + property;
	    		  module.exports.walkproperties(name, obj[property], indent = indent += ""); 
	    		  } // recurse
	    }); // foreach
	} // walkproperties
	
	
} // End exports