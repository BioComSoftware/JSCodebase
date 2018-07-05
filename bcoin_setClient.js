/**
 * @name: setClient()
 * @description: Sets bcoin client object based on parameters in the process.env
 * @usage: require('./setClient')(); client = setClient()
 * @author: Mike Rightmire
 * @email:  Michael.Rightmire@groenewold-newmedia.de
 * @copyright: Groenewold New Media
 * @version: 0.9.0.0
 * @Licensing: ALl rights reserved
*/

module.exports = function() { 
	this.setClient = function () { // defaults
		/* Set the parameters for the node client to be transacted against */
		const {Network}      = require('bcoin');
		const network 	     = Network.get(process.env.net);
		const {NodeClient} = require('bclient');
		const clientOptions = {
				  network: network.type, // I.e. testnet
				  host: process.env.nodeHost,
				  port: network.rpcPort,
				  apiKey: process.env.nodeApiKey
				}
		const client = new NodeClient(clientOptions);
		return client;
	}
}
