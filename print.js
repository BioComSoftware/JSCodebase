/**
 * @name: print
 * @description: Dumps a slightly more informative console.log of a variable
 * @usage: require("./print")(); print("Varname", Varname);  
 * @param: "Varname" = The text description of the variable.
 * @param: Varname   = The variable to dump. 
 * @author: Mike Rightmire
 * @email:  Mike.Rightmire@Biocomsoftware.com
 * @copyright: BiocomSoftware
 * @version: 0.9.0.0
 * @Licensing LGPL
*/
module.exports = function() { 
    this.print = function (name, a){
    	if ( typeof a == 'undefined' ) {
    		process.stdout.write("(typeof: undefined)[length:0]" );
			console.log(" " + name + " = undefined");
    	} else {
			process.stdout.write("(typeof: " + typeof a + ")");
			process.stdout.write("[length:" + a.length + "]");
			process.stdout.write(" " + name + " = ");
		    console.log(a);
    	}
	}
}