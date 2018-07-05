/// Python-like String formatting //////////////////////////////////////////////
/**
 * @name: String.format()
 * @description: Adds a printf-like formatting function to the 'String' object
 * @usage: msg = "Adding {} + {}".format(int1, int2)
 * @author: Mike Rightmire
 * @email:  Mike.Rightmire@Biocomsoftware.com
 * @copyright: BiocomSoftware
 * @version: 0.9.0.0
 * @Licensing LGPL
*/
Object.assign(String.prototype, {
    format() {
		  var i = 0, args = arguments;
		  return this.replace(/{}/g, function () {
		    return typeof args[i] != 'undefined' ? args[i++] : '';
		  });
    }
});
